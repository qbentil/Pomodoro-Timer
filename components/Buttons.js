import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

const PlayButton = (props) => {
    return (
      <TouchableOpacity onPress = {props.onPlay}>
           <Ionicons name="md-play-circle" size={32} color="green" />
      </TouchableOpacity>
    );
  }
const ResetButton = (props) => {
    return (
      <TouchableOpacity onPress = {props.onRest}>
           <Ionicons name="md-refresh-circle" size={32} color="orange" />
      </TouchableOpacity>
    );
  }
  
const styles = StyleSheet.create({
  
})
export  {PlayButton, ResetButton};
