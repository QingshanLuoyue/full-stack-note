// 暗号： 不用背，学规律
import 'dart:convert';

class Article {
  final String logo;
  final String name;
  final String location;
  final String type;
  final String size;
  final String employee;
  final String hot;
  final String count;
  final String inc;

  //构造函数
  Article(
      {this.logo,
      this.name,
      this.location,
      this.type,
      this.size,
      this.employee,
      this.hot,
      this.count,
      this.inc});

  //string -> List<Article>
  static List<Article> resolveDataFromJsonString(String json) {
    List<Article> listModel = new List<Article>();
    List list = jsonDecode(json)['list'];
    list.forEach((element) {
      var model = new Article(
        logo: element['logo'],
        name: element['name'],
        location: element['location'],
        type: element['type'],
        size: element['size'],
        employee: element['employee'],
        hot: element['hot'],
        count: element['count'],
        inc: element['inc'],
      );
      listModel.add(model);
    });

    return listModel;
  }
}
