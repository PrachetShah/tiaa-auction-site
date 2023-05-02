import 'package:flutter/material.dart';
import '../models/Items.dart';

class ItemsCard extends StatefulWidget {
  Items? itemsInfo;
  BuildContext? context;
  ItemsCard({
    this.itemsInfo,
    this.context,
  });

  @override
  State<ItemsCard> createState() => _ItemsCardState();
}

class _ItemsCardState extends State<ItemsCard> {
  
  @override
  Widget build(BuildContext context) {
   DateTime startDateTime = DateTime.parse(widget.itemsInfo!.auction_start_datetime.toString()); 
DateTime endDateTime = DateTime.parse(widget.itemsInfo!.auction_end_datetime.toString()); 
Duration duration = endDateTime.difference(DateTime.now());
    return Container(
      height: 300,
      margin: EdgeInsets.fromLTRB(5, 5, 5, 0),
      child: Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        elevation: 15,
        child: InkWell(
          splashColor: Theme.of(context).primaryColor,
          onTap: () {   
            // to items Detail Screen
          },
          borderRadius: BorderRadius.circular(20),
          child: Column(
            children: [
              Container(
                height: 200,
                decoration:const BoxDecoration(
                  borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(20),
                      topRight: Radius.circular(20)),
                ),
                child: Stack(
                  children: [
                    ClipRRect(
                        borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(20),
                            topRight: Radius.circular(20)),
                        child: Image.network(
                          widget.itemsInfo!.itemImage.toString(),
                          width: double.infinity,
                          fit: BoxFit.cover,
                        )),
                    Positioned(
                        top: 150,
                        left: 120,
                        child: Container(
                            color: Color.fromARGB(162, 0, 0, 0),
                            width: 220,
                            child: Text(
                              widget.itemsInfo!.itemName.toString(),
                              style:const TextStyle(
                                color: Colors.white70,
                                fontWeight: FontWeight.bold,
                                fontSize: 26,
                              ),
                              softWrap: true,
                              overflow: TextOverflow.fade,
                            )))
                  ],
                ),
              ),
              SizedBox(height: 5),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Row(
                    children: [
                     const Icon(Icons.schedule),
                      Text(
                        '${duration.inDays} days ${duration.inHours % 24} hours ${duration.inMinutes % 60} minutes left',
                        style: const TextStyle(color: Colors.black, fontSize: 12),
                      )
                    ],
                  ),
                  Row(
                    children:const [
                      Icon(Icons.work),
                      Text(
                        'Price Now',
                        style: TextStyle(color: Colors.black, fontSize: 12),
                      )
                    ],
                  ),
                 
                ],
              ),
              SizedBox(height: 10,),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Row(
                    children: [
                      const Icon(Icons.currency_rupee),
                      Text(
                        '${widget.itemsInfo!.itemBasePrice}',
                        style: TextStyle(color: Colors.black, fontSize: 15),
                      )
                    ],
                  ),
                  Row(
                    children: [
                      const Icon(Icons.person),
                      Text(
                         'Seller Name :${widget.itemsInfo!.sellerName}',
                        style:const TextStyle(color: Colors.black, fontSize: 15),
                      )
                    ],
                  ),
                  Row(
                    children: [
                      const Icon(Icons. currency_bitcoin),
                      Text(
                         'Bid Now ',
                        style:const TextStyle(color: Colors.black, fontSize: 15),
                      )
                    ],
                  ),
                  
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}