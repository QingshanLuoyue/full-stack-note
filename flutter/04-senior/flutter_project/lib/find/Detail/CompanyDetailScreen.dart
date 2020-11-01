import 'package:flutter/material.dart';
import 'package:flutter_project/Application.dart';
import 'package:flutter_project/find/Detail/Company_info.dart';
import 'package:flutter_project/find/Detail/DotsIndicator.dart';
import 'package:flutter_project/find/Detail/company_hot_job.dart';
import 'package:flutter_project/find/Detail/company_inc.dart';
import 'package:flutter_project/find/company.dart';

const double _kAppBarHeight = 256.0;

class CompanyDetailScreen extends StatefulWidget {
  
  final Company _company;

  CompanyDetailScreen(this._company);

  @override
  _CompanyDetailScreenState createState() => _CompanyDetailScreenState();
}

class _CompanyDetailScreenState extends State<CompanyDetailScreen> with TickerProviderStateMixin {

  List<Widget> _imagesPages;
  List<String> _urls = [
    'https://img.bosszhipin.com/beijin/mcs/chatphoto/20170725/861159df793857d6cb984b52db4d4c9c.jpg',
    'https://img2.bosszhipin.com/mcs/chatphoto/20151215/a79ac724c2da2a66575dab35384d2d75532b24d64bc38c29402b4a6629fcefd6_s.jpg',
    'https://img.bosszhipin.com/beijin/mcs/chatphoto/20180207/c15c2fc01c7407b98faf4002e682676b.jpg'
  ];

  List<Tab> _tabs;
  TabController _controller;
  VoidCallback onTapAction;
  int _currentIndex = 0;
  // Widget _companyTabContent;

  @override
  void initState() {
    super.initState();

    _imagesPages = [];
    _urls.forEach((String url) { 
      _imagesPages.add(
        new Container(
          color: Colors.black,
          child: new ConstrainedBox(
            constraints: BoxConstraints.expand(),
            child: new Image.network(
              url,
              height: _kAppBarHeight,
              fit: BoxFit.cover,
            ),
          ),
        )
      );
    });

    // _companyTabContent = new CompanyInc(widget._company.inc);
    _tabs = [
      new Tab(text: '公司概况'),
      new Tab(text: '热招职位'),
    ];
    _controller = new TabController(length: _tabs.length, vsync: this);

    onTapAction = (){
      // if(_currentIndex == 0) {
      //   _companyTabContent = new CompanyInc(widget._company.inc);
      // }else {
      //   _companyTabContent = new CompanyHotJob();
      // }

      setState(() {
        _currentIndex = _controller.index;
      });
    };
    _controller.addListener(onTapAction);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          SingleChildScrollView(
            child: Column(
              children: <Widget>[
                SizedBox.fromSize(
                  size: Size.fromHeight(_kAppBarHeight),
                  child: IndicatorViewPager(pages: _imagesPages),
                ),

                Container(
                  color: Colors.white,
                  child: new Column(
                    children: <Widget>[
                      CompanyInfo(widget._company),
                      Divider(color: Colors.red),
                      new TabBar(
                        tabs: _tabs,
                        controller: _controller,
                        labelColor: Colors.black,
                        labelStyle: TextStyle(
                          fontSize: 16.0 
                        ),
                        indicatorSize: TabBarIndicatorSize.tab,
                        indicatorWeight: 3.0,
                        indicatorColor: Colors.red,
                      )
                    ],
                  ),
                ),

                IndexedStack(
                  index: _currentIndex,
                  children: <Widget>[
                    CompanyInc(widget._company.inc),
                    CompanyHotJob()
                  ],
                )
                // _companyTabContent
              ],
            ),
          ),

          new Positioned(
            top: Application.statusBarHeight,
            left: 10,
            child: BackButton(color: Colors.white)
          )
        ], 
      )
    );
  }
}


/*
import 'package:shared_preferences/shared_preferences.dart';
final Future<SharedPreferences> _preferences = SharedPreferences.getInstance();    
  void saveData() async{
    final SharedPreferences pref = await _preferences;
    pref.setString('someThingKey', '存储的数据');
  }

  void readData() async {
    final SharedPreferences pref = await _preferences;
    String data = pref.getString('someThingKey');
    print(data);
  }
  */