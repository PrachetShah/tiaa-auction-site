import 'dart:typed_data';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:file_picker/file_picker.dart';
import 'package:firebase_storage/firebase_storage.dart' ;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:online_action/components/ImageUploading.dart';
import 'package:online_action/pages/list_of_auction_screen.dart';

class FirstVerification extends StatefulWidget {
  final Function(int) onDataChanged;
  const FirstVerification({required this.onDataChanged});

  @override
  State<FirstVerification> createState() => _FirstVerificationState();
}

class _FirstVerificationState extends State<FirstVerification> {
   void _updateData(int data) {
    widget.onDataChanged(data);
  }
  int flag=0;
  TextEditingController aadharNumber=TextEditingController();
   var isuploading=false;
  filepicker() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
        allowMultiple: true,
        type: FileType.custom,
        allowedExtensions: ['pdf', 'jpg']);
    if (result != null) {
      setState(() {
          isuploading=true;
        });
      File file = File(result.files.single.path!);

    
      Uint8List? fileBytes = await file.readAsBytes();
      print(fileBytes);

      if (fileBytes == null) {
        Fluttertoast.showToast(msg: "File byte is null");
      } else {
        String filename = DateTime.now().toString();
       UploadTask uploadTask=  FirebaseStorage.instance
            .ref()
            .child('aadharCard')
            .child(filename)
            .putData(fileBytes);


        TaskSnapshot taskSnapshot=await uploadTask.whenComplete(() {});
        flag=1;
        String downloadURL = await taskSnapshot.ref.getDownloadURL();
        
        
        
        String itemUniqueId=DateTime.now().millisecondsSinceEpoch.toString();
        await FirebaseFirestore.instance.collection('aadharCard').doc(itemUniqueId).set(
          {
            "aaddharCarNumber":aadharNumber.text,
            "file":downloadURL,
            "flag":flag,
            
            
          }
        );
        _updateData(flag);
        

      }
    } else {
      Fluttertoast.showToast(msg: "Please upload the correct file");
    }

   
    setState(() {
      isuploading=false;
    });
    Navigator.push(context,MaterialPageRoute(builder: (context) => ItemsUploadScreen(),));
  }

  @override
  Widget build(BuildContext context) {
    return Center(

      child: Container(
          height: 150,
          margin: const EdgeInsets.all(15),
          child: Column(
            children: [
               TextField(
                controller: aadharNumber,
                decoration:const InputDecoration(
                    hintText: "Enter Your Aadhar Card Number",
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(5)))),
                keyboardType: TextInputType.number,
              ),
              ElevatedButton.icon(
                  onPressed: filepicker,
                  icon: const Icon(Icons.file_copy),
                  label: const Text("Pick up a file")),
              isuploading?const LinearProgressIndicator():const SizedBox(height: 20,)
            ],
          )),
    );
  }
}
