// 暗号： 初见Flutter
import 'package:flutter/material.dart';

class FindScreen extends StatelessWidget {
  const FindScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text('发现'),
        ),
      ),
      body: Center(
        child: Text('发现'),
      ),
    );
  }
}
