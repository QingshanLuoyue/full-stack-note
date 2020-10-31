import 'package:flutter/material.dart';
import 'package:flutter_project/WelComePage.dart';
import 'package:flutter_project/home.dart';
import 'package:flutter_project/mine/SecondScreen.dart';
import 'package:flutter_project/mine/thirdScreen.dart';

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
      home: WelcomePage(),
      // routes: {
      //   '/second':(BuildContext context) {
      //     return SecondScreen('静态传递');
      //   },
      //   '/third':(BuildContext context) {
      //     return ThirdScreen();
      //   },
      // },
    );
  }
}


