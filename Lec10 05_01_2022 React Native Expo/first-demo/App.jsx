import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const btnAdd = () => {
    debugger;
    console.log(1);
    let num=7;
    num++;
    console.log(num);
    setCounter(prevC => prevC + 1);
  }

  return (
    <View style={styles.container}>
      <Text>nir's app!</Text>
      <Button title='push me!' onPress={btnAdd} />
      <Text style={{fontSize:30}}>counter={counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20
  },
});
