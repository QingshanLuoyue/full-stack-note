import 'package:flutter/material.dart';

class ManageScreen extends StatelessWidget {
  const ManageScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text('管理'),
        ),
      ),
      body: Center(
        child: Text('管理'),
      ),
    );
  }
}
