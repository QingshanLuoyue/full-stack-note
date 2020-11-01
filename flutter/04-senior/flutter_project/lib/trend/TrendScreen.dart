import 'package:flutter/material.dart';
import 'package:flutter_project/trend/InheritedWidgetDemo.dart';

class TrendScreen extends StatelessWidget {
  const TrendScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('动态'), 
      ),
      body: Center(
        child: RaisedButton(
          onPressed: (){
              Navigator.of(context).push(
                new MaterialPageRoute(
                  builder: (context) => InheritedWidgetDemo()
                )
              );
          }
        )
      ),
    );
  }
}