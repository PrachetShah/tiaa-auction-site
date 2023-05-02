import 'package:flutter/services.dart';
import 'package:intl/intl.dart';
import 'package:online_action/pages/list_of_auction_screen.dart';
import '../api/RemovingImage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:image_picker/image_picker.dart';
import 'package:firebase_storage/firebase_storage.dart' as fStorage;
enum Category { electronics, realEstate, artPiece, jewellery, antiques }
enum Number { one, two, three, four, five }
class ItemsUploadScreen extends StatefulWidget {
  @override
  State<ItemsUploadScreen> createState() => _ItemsUploadScreenState();
}
class _ItemsUploadScreenState extends State<ItemsUploadScreen> {
  var maxChars = 100;
  var textBefore = "";

  Category? selectedCategory = Category.electronics;
  Number? selectedNumber = Number.one;
  Future<void> _submit(BuildContext context) async {
    
  }

  void _selectEndTime(BuildContext context) async {
    final TimeOfDay? picked =
        await showTimePicker(context: context, initialTime: _selectedEndTime);
    if (picked != null && picked != _selectedEndTime) {
      setState(() {
        _selectedEndTime = picked;
      });
    }
  }

  void _selectStartTime(BuildContext context) async {
    final TimeOfDay? picked =
        await showTimePicker(context: context, initialTime: _selectedStartTime);
    if (picked != null && picked != _selectedStartTime) {
      setState(() {
        _selectedStartTime = picked;
      });
    }
  }

