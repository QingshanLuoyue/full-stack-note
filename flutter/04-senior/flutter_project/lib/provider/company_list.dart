import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_project/find/company.dart';
import 'package:http/http.dart' as http;

class CompanyListProvider with ChangeNotifier {
  List<Company> _companyList = new List();
  int _currentPage = 1;
  int _showValue = 0;

  //获取list数据
  List<Company> get companyList => _companyList;

  //获取页数
  int get currentPage => _currentPage;

  //获取显示状态
  int get showValue => _showValue;

  set companyList(List<Company> companyList) {
    _companyList = companyList;
    notifyListeners();
  }

  int _type = 2;
  var url = 'http://m.app.haosou.com/index/getData?';
  //加载网络数据
  refrshData() async {
    var httpURL = url + 'type=$_type&page=1';
    var response = await http.get(httpURL);
    if(response.statusCode == 200) {
      var resultStr = response.body;
      var resultMap = json.decode(resultStr).cast<String, dynamic>();
      _companyList = Company.fromMapData(resultMap);
      _currentPage = 2;
      _showValue = 1;

      notifyListeners();

      return true;
    }
    return false;
  }

  //加载更多
  loadMoreData() async{
    var httpURL = url + 'type=$_type&page=$_currentPage';
    var response = await http.get(httpURL);
    if(response.statusCode == 200) {
      var resultStr = response.body;
      var resultMap = json.decode(resultStr).cast<String, dynamic>();
      _companyList.addAll(Company.fromMapData(resultMap));
      _currentPage ++;

      notifyListeners();

      return true;
    }
    return false;
  }
}