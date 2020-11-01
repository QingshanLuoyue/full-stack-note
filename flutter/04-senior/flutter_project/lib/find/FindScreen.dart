import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_project/find/CompanyItem.dart';
import 'package:flutter_project/find/Detail/CompanyDetailScreen.dart';
import 'package:flutter_project/find/company.dart';
import 'package:flutter_project/provider/company_list.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

// class FindScreen extends StatefulWidget {
//   FindScreen({Key key}) : super(key: key);

//   @override
//   _FindScreenState createState() => _FindScreenState();
// }

// class _FindScreenState extends State<FindScreen> {

//   List<Company> _companies = [];
//   int page = 1;

//   RefreshController _refreshController = RefreshController(initialRefresh: false);

//   @override
//   void initState() {
//     super.initState();

//     getCompanyList();
//   }

//   /*
//   （1）下拉刷新：请求数据后替换数据
//   （2）上拉加载更多：拼接数据
//   */

//   getCompanyList() async{
//     String url = 'http://m.app.haosou.com/index/getData?type=1&page=$page';
//     var response = await http.get(url);
//     var data = response.body;
//     if(response.statusCode == 200) {
//       var json = jsonDecode(data);

//       if(page == 1) {
//         _refreshController.refreshCompleted();
//         setState(() {
//           _companies = Company.fromMapData(json);
//         });
//       }else {
//         List <Company>newData = Company.fromMapData(json);
//         //如果pageSize 20
//         if(newData.length < 20) {
//           _refreshController.loadNoData();
//         }else {
//           _refreshController.loadComplete();
//         }
//         setState(() {
//           _companies.addAll(newData);
//         });

//       }
//     }else {
//       if(page == 1) {
//         _refreshController.refreshFailed();
//       }else {
//         page --;
//         _refreshController.loadFailed();
//       }
//     }

//   }

//   Widget _buildContent() {
//     if(_companies.isEmpty) {
//       return new Center(
//         child: CircularProgressIndicator(),
//       );
//     }

//     return SmartRefresher(
//       controller: _refreshController,
//       enablePullDown: true,
//       enablePullUp: true,
//       header: ClassicHeader(
//         refreshingText: '正在加载中...',
//         idleText: '下拉刷新',
//         completeText:'加载完成',
//         failedText: '数据刷新异常',
//         releaseText:'松开刷新'),
//       footer: ClassicFooter(
//         idleText:'加载更多数据',
//         loadingText:'玩命加载中...',
//         noDataText:'没有更多数据',
//         // noMoreIcon: Icon(Icons.account_balance_wallet),
//       ),
//       onRefresh: _onRefresh,
//       onLoading: _onLoading,
//       child: ListView.builder(
//         itemBuilder: (context, index) {
//           var model = _companies[index];
//           return InkWell(
//             child: CompanyItem(model),
//             onTap: (){
//               Navigator.of(context).push(
//                 new MaterialPageRoute(
//                   builder: (context) => CompanyDetailScreen(model)
//                 )
//               );
//             },
//           );
//         },
//         itemCount: _companies.length,
//       ),
//     );

//   }

//   void _onRefresh() async{
//     // await Future.delayed(Duration(seconds: 2),(){
//       // _refreshController.refreshCompleted();
//       // _refreshController.refreshFailed()
//     // });
//     page = 1;
//     getCompanyList();
//   }

//   void _onLoading() async{
//     page ++;
//     getCompanyList();
//     // await Future.delayed(Duration(seconds: 2),(){
//     //   _refreshController.loadComplete();
//     //   // _refreshController.loadFailed()
//     //   // _refreshController.loadNoData();
//     // });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: new Text('发现'),
//       ),
//       body: _buildContent()
//     );
//   }
// }

class FindScreen extends StatefulWidget {
  FindScreen({Key key}) : super(key: key);

  @override
  _FindScreenState createState() => _FindScreenState();
}

class _FindScreenState extends State<FindScreen> {
  RefreshController _refreshController =
      RefreshController(initialRefresh: false);

  @override
  void initState() {
    super.initState();

    //listen的含义
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    provider.refrshData();
  }

  Widget _buildContent() {
    return Consumer<CompanyListProvider>(builder: (context, provider, _) {
      return IndexedStack(
        index: provider.showValue,
        children: <Widget>[
          Center(
            child: CircularProgressIndicator(),
          ),
          SmartRefresher(
            controller: _refreshController,
            enablePullDown: true,
            enablePullUp: true,
            header: ClassicHeader(
                refreshingText: '正在加载中...',
                idleText: '下拉刷新',
                completeText: '加载完成',
                failedText: '数据刷新异常',
                releaseText: '松开刷新'),
            footer: ClassicFooter(
              idleText: '加载更多数据',
              loadingText: '玩命加载中...',
              noDataText: '没有更多数据',
              // noMoreIcon: Icon(Icons.account_balance_wallet),
            ),
            onRefresh: _onRefresh,
            onLoading: _onLoading,
            child: ListView.builder(
              itemBuilder: (context, index) {
                var model = provider.companyList[index];
                return InkWell(
                  child: CompanyItem(model),
                  onTap: () {
                    Navigator.of(context).push(new MaterialPageRoute(
                        builder: (context) => CompanyDetailScreen(model)));
                  },
                );
              },
              itemCount: provider.companyList.length,
            ),
          )
        ],
      );
    });
  }

  void _onRefresh() async {
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    bool isSuccess = await provider.refrshData();
    if (isSuccess) {
      _refreshController.refreshCompleted();
    } else {
      _refreshController.refreshFailed();
    }
  }

  void _onLoading() async {
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    bool isSuccess = await provider.loadMoreData();
    if (isSuccess) {
      _refreshController.loadComplete();
    } else {
      _refreshController.loadFailed();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: new Text('发现'),
        ),
        body: _buildContent());
  }
}