  void _selectEndDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
        context: context,
        initialDate: _selectedEndDate,
        firstDate: _selectedStartDate,
        lastDate: DateTime(2100));
    if (picked != null && picked != _selectedEndDate) {
      setState(() {
        _selectedEndDate = picked;
      });
    }
  }

  void _selectStartDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
        context: context,
        initialDate: _selectedStartDate,
        firstDate: DateTime.now(),
        lastDate: DateTime(2100));
    if (picked != null && picked != _selectedStartDate) {
      setState(() {
        _selectedStartDate = picked;
      });
    }
  }

  final _formKey = GlobalKey<FormState>();
  DateTime _selectedStartDate = DateTime.now();
  DateTime _selectedEndDate = DateTime.now();
  TimeOfDay _selectedStartTime = TimeOfDay(hour: 12, minute: 0);
  TimeOfDay _selectedEndTime = TimeOfDay(hour: 12, minute: 0);

  Uint8List? imageFileUint8List;

  TextEditingController sellerNameTextEditingController =
      TextEditingController();
  TextEditingController sellerPhoneTextEditingController =
      TextEditingController();
  TextEditingController itemNameTextEditingController = TextEditingController();
  TextEditingController itemDescriptionTextEditingController =
      TextEditingController();
  TextEditingController itemPriceTextEditingController =
      TextEditingController();
  TextEditingController itemIncrementPriceTextEditingController=TextEditingController();
  
  bool isUploading = false;
  String downloadUrlOfUploadedImage = "";

  //upload form screen
  Widget uploadFormScreen() {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text(
          "Upload New Item",
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        centerTitle: true,
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
          },
          icon: const Icon(
            Icons.arrow_back_rounded,
            color: Colors.white,
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.all(4.0),
            child: IconButton(
              onPressed: () {
                //validate upload form fields
                if (isUploading != true) //false
                {
                  validateUploadFormAndUploadItemInfo();
                }
              },
              icon: const Icon(
                Icons.cloud_upload,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
      body: ListView(
        children: [
          isUploading == true
              ? const LinearProgressIndicator(
                  color: Colors.purpleAccent,
                )
              : Container(),

          //image
          SizedBox(
            height: 230,
            width: MediaQuery.of(context).size.width * 0.8,
            child: Center(
              child: imageFileUint8List != null
                  ? Image.memory(imageFileUint8List!)
                  : const Icon(
                      Icons.image_not_supported,
                      color: Colors.grey,
                      size: 40,
                    ),
            ),
          ),

          const Divider(
            color: Colors.white70,
            thickness: 2,
          ),
          //seller name
          ListTile(
            leading: const Icon(
              Icons.person_pin_rounded,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                style: const TextStyle(color: Colors.grey),
                controller: sellerNameTextEditingController,
                decoration: const InputDecoration(
                  hintText: "seller name",
                  hintStyle: TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

          //seller phone
          ListTile(
            leading: const Icon(
              Icons.phone_iphone_rounded,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                style: const TextStyle(color: Colors.grey),
                controller: sellerPhoneTextEditingController,
                decoration: const InputDecoration(
                  hintText: "seller phone",
                  hintStyle: TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

          // category
          ListTile(
            leading: const Text(
              "Choose a Category",
              style: TextStyle(color: Colors.white),
            ),
            title: Container(
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.3),
                borderRadius: BorderRadius.circular(5.0),
              ),
              padding: const EdgeInsets.symmetric(horizontal: 10.0),
              child: DropdownButton<Category>(
                value: selectedCategory,
                dropdownColor: Colors.black,
                style: const TextStyle(color: Colors.white),
                onChanged: (Category? newValue) {
                  setState(() {
                    selectedCategory = newValue!;
                  });
                },
                items: Category.values
                    .map<DropdownMenuItem<Category>>((Category category) {
                  return DropdownMenuItem<Category>(
                    value: category,
                    child: Text(category.toString().split('.').last),
                  );
                }).toList(),
              ),
            ),
          ),
          //item name
          ListTile(
            leading: const Icon(
              Icons.title,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                style: const TextStyle(color: Colors.grey),
                controller: itemNameTextEditingController,
                decoration: const InputDecoration(
                  hintText: "item name",
                  hintStyle: TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

          //item description
          ListTile(
            leading: const Icon(
              Icons.description,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                onChanged: (text) {
                  final oldLength = textBefore.length;
                  final newLength = text.length;

                  if (newLength > oldLength) {
                    setState(() {
                      maxChars--;
                    });
                  } else {
                    setState(() {
                      maxChars++;
                    });
                  }
                  textBefore = text;
                },
                inputFormatters: [LengthLimitingTextInputFormatter(100)],
                keyboardType: TextInputType.multiline,
                maxLines: 3,
                style: const TextStyle(color: Colors.grey),
                controller: itemDescriptionTextEditingController,
                decoration: InputDecoration(
                  hintText: "item description",
                  labelText: ("Max charaters $maxChars"),
                  hintStyle: const TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

          //item  base price
          ListTile(
            leading: const Icon(
              Icons.price_change,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                style: const TextStyle(color: Colors.grey),
                controller: itemPriceTextEditingController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  hintText: "Item Base Price",
                  hintStyle: TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

          // Item Increment Price
          ListTile(
            leading: const Icon(
              Icons.price_change,
              color: Colors.white,
            ),
            title: SizedBox(
              width: 250,
              child: TextField(
                style: const TextStyle(color: Colors.grey),
                controller: itemIncrementPriceTextEditingController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  hintText: "Item Increment Price",
                  hintStyle: TextStyle(color: Colors.grey),
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          const Divider(
            color: Colors.white70,
            thickness: 1,
          ),

        //no of bids to double it up
          ListTile(
            leading: const Text(
              "Choose a Number",
              style: TextStyle(color: Colors.white),
            ),
            title: Container(
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.3),
                borderRadius: BorderRadius.circular(5.0),
              ),
              padding: const EdgeInsets.symmetric(horizontal: 10.0),
              child: DropdownButton<Number>(
                value: selectedNumber,
                dropdownColor: Colors.black,
                style: const TextStyle(color: Colors.white),
                onChanged: (Number? newValue) {
                  setState(() {
                    selectedNumber = newValue!;
                  });
                },
                items: Number.values
                    .map<DropdownMenuItem<Number>>((Number number) {
                  return DropdownMenuItem<Number>(
                    value: number,
                    child: Text(number.toString().split('.').last),
                  );
                }).toList(),
              ),
            ),
          ),

          // timeline

          Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Expanded(
                      child: InkWell(
                        onTap: () {
                          _selectStartDate(context);
                        },
                        child: InputDecorator(
                          decoration: InputDecoration(
                              labelText: 'Auction Start Date',
                              labelStyle: TextStyle(color: Colors.white),
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(5.0))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                DateFormat('EEE, MMM d, yyyy')
                                    .format(_selectedStartDate),
                                style: TextStyle(
                                  fontSize: 16.0,
                                  color: Colors.white,
                                ),
                              ),
                              Icon(
                                Icons.calendar_today,
                                color: Colors.white,
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 16.0,
                    ),
                    Expanded(
                      child: InkWell(
                        onTap: () {
                          _selectStartTime(context);
                        },
                        child: InputDecorator(
                          decoration: InputDecoration(
                              labelText: 'Auction Start Time',
                              labelStyle: TextStyle(color: Colors.white),
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(5.0))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                _selectedStartTime.format(context),
                                style: TextStyle(
                                  fontSize: 16.0,
                                  color: Colors.white,
                                ),
                              ),
                              Icon(
                                Icons.access_time,
                                color: Colors.white,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 16.0),
                Row(
                  children: <Widget>[
                    Expanded(
                      child: InkWell(
                        onTap: () {
                          _selectEndDate(context);
                        },
                        child: InputDecorator(
                          decoration: InputDecoration(
                              labelText: 'Auction End Date',
                              labelStyle: TextStyle(color: Colors.white),
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(5.0))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                DateFormat('EEE, MMM d, yyyy')
                                    .format(_selectedEndDate),
                                style: TextStyle(
                                  fontSize: 16.0,
                                  color: Colors.white,
                                ),
                              ),
                              Icon(
                                Icons.calendar_today,
                                color: Colors.white,
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 16.0,
                    ),
                    Expanded(
                      child: InkWell(
                        onTap: () {
                          _selectEndTime(context);
                        },
                        child: InputDecorator(
                          decoration: InputDecoration(
                              labelText: 'Auction End Time',
                              labelStyle: TextStyle(color: Colors.white),
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(5.0))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                _selectedEndTime.format(context),
                                style: TextStyle(
                                  fontSize: 16.0,
                                  color: Colors.white,
                                ),
                              ),
                              Icon(
                                Icons.access_time,
                                color: Colors.white,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 16.0),
                ElevatedButton(
                  onPressed: () {
                    _submit(context);
                  },
                  child: Text('Submit'),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }

  validateUploadFormAndUploadItemInfo() async {
    if (imageFileUint8List != null) {
      if (sellerNameTextEditingController.text.isNotEmpty &&
          sellerPhoneTextEditingController.text.isNotEmpty &&
          itemNameTextEditingController.text.isNotEmpty) {
        setState(() {
          isUploading = true;
        });

        //1.upload image to firebase storage
        String imageUniqueName =
            DateTime.now().millisecondsSinceEpoch.toString();

        fStorage.Reference firebaseStorageRef = fStorage
            .FirebaseStorage.instance
            .ref()
            .child("Items Images")
            .child(imageUniqueName);

        fStorage.UploadTask uploadTaskImageFile =
            firebaseStorageRef.putData(imageFileUint8List!);

        fStorage.TaskSnapshot taskSnapshot =
            await uploadTaskImageFile.whenComplete(() {});

        await taskSnapshot.ref.getDownloadURL().then((imageDownloadUrl) {
          downloadUrlOfUploadedImage = imageDownloadUrl;
        });

        saveItemInfoToFirestore();
      } else {
        Fluttertoast.showToast(
            msg: "Please complete upload form. Every field is mandatory.");
      }
    } else {
      Fluttertoast.showToast(msg: "Please select image file.");
    }
  }

//2.save item info to firestore database
  saveItemInfoToFirestore() async {
     String itemUniqueId = DateTime.now().millisecondsSinceEpoch.toString();
  if (_formKey.currentState!.validate()) {
      final DateTime startDateTime = DateTime(
          _selectedStartDate.year,
          _selectedStartDate.month,
          _selectedStartDate.day,
          _selectedStartTime.hour,
          _selectedStartTime.minute);
      final DateFormat formatter = DateFormat('yyyy-MM-dd HH:mm:ss');
      final String formattedStartDateTime = formatter.format(startDateTime);

      final DateTime endDateTime = DateTime(
          _selectedEndDate.year,
          _selectedEndDate.month,
          _selectedEndDate.day,
          _selectedEndTime.hour,
          _selectedEndTime.minute);
      final String formattedEndDateTime = formatter.format(endDateTime);
        await  FirebaseFirestore.instance.collection("items").doc(itemUniqueId).set({
      "itemID": itemUniqueId,
      "itemName": itemNameTextEditingController.text,
      "itemDescription": itemDescriptionTextEditingController.text,
      "itemImage": downloadUrlOfUploadedImage,
      "sellerName": sellerNameTextEditingController.text,
      "sellerPhone": sellerPhoneTextEditingController.text,
      "itemBasePrice": itemPriceTextEditingController.text,
      "itemIncrementPrice": itemIncrementPriceTextEditingController.text,
      "Category":selectedCategory.toString(),
      "number":selectedNumber.toString(),
      "publishedDate": DateTime.now(),
      "status": "available",
        'auction_start_datetime': formattedStartDateTime,
        'auction_end_datetime': formattedEndDateTime
      
    });


    Fluttertoast.showToast(msg: "your new Item uploaded successfully.");

    setState(() {
      isUploading = false;
      imageFileUint8List = null;
    });

      
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content:  Text('Auction submitted!'),
      ));
    }
   

   
    Navigator.push(context,
        MaterialPageRoute(builder: (c) => const ListOfAuctionScreen()));
  }

  //default screen
  Widget defaultScreen() {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text(
          "Upload New Item",
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.add_photo_alternate,
              color: Colors.white,
              size: 200,
            ),
            ElevatedButton(
              onPressed: () {
                showDialogBox();
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.black54,
              ),
              child: const Text(
                "Add New Item",
                style: TextStyle(
                  color: Colors.white70,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  showDialogBox() {
    return showDialog(
        context: context,
        builder: (c) {
          return SimpleDialog(
            backgroundColor: Colors.black,
            title: const Text(
              "Item Image",
              style: TextStyle(
                color: Colors.white70,
                fontWeight: FontWeight.bold,
              ),
            ),
            children: [
              SimpleDialogOption(
                onPressed: () {
                  captureImageWithPhoneCamera();
                },
                child: const Text(
                  "Capture image with Camera",
                  style: TextStyle(
                    color: Colors.grey,
                  ),
                ),
              ),
              SimpleDialogOption(
                onPressed: () {
                  chooseImageFromPhoneGallery();
                },
                child: const Text(
                  "Choose image from Gallery",
                  style: TextStyle(
                    color: Colors.grey,
                  ),
                ),
              ),
              SimpleDialogOption(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text(
                  "Cancel",
                  style: TextStyle(
                    color: Colors.grey,
                  ),
                ),
              ),
            ],
          );
        });
  }

  captureImageWithPhoneCamera() async {
    Navigator.pop(context);

    try {
      final pickedImage =
          await ImagePicker().pickImage(source: ImageSource.camera);

      if (pickedImage != null) {
        String imagePath = pickedImage.path;
        imageFileUint8List = await pickedImage.readAsBytes();

        //remove background from image
        //make image transparent
        imageFileUint8List =
            await ApiHittingRemoveImage().removeBackground(imagePath);

        setState(() {
          imageFileUint8List;
        });
      }
    } catch (errorMsg) {
      print(errorMsg.toString());

      setState(() {
        imageFileUint8List = null;
      });
    }
  }

  chooseImageFromPhoneGallery() async {
    Navigator.pop(context);

    try {
      final pickedImage =
          await ImagePicker().pickImage(source: ImageSource.gallery);

      if (pickedImage != null) {
        String imagePath = pickedImage.path;
        imageFileUint8List = await pickedImage.readAsBytes();

        //remove background from image
        //make image transparent
        imageFileUint8List =
            await ApiHittingRemoveImage().removeBackground(imagePath);

        setState(() {
          imageFileUint8List;
        });
      }
    } catch (errorMsg) {
      print(errorMsg.toString());

      setState(() {
        imageFileUint8List = null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return imageFileUint8List == null ? defaultScreen() : uploadFormScreen();
  }
}
