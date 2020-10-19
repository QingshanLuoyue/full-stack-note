/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 暗号：建立清晰规范的数据处理流程
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// 首页组件
function HomeScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>username：{username}</Text>
      <Button
        title="Go To UserNames"
        onPress={() =>
          // 传递 hook 参数给下一个屏幕，用于修改当前屏幕的值
          navigation.navigate('UserNames', {username, setUsername})
        }></Button>
    </View>
  );
}

// 输入用户名组件
function UserNamesScreen({navigation, route}) {
  // 前一屏传来的路由数据
  const {username, setUsername} = route.params;

  // 当前页面输入用户名
  const [currentUsername, setCurrentUsername] = React.useState(username);
  return (
    <View style={styles.container}>
      <Text>UserNames Screen</Text>
      <TextInput
        style={styles.inputName}
        placeholder="input username"
        value={currentUsername}
        onChangeText={setCurrentUsername}></TextInput>
      <Button
        title="Confirm To Change And Back To Home"
        onPress={() => {
          // 修改、输入用户名之后，设置到前一屏中，并返回
          setUsername(currentUsername);
          navigation.goBack();
        }}></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: 'This is Home Page'}}
          component={HomeScreen}
        />
        <Stack.Screen name="UserNames" component={UserNamesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  inputName: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
