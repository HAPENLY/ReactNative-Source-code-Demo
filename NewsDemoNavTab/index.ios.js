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
} from 'react-native';
//引用外部的组件
var Main = require('./Component/ZPMain');

export default class NewsDemoNavTab extends Component {
  render() {
    return (
     <Main />
    );
  }
}
const styles = StyleSheet.create({
});

AppRegistry.registerComponent('NewsDemoNavTab', () => NewsDemoNavTab);
