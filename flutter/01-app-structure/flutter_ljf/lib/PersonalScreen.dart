// 暗号： 初见Flutter
import 'package:flutter/material.dart';

class PersonalScreen extends StatelessWidget {
  const PersonalScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text('我的'),
        ),
      ),
      body: Center(
        child: Text('我的'),
      ),
    );
  }
}
