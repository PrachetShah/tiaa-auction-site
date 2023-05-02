import 'package:flutter/material.dart';
import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import 'package:online_action/components/FIrstverifivation.dart';
import '../components/ImageUploading.dart';
import '../customizable/icons.dart';

class CreatingAuction extends StatefulWidget {
  const CreatingAuction({super.key});

  @override
  State<CreatingAuction> createState() => _CreatingAuctionState();
}

class _CreatingAuctionState extends State<CreatingAuction> {
  int flag = 0;
  void setData(int dataFromFirstVerification) {
    setState(() {
      flag = dataFromFirstVerification;
    });
    print("FFFLLLLAAAGGGG is $flag");
  }
 

  @override
  Widget build(BuildContext context) {
    return (Scaffold(
        bottomNavigationBar: ConvexAppBar(
            items: const [
              TabItem(icon: MyFlutterApp.auction, title: 'Auction'),
              TabItem(icon: Icons.map, title: 'BookMarks'),
              TabItem(icon: Icons.add, title: 'Create'),
              TabItem(icon: Icons.announcement_rounded, title: 'Bidded'),
              TabItem(icon: Icons.people, title: 'Profile'),
            ],
            initialActiveIndex: 2,
            onTap: (int i) => Navigator.pushNamed(context, '/$i')),
        body: flag == 0
            ? FirstVerification(onDataChanged: setData)
            : ItemsUploadScreen()));
  }
}
