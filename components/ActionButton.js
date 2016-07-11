'use strict';
import React, { Component } from 'react';
const styles = require('../styles.js')
const constants = styles.constants;
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class ActionButton extends React.Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight underlaycolor={constants.actionColor} onpress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;