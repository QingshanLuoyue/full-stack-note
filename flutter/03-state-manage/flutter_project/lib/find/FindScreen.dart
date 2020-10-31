import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_project/find/CompanyItem.dart';
import 'package:flutter_project/find/company.dart';
import 'package:http/http.dart' as http;
import 'package:pull_to_refresh/pull_to_refresh.dart';

class FindScreen extends StatefulWidget {
  FindScreen({Key key}) : super(key: key);

  @override
  _FindScreenState createState() => _FindScreenState();
}

class _FindScreenState extends State<FindScreen> {
  List<Company> _companies = [];

  int _page = 1;

  RefreshController _refreshController =
      RefreshController(initialRefresh: false);

  @override
  void initState() {
    super.initState();

    getCompanyList2();
  }

  /*
  （1）下拉刷新：请求数据后替换数据
  （2）上拉加载更多：拼接数据
  */
  // 暗号：原来还可以这么玩
  getCompanyList2() async {
    String url = 'http://m.app.haosou.com/index/getData?type=1&page=$_page';
    try {
      var response = await http.get(url);
      var data = response.body;
      var json = jsonDecode(data);
      var mapData = Company.fromMapData(json);
      if (_page == 1) {
        setState(() {
          _companies = mapData;
        });
      } else {
        setState(() {
          _companies.addAll(mapData);
        });
      }
      // 请求成功，返回true
      return true;
    } catch (e) {
      // 请求失败，返回错误对象
      throw e;
    }
  }

  Widget _buildContent() {
    if (_companies.isEmpty) {
      return new Center(
        child: CircularProgressIndicator(),
      );
    }

    return SmartRefresher(
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
          idleText: '加载更多数据', loadingText: '玩命加载中...', noDataText: '没有更多数据'),
      onRefresh: _onRefresh,
      onLoading: _onLoading,
      child: ListView.builder(
        itemBuilder: (context, index) {
          var model = _companies[index];
          return InkWell(
            child: CompanyItem(model),
            onTap: () {},
          );
        },
        itemCount: _companies.length,
      ),
    );
  }

  // 暗号：原来还可以这么玩
  void _onRefresh() async {
    // 下拉刷新
    setState(() {
      _page = 1;
    });
    var flag = await getCompanyList2();
    if (flag == true) {
      // 刷新成功
      _refreshController.refreshCompleted();
    } else {
      // 刷新失败
      _refreshController.refreshFailed();
    }
    // await Future.delayed(Duration(seconds: 2), () {
    //   _refreshController.refreshCompleted();
    //   // _refreshController.refreshFailed()
    // });
  }

  void _onLoading() async {
    // 上拉加载
    setState(() {
      _page = ++_page;
      print(_page);
    });
    var flag = await getCompanyList2();

    if (flag == true) {
      // 加载成功
      _refreshController.loadComplete();
    } else {
      // 加载失败
      _refreshController.loadFailed();
    }
    // await Future.delayed(Duration(seconds: 2), () {
    //   _refreshController.loadComplete();
    //   // _refreshController.loadFailed()
    //   // _refreshController.loadNoData();
    // });
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
