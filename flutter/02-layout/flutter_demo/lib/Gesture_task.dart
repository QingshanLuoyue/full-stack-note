import 'package:flutter/material.dart';

class GestureTask extends StatelessWidget {
  const GestureTask({Key key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: new AppBar(
//         title: Text('手势的学习'), 
//       ),
//       body: Container(
//         color: Colors.red,
//         child: new Center(
//           child: new RaisedButton(
//             onPressed: (){
//               print('object');
//             },
//             child: new Text('这是一个文本'),
//           ), 
//         ),
//         // constraints: BoxConstraints.expand(),
//       ),
//     );
//   }
// }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('手势的学习'), 
      ),
      body: GestureDetector(
        child: Container(
          color: Colors.red,
          child: new Center(
            child: new Text('这是一个文本'), 
          ),
          // constraints: BoxConstraints.expand(),
        ),
        onTap: () {
          print('onTap');
        },
      ),
    );
  }
}