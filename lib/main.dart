import 'package:flutter/material.dart';
import 'package:online_action/components/ImageUploading.dart';
import 'package:online_action/pages/CreatingAuctionScreen.dart';
import 'package:online_action/pages/Saved.dart';
import 'pages/list_of_auction_screen.dart';
import 'package:firebase_core/firebase_core.dart';
Future <void> main() async{
  try{

      WidgetsFlutterBinding.ensureInitialized();
      await Firebase.initializeApp();
  }
  catch(e){
    print(e.toString());
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  

  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/0',
     routes: {
      '/0':(context) => const ListOfAuctionScreen(),
      '/1':(context) => const Saved(),
      '/2':(context) => const CreatingAuction (),
      '/3':(context) => const CreatingAuction (),
      '/4':(context) => const CreatingAuction (),
      '/imageverficaiton':(context) =>  ItemsUploadScreen()
     },
      title: 'Flutter Demo',
      theme: ThemeData(
      primarySwatch: Colors.blue, 
      ),
);
  }
}

