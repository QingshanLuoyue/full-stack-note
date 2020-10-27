// 暗号： 不用背，学规律
import 'package:flutter/material.dart';
import 'package:flutter_project/find/Article.dart';

class ArticleItem extends StatelessWidget {
  final Article model;

  ArticleItem(this.model);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      padding: EdgeInsets.all(5),
      child: Card(
        elevation: 5,
        child: Padding(
          padding: EdgeInsets.only(left: 5, right: 5, top: 5, bottom: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              new Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        image: DecorationImage(
                            image: NetworkImage(model.logo),
                            fit: BoxFit.cover)),
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 20, right: 0),
                    child: Container(
                      width: 150,
                      child: Text(
                        model.location,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontSize: 18, color: Colors.black),
                      ),
                    ),
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        "|" + model.type,
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                      Text(
                        "|" + model.size,
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                      Text(
                        "|" + model.employee,
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                    ],
                  )
                ],
              ),
              Divider(),
              new Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text(
                    "热招：" + model.hot + "等" + model.count + "个职位",
                    style: TextStyle(fontSize: 12, color: Colors.grey),
                  ),
                  Padding(
                      padding: EdgeInsets.only(right: 12),
                      child: Text(
                        ">",
                        style: TextStyle(fontSize: 20),
                      ))
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
