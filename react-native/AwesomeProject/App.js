/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 暗号：明确状态归属，合理切分组件
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Dimensions,
} from 'react-native';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');
const cellWidth = width * 0.3;

function App() {
  // 是否单选
  const [isSingle, setIsSingle] = React.useState(false);
  // 是否选中
  const [isSelectedIdx, setIsSelectedIdx] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>单选</Text>
        <Switch
          style={{marginLeft: 15}}
          value={isSingle}
          onValueChange={setIsSingle}></Switch>
      </View>
      <View style={styles.innerContainer}>
        {isSingle
          ? [...new Array(9)].map((_, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.cell,
                    isSelectedIdx === i && {backgroundColor: 'blue'},
                  ]}
                  onPress={() => {
                    // 选中，则变色
                    setIsSelectedIdx(i);
                  }}>
                  <Text>{i + 1}</Text>
                </TouchableOpacity>
              );
            })
          : [...new Array(9)].map((_, i) => {
              return <Cell></Cell>;
            })}
      </View>
    </View>
  );
}

function Cell() {
  const [selected, setSelected] = React.useState(false);
  // 选择变色
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[
        styles.cell,
        selected && {backgroundColor: 'blue'},
      ]}></TouchableOpacity>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: cellWidth,
    height: cellWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
