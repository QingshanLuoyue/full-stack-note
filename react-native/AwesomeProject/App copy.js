/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 暗号：链表
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  const askForPermissions = () => {
    const PERMISSIONS = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];
    console.log('111 :>> ', 111);
    if (Platform.OS === 'android') {
      // 安卓
      PermissionsAndroid.requestMultiple(PERMISSIONS).then((results) => {
        //   请求定位和相机权限
        console.log('results :>> ', results);

        const allPermissionsGranted = Object.values(results).every(
          (result) => result === 'granted',
        );
        console.log('allPermissionsGranted:>> ', allPermissionsGranted);

        // 若都通过授权，则设置授权状态为 true
        if (allPermissionsGranted) {
          setPermissionsGranted(true);
        }
      });
    } else {
      //   iOS
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
  //   return (
  //     <>
  //       <StatusBar barStyle="dark-content" />
  //       <SafeAreaView>
  //         <ScrollView
  //           contentInsetAdjustmentBehavior="automatic"
  //           style={styles.scrollView}>
  //           <Header />
  //           {global.HermesInternal == null ? null : (
  //             <View style={styles.engine}>
  //               <Text style={styles.footer}>Engine: Hermes</Text>
  //             </View>
  //           )}
  //           <View style={styles.body}>
  //             <View>
  //               <Button title="请求授权" onPress={askForPermissions} />
  //               <Text>
  //                 权限请求情况：{permissionsGranted ? '全部授权成功' : '授权失败'}
  //               </Text>
  //             </View>

  //             <View style={styles.sectionContainer}>
  //               <Text style={styles.sectionTitle}>Step On1e</Text>
  //               <Text style={styles.sectionDescription}>
  //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
  //                 screen and then come back to see your edits.
  //               </Text>
  //             </View>
  //             <View style={styles.sectionContainer}>
  //               <Text style={styles.sectionTitle}>See Your Changes</Text>
  //               <Text style={styles.sectionDescription}>
  //                 <ReloadInstructions />
  //               </Text>
  //             </View>
  //             <View style={styles.sectionContainer}>
  //               <Text style={styles.sectionTitle}>Debug</Text>
  //               <Text style={styles.sectionDescription}>
  //                 <DebugInstructions />
  //               </Text>
  //             </View>
  //             <View style={styles.sectionContainer}>
  //               <Text style={styles.sectionTitle}>Learn More</Text>
  //               <Text style={styles.sectionDescription}>
  //                 Read the docs to discover what to do next:
  //               </Text>
  //             </View>
  //             <LearnMoreLinks />
  //           </View>
  //         </ScrollView>
  //       </SafeAreaView>
  //     </>
  //   );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
