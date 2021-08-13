import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {goToHomeScreen} from '../navigations/NavActions';
import {StylesSplash} from '../stylesheets';

class SplashScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setTimeout(() => {
      goToHomeScreen(this.props.navigation);
    }, 1500);
  }
  render() {
    return (
      <View style={StylesSplash.container}>
        <StatusBar hidden={true} />
        <View style={StylesSplash.bgContainer}>
          <Text>Splash Screen</Text>
        </View>
      </View>
    );
  }
}
export {SplashScreen};
