import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default class HomeScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>{"Victor Viadão <3 !"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
      borderBottomColor:'gray',
      borderBottomWidth: 1,
      width:'100%'
  }
});
