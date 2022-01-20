import * as React from 'react';

import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import {PlayButton, ResetButton} from './components/Buttons';

import Constants from 'expo-constants';
import NumericKeypad from './components/NumericKeypad';
import Timer from './components/Timer';

export default class App extends React.Component {
  render()
  {
      return (
      <View style={styles.container}>
        <View style = {styles.headerWrapper}>
          <Text style = {styles.title}>POMODORO TIMER</Text>
          <Timer />
        </View>
        <View style = {styles.inputWrapper}>
          <View style = {styles.caps}>
            <Text style = {styles.txt}>Work time: </Text>
            <Text style = {styles.txt}>Break time: </Text>
          </View>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.caps}
        >
          <NumericKeypad placeholder = "min" />
          <NumericKeypad placeholder = "min" />

        </KeyboardAvoidingView>
                <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.caps}
        >
          <NumericKeypad placeholder = "sec"  />
          <NumericKeypad placeholder = "sec" />
        </KeyboardAvoidingView>
        </View>
        <View style = {styles.btnWrapper}>
            <PlayButton />
            <ResetButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  headerWrapper: {
    flexDirection: "column",
    position: "absolute",
    top: Constants.statusBarHeight+5,
    justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btnWrapper: {
    position: "absolute",
    flexDirection: "row",
    width: 200,
    justifyContent: 'space-around',
    bottom: 100
  },
  caps: {
    width: 500,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    marginVertical: 10,
  },
  txt:{
    fontSize: 15,
    fontWeight: "bold",
  },
});
