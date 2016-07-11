/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS
} from 'react-native';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
//const { AppRegistry, StyleSheet, Text, View, ListView, AlertIOS } = React;

const Firebase = require('firebase');
const styles = require('./styles.js')

class GroceryApp extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
      };
    }

    componentDidMount() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
      })
    }

    _renderItem(Item) {
        return (
           <ListItem item={Item} onpress={() => {}} />
        );
    }

    render() {
      return (
        <View style={styles.container}>

          <StatusBar title="Grocery List" />

          <ListView 
            dataSource={this.state.dataSource} 
            renderRow={this._renderItem.bind(this)} 
            style={styles.listview}
          />

          <ActionButton title="Add" onpress={() => {}} />

        </View>
      );
    }
}

AppRegistry.registerComponent('firebase1', () => GroceryApp);









