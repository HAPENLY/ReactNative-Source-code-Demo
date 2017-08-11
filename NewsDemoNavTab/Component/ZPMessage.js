/**
 * Created by zhaopengsong on 2016/12/13.
 */
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

var ZPMessage = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    消息
                </Text>

            </View>
        );
    }


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports = ZPMessage;