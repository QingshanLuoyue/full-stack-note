// 暗号： 初见Flutter
import 'package:flutter/material.dart';
import 'package:flutter_ljf/FriendsScreen.dart';
import 'package:flutter_ljf/FindScreen.dart';
import 'package:flutter_ljf/ManageScreen.dart';
import 'package:flutter_ljf/PersonalScreen.dart';

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
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: FirstScreen());
  }
}

class FirstScreen extends StatefulWidget {
  FirstScreen({Key key}) : super(key: key);

  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  final List<Widget> _children = [
    FriendsScreen(),
    FindScreen(),
    ManageScreen(),
    PersonalScreen(),
  ];

  int _currentIndex = 0;

  void onTabTapped(int selectIndex) {
    setState(() {
      _currentIndex = selectIndex;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text(widget.title),
      // ),
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        selectedItemColor: Colors.red,
        selectedFontSize: 12,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: Icon(Icons.map_outlined), label: '好友'),
          BottomNavigationBarItem(
              icon: Icon(Icons.find_in_page_outlined), label: '发现'),
          BottomNavigationBarItem(icon: Icon(Icons.work), label: '管理'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
        ],
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
