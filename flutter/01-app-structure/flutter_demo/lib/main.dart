import 'package:flutter/material.dart';
import 'package:flutter_demo/BalanceScreen.dart';
import 'package:flutter_demo/ContanctsScreen.dart';
import 'package:flutter_demo/MusicScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  //RN  render
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: FirstScreen(),
      // initialRoute: '/second',
      // routes: <String, WidgetBuilder> {
      //   '/first': (BuildContext context) => new FirstScreen(),
      //   '/second': (BuildContext context) => new SecondScreen(content: '内容',title: '标题')
      // },
    );
  }
}

// class FirstScreen extends StatelessWidget {

//   @override
//   Widget build(BuildContext context) {
//     return new Scaffold(
//       appBar: AppBar(
//         title: new Text('界面一'),
//         // centerTitle: false,
//         // leading: Icon(Icons.access_alarms),
//         // actions: <Widget>[
//         //   Icon(Icons.accessibility),
//         // ],
//       ),
//       body: new Center(
//          child: Text('界面一'),
//       ),
//     );
//   }
// }

// class SecondScreen extends StatelessWidget {

//   final String content;
//   final String title;

//   //构造函数
//   SecondScreen({this.content, this.title});

//   @override
//   Widget build(BuildContext context) {
//     return new Scaffold(
//       appBar: AppBar(
//         title: new Text('$title'),
//       ),
//       body: new Center(
//          child: Text('$content'),
//       ),
//     );
//   }

// }

class FirstScreen extends StatefulWidget {
  FirstScreen({Key key}) : super(key: key);

  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {

  final List<Widget> _children = [
    BalanceScreen(),
    ContanctsScreen(),
    MusicScreen()
  ];

  int _currentIndex = 0;

  void onTabTapped(int selectIndex) {
    setState(() {
      _currentIndex = selectIndex;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      // appBar: AppBar(
      //   title: new Text('界面一'),
      // ),
      body: _children[_currentIndex],
      drawer: new Drawer(
         child: Center(
          child: Text('Drawer'), 
         ),
      ),
      bottomNavigationBar: new BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        selectedItemColor: Colors.red,//Color(0xff123456),
        unselectedItemColor: Colors.orange,
        // selectedFontSize: 14.0,
        unselectedFontSize: 14.0,
        items: <BottomNavigationBarItem>[
          new BottomNavigationBarItem(
            icon: Icon(Icons.account_balance),
            title: Text('银行')
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.contacts),
            title: Text('联系人')
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.library_music),
            title: Text('音乐')
          ),
        ]
      ),
    );
  }
}


