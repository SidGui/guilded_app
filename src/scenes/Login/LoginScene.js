import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MKTextField } from 'react-native-material-kit';


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
  },
  logo:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    //flexDirection:''
  },
  login:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  bottom:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
});


const Textfield = MKTextField.textfield()
  .withPlaceholder('Login')
  .withStyle(styles.textfield)
  .withTextInputStyle({flex: 1})
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .build();

export default class LoginScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>Welcome to Guilded!</Text>
        </View>
        <KeyboardAvoidingView style={styles.login}>
          <Textfield/>
          <TextInput style={styles.textStyle}></TextInput>
        </KeyboardAvoidingView>
        <View style={styles.bottom}>
          <Button onPress={() => Actions.home()} title={'Enter'}></Button>
        </View>
      </View>
    );
  }
}
