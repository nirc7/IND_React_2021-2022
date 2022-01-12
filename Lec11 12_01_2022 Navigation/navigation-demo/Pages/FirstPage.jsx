import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function FirstPage({ navigation }) {

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focus');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocus');
      };
    }, [])
  );

  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World </Text>

      <TouchableOpacity onPress={() => {
        navigation.navigate('SecondPage', { user: 'Lucy ' + new Date().getSeconds() });
      }}>
        <Text style={{
          fontSize: 20, color: 'blue', margin: 10, borderWidth: 2,
          backgroundColor: 'lightgrey',
          borderColor: 'green', borderRadius: 20, padding: 10
        }} >Goto Second Page!</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        navigation.navigate('MaterialTabbedPage');
      }}>
        <Text style={{
          fontSize: 20, color: 'blue', margin: 10, borderWidth: 2,
          backgroundColor: 'lightgrey',
          borderColor: 'green', borderRadius: 20, padding: 10
        }} >Goto Material Tabbed Page!</Text>
      </TouchableOpacity>

      
    </View >
  )
}
