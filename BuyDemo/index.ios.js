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
  View
} from 'react-native';
//导入外部组件
var Main = require('./Component/Main/ZPMain');
export default class BuyDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('BuyDemo', () => BuyDemo);
