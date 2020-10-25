import 'package:flutter/material.dart';

class MineScreen extends StatelessWidget {
  const MineScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('我的'), 
      ),
      body: Center(
        child: Container(
          width: 100,
          height: 100,
          color: Colors.red,
          child: Text(
            '我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的',
            overflow:TextOverflow.ellipsis,
            maxLines: 3,
          ),
        ), 
      ),
    );
  }
}