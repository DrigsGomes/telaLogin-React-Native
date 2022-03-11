import React from 'react';
import { StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native-stack';

import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

