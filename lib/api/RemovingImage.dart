import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
String apiKeyRemoveBg="Z5y56mCLET54krszrceWh5Rd";


class ApiHittingRemoveImage{
    Future <Uint8List> removeBackground (String imagePath) async {
      
        var request= http.MultipartRequest('POST',Uri.parse('https://api.remove.bg/v1.0/removebg'));
        request.files.add(await http.MultipartFile.fromPath('image_file',imagePath));
        request.headers.addAll({"X-APi-Key":"Z5y56mCLET54krszrceWh5Rd"});

        //response
        var response=await request.send();
        if(response.statusCode==200){
         final finalImg= await http.Response.fromStream(response);
         return finalImg.bodyBytes;
        }
        else{
          throw Exception("Error Occured${response.statusCode}");
        }

      
     

  
    }

}