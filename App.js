/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';

import {
  ViroARSceneNavigator
} from '@viro-community/react-viro';
import ARSimple from './ARSimple';


const App = () => {
  return (
    <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: "100%", height:"100%" }}>
      <ViroARSceneNavigator
        initialScene={{
          scene: ARSimple
        }}
      />
    </View>
  );
};

export default App;
