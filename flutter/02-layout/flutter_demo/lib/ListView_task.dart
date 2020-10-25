
import 'package:flutter/material.dart';

class ListViewTask extends StatelessWidget {
    
  List<String> items = List.generate(50, (index) => 'item $index');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('listView的学习'), 
      ),
      body: getListView2(),
    );
  }

  // getListView1() {
  //   return ListView.builder(
  //     itemCount: items.length,
  //     itemBuilder: (context, index) {
  //       var content = items[index];
  //       return InkWell(
  //         child: Padding(
  //           padding: EdgeInsets.only(top: 20),
  //           child: Text(content),
  //         ),
  //         onTap: (){
  //           print('object');
  //         }, 
  //       );
  //     }
  //   );
  // }

   getListView2() {
    return ListView.separated(
      itemCount: items.length,
      itemBuilder: (context, index) {
        var content = items[index];
        return InkWell(
          child: Padding(
            padding: EdgeInsets.only(top: 20),
            child: Text(content),
          ),
          onTap: (){
            print('object');
          }, 
        );
      },
      separatorBuilder: (conetxt, index){
        return Divider(color: Colors.red);
      }, 
    );
    // return ListView(
    //   children: <Widget>[],
    // );
  }

}