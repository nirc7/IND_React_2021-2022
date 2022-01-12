import React from 'react';
import { View, Text } from 'react-native';

export default function SecondPage(props) {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SecondPage</Text>
      <Text style={{fontSize:20}}>{props.route.params != undefined ? props.route.params.user : '...'}</Text>
    </View>
  )
}
