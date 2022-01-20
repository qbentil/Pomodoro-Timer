import * as React from 'react';

import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import {PlayButton, ResetButton} from './components/Buttons';

import Constants from 'expo-constants';
import NumericKeypad from './components/NumericKeypad';
import Timer from './components/Timer';
import normalizeDigits from './utils/normalizeDigits';
import {vibrate} from './utils'

const WORK_MIN = "25";
const WORK_SEC = '00';
const BREAK_MIN = "05";
const BREAK_SEC = "00";


export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      minCounter : this.WORK_MIN,
      secCounter : this.WORK_SEC,
      resumePauseState : false,
      resumePauseButton : 'start',
      timerName : "WORK",
      workMin : this.WORK_MIN,
      workSec : this.WORK_SEC,
      breakMin : this.BREAK_MIN,
      breakSec : this.BREAK_SEC

    }
  }

  // Change Toggle state FALSE/TRUE
  toggle = () => {
    this.setState ({
      resumePauseState : !this.state.resumePauseState
    })
    return this.toggleAction();
  }

  // Order START / STOP TIMER
  toggleAction = () => {
    return !this.state.resumePauseState? this.startTimer() : clearInterval(this.interval);
  }

  // Start Timer Function
  startTimer = () => {
    this.interval = setInterval(() => {
      let secs = normalizeDigits(
          (Number(this.state.secCounter) - 1).toString()
        ),
        mins = normalizeDigits(this.state.minCounter);
      if (
        Number(this.state.minCounter == 0) &&
        Number(this.state.secCounter == 0)
      ) {
        // Vibrate
        clearInterval(this.interval);
        return this.switchTimers();
      } else if (
        Number(this.state.minCounter == 0) &&
        Number(this.state.secCounter > 0)
      ) {
        mins = (Number(this.state.minCounter) - 1).toString();
        secs = '59';
      }
      this.setState({
        secCounter: normalizeDigits(secs),
        minCounter: normalizeDigits(mins)
      })
    }, 1000);
  };

  // Switch timer
  switchTimers = () => {
    if(this.state.timerName == "WORK")
    {
      this.setState({
        minCounter: normalizeDigits(this.state.breakMin),
        secCounter: normalizeDigits(this.state.breakSec),
        breakMin : normalizeDigits(this.state.breakMin),
        breakSec: normalizeDigits(this.state.breakSec),
        timerName : "PAUSE"
      })
      return this.startTimer()
    }else if(this.state.timerName == "PAUSE")
    {
      this.setState({
        minCounter: normalizeDigits(this.state.workMin),
        secCounter: normalizeDigits(this.state.workSec),
        workMin : normalizeDigits(this.state.workMin),
        workSec: normalizeDigits(this.state.workSec),
        timerName : "WORK"
      })
      return this.startTimer()
    }
  }

  // Reset timer
  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({
      minCounter: normalizeDigits(prevState.workMin),
      secCounter: normalizeDigits(prevState.workSec),
      resumePauseState: false,
      timerName: "WORK"
    })
  }

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
