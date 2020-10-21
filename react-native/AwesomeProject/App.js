/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 暗号：技术为生活服务
import 'react-native-gesture-handler';
import React from 'react';
import WebView from 'react-native-webview';
import {View, Text, Alert} from 'react-native';

const uri = 'https://m.mtime.cn/#!/onlineticket/614532488/';

const injectJsContent = (window, document) => {
  let submitBtn;
  function waitForSubmitBtnRender() {
    submitBtn = document.getElementById('submitBtn');
    if (!submitBtn) {
      setTimeout(waitForSubmitBtnRender, 2000);
    } else {
      submitBtn.onclick = () => {
        const seats = [];
        document.querySelectorAll('.seat_selected').forEach((node) => {
          seats.push(node.getAttribute('name'));
        });
        window.ReactNativeWebView.postMessage(seats.join(','));
      };
    }
  }
  waitForSubmitBtnRender();
};

function App() {
  return (
    <WebView
      source={{uri}}
      injectedJavaScript={`(${injectJsContent.toString()}}(window, document)`}
      onMessage={(e) => {
        Alert.alert('您选中的座位是:' + e.nativeEvent.data);
      }}
    />
  );
}

export default App;
