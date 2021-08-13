import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StylesHome} from '../stylesheets';
class HomeScreen extends Component {
  render() {
    return (
      <View style={StylesHome.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
export {HomeScreen};
