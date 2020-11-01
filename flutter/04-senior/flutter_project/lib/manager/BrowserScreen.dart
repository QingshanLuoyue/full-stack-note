// import 'dart:html';

import 'package:flutter/material.dart';
// ignore: unused_import
import 'package:flutter_project/trend/InheritedWidgetDemo.dart';
import 'package:webview_flutter/webview_flutter.dart';

class BrowserScreen extends StatelessWidget {
  WebViewController _webViewController;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('网页'),
      ),
      body: WebView(
        initialUrl: "https://flutterchina.club/",
        javascriptMode: JavascriptMode.unrestricted,
        onWebViewCreated: (controller) {
          //界面创建
          _webViewController = controller;
        },
        onPageStarted: (url) {
          //界面开始加载
        },
        onPageFinished: (url) {
          //界面加载完成
        },
      ),
    );
  }
}
