import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {SplashScreen, HomeScreen} from '../screens';
/** Navigation based all the files will be listed on this folder directory **/

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      SplashScreen: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) => ({
          headerShown: false,
        }),
      },
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({headerShown: false}),
      },
    },
    {
      transition: (
        <Transition.Together>
          <Transition.In type="slide-right" durationMs={400} />
        </Transition.Together>
      ),
    },
  ),
);
