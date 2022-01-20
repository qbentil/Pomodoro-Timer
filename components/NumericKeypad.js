import * as React from 'react';
import { Platform, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NumericKeypad = (props) => {
    return (
      <TextInput style={styles.input} 
          keyboardType={Platform.OS ? "numeric" : "number-pad"}
          returnKeyType='done'
          value = {25}
          {...props} 
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