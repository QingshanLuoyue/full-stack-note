import 'package:flutter/material.dart';

class SecondScreen extends StatelessWidget {


  final String content;

  SecondScreen(this.content);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('二级页面'), 
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Text(content),
            RaisedButton(
              child: Text('返回方式一'),
              onPressed: (){
                Navigator.of(context).pop('回传数据');
              }
            ),
            RaisedButton(
              child: Text('返回方式二'),
              onPressed: (){
                Navigator.of(context).popAndPushNamed('/third');
              }
            ),
            RaisedButton(
              child: Text('返回方式三'),
              onPressed: (){
                Navigator.of(context).pushReplacementNamed('/third');
              }
            ),
          ],
        ), 
      ),
    );
  }
}