import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Timer = (props) => {
  return (

  <View style = {styles.container}>
      <Text style = {styles.title}>WORK TIMER</Text>
      <Text style = {styles.timer}>25 : 00</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    paddingHorizontal: 100,
    marginTop: 100,
    alignItems: "center",
    width: "100%",
    backgroundColor: '#512DA8',
    borderRadius:10

  },
  title: {
      marginVertical: 5,
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff',
      marginTop: 15
  },
  timer: {
      fontWeight: 'bold',
      marginVertical: 10,
      fontSize: 50
  }
});
export default Timer;
