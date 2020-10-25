import 'package:flutter/material.dart';
import 'package:flutter_demo/Gesture_task.dart';
import 'package:flutter_demo/GrideView_task.dart';
import 'package:flutter_demo/ListView_task.dart';
import 'package:flutter_demo/SingleChildScrollViewTask.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: SingleChildScrollViewTask(),
    );
  }
}

