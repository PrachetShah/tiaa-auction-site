import 'package:flutter/material.dart';
import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import '../customizable/icons.dart';
class Saved extends StatefulWidget {
  const Saved({super.key});

  @override
  State<Saved> createState() => _SavedState();
}

class _SavedState extends State<Saved> {
  @override
  Widget build(BuildContext context) {
    return (
      Scaffold(
        appBar: AppBar(title:const Text("Saved Items")),
  bottomNavigationBar: ConvexAppBar(
    items:const [
      TabItem(icon: MyFlutterApp.auction, title: 'Auction'),
      TabItem(icon: Icons.map, title: 'BookMarks'),
      TabItem(icon: Icons.add, title: 'Create'),
      TabItem(icon: Icons.announcement_rounded, title: 'Bidded'),
      TabItem(icon: Icons.people, title: 'Profile'),
    ],
    initialActiveIndex: 1,
    onTap: (int i) => Navigator.pushNamed(context, '/$i')

  ),

  body:const Center(child:  Text("This is Saved/BookMark"),),
    )
    );
  }
}