import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const PlayButton = (props) => {
    return (
      <TouchableOpacity styles = {styles.button} onPress = {props.onPlay}>
          <Ionicons name="md-play-circle" size={80} color="green" />
      </TouchableOpacity>
    );
  }
const ResetButton = (props) => {
    return (
      <TouchableOpacity styles = {styles.button} onPress = {props.onReset}>
          <Ionicons name="md-refresh-circle" size={80} color="brown" />
      </TouchableOpacity>
    );
  }
const Pausebutton = (props) => {
    return (
      <TouchableOpacity styles = {styles.button} onPress = {props.onPause}>
          <Ionicons name="md-refresh-circle" size={80} styles = {styles.icon} color="red" />
          
      </TouchableOpacity>
    );
  }
  
const styles = StyleSheet.create({
  button:{
    flex: 1,
    flexDirection: "row",
    jusifyContent: 'space-around',
    padding: 24,
    width: '100%',
    marginHorizontal: 25,

  },
  icon: {
    margin: 100
  }
})
export  {PlayButton, ResetButton, Pausebutton};
