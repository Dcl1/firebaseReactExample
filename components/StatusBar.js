'use strict';
import React, { Component } from 'react';
const styles = require('../styles.js')
import { StyleSheet, Text, View } from 'react-native';


class StatusBar extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar} />
          <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>
                {this.props.title}
            </Text>
          </View>
      </View>
    );
  }
}

module.exports = StatusBar;