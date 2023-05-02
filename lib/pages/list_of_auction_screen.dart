import 'package:flutter/material.dart';
import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import 'package:online_action/components/ItemCard.dart';
import '../customizable/icons.dart';
import '../models/Items.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
class ListOfAuctionScreen extends StatefulWidget {
  const ListOfAuctionScreen({super.key});

  @override
  State<ListOfAuctionScreen> createState() => _ListOfAuctionScreenState();
}

class _ListOfAuctionScreenState extends State<ListOfAuctionScreen> {
  @override
  Widget build(BuildContext context) {
   
return
Scaffold(
  appBar: AppBar(title:const Text("Live Auction") ),
  bottomNavigationBar: ConvexAppBar(
    items:const [
      TabItem(icon: MyFlutterApp.auction, title: 'Auction'),
      TabItem(icon: Icons.map, title: 'BookMarks'),
      TabItem(icon: Icons.add, title: 'Create'),
      TabItem(icon: Icons.announcement_rounded, title: 'Bidded'),
      TabItem(icon: Icons.people, title: 'Profile'),
    ],
    initialActiveIndex: 0,
    onTap: (int i) => Navigator.pushNamed(context, '/$i')
  ),
  body: ListView(
    children:[ Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
              margin: EdgeInsets.only(top: 5),
            width: MediaQuery.of(context).size.width*0.7,
            child: TextField(
              decoration: InputDecoration(
                prefixIcon:const Icon(Icons.search),
                hintText: 'Search',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
            ),
            ) ,       
          
          
          ElevatedButton(
            onPressed: () {
              // Open filter dialog or perform filter action
            },
            child: Text('Filters'),
          ),
        ],
      ),
        Divider(),
        StreamBuilder(stream: FirebaseFirestore.instance
            .collection("items")
            .orderBy("publishedDate", descending: true)
            .snapshots(),
            builder: (context, AsyncSnapshot dataSnapshot)
            {
              if(dataSnapshot.hasData){
                return Container(
                  height:MediaQuery.of(context).size.height*0.7,
                  child: ListView.builder(itemCount: dataSnapshot.data!.docs.length,itemBuilder: (context,index){
                     Items eachItemInfo = Items.fromJson(
                    dataSnapshot.data!.docs[index].data() as Map<String, dynamic>
                  );
                  return ItemsCard(
                    itemsInfo: eachItemInfo,
                    context: context,
                  );
                  }
                  ),
                );
              }
              else
          {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: const [
                Center(
                  child: Text(
                    "Data is not available.",
                    style: TextStyle(
                      fontSize: 30,
                      color: Colors.grey,
                    ),
                  ),
                ),
              ],
            );
          }
            }
            )
    ]
  )
  
);
  }
}

  