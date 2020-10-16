/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 暗号：一次学习，随处编写
import React from 'react';
import {View, Text, Button, PermissionsAndroid, Platform} from 'react-native';

const App: () => React$Node = () => {
  // state hook
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);

  // 请求权限函数
  const askForPermissions = () => {
    const PERMISSIONS = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];
    if (Platform.OS === 'android') {
      // 安卓
      PermissionsAndroid.requestMultiple(PERMISSIONS).then((results) => {
        // 请求定位和相机权限

        const allPermissionsGranted = Object.values(results).every(
          (result) => result === 'granted',
        );

        // 若都通过授权，则设置授权状态为 true
        if (allPermissionsGranted) {
          setPermissionsGranted(true);
        }
      });
    } else {
      // iOS
      setPermissionsGranted(true);
    }
  };
  return (
    <>
      <View>
        <Button title="请求授权" onPress={askForPermissions} />
        <Text>
          权限请求情况：{permissionsGranted ? '全部授权成功' : '授权失败'}
        </Text>
      </View>
    </>
  );
};

export default App;
