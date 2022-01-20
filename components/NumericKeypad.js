import * as React from 'react';

import { Platform, StyleSheet, TextInput } from 'react-native';

const NumericKeypad = (props) => {
    return (
      <TextInput style={styles.input} 
          placeholder={props.placeholder}
          keyboardType={Platform.OS ? "numeric" : "number-pad"}
          returnKeyType='done'
          value = {25}
          // onChangeText={(text) => this.setState({text})} 
      />
    );
}


const styles = StyleSheet.create({
   input: {
    borderWidth: 1,
    padding:10,
    paddingRight: 20,
    paddingLeft: 5,
    width: 100,
    borderColor: '#512DA8',
  }
})
export  default NumericKeypad;