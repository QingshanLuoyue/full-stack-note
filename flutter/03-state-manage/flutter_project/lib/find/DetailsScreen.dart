import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
  final String content;

  DetailsScreen(this.content);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('详情页面'),
      ),
      body: Center(
        child: Text('详情页面'),
      ),
    );
  }
}
