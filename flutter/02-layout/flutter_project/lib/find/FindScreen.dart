import 'package:flutter/material.dart';

class FindScreen extends StatelessWidget {
  const FindScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: new Text('发现'), 
      // ),
      body: SafeArea(
        child: Text(
          '发现',
          style: TextStyle(fontSize: 20, color: Colors.red),
        )
      ),
    );
  }
}