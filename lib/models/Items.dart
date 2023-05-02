import 'package:cloud_firestore/cloud_firestore.dart';

class Items
{
  String? itemID;
  String? itemName;
  String? itemDescription;
  String? itemImage;
  String? sellerName;
  String? sellerPhone;
  String? itemBasePrice;
  String? itemIncrementPrice;
  String? Category;
  String? number;
  String? auction_end_datetime;
  Timestamp? publishedDate;
  
  String? auction_start_datetime;
  Items({
    this.itemID,
    this.itemName,
    this.itemDescription,
    this.itemImage,
    this.sellerName,
    this.sellerPhone,
    this.itemBasePrice,
    this.Category,
    this.number,
    this.auction_end_datetime,
    this.auction_start_datetime,
    this.itemIncrementPrice,
    this.publishedDate,
   
  });

  Items.fromJson(Map<String, dynamic> json)
  {
    itemID = json["itemID"];
    itemName = json["itemName"];
    itemDescription = json["itemDescription"];
    itemImage = json["itemImage"];
    sellerName = json["sellerName"];
    sellerPhone = json["sellerPhone"];
    itemBasePrice = json["itemBasePrice"];
    Category=json["Category"];
    number=json["number"];
    auction_end_datetime=json["auction_end_datetime"];
    auction_start_datetime=json["auction_start_datetime"];
    publishedDate = json["publishedDate"];
    itemIncrementPrice=json["itemIncrementPrice"];
  }
}