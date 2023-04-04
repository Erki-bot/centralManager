/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * 
 */
import React from 'react';
import Home from './app/screens/Home';

import TestScreen from './app/screens/TestScreen';
import MainScreen from './app/screens/MainScreen';
let value = [
  {
    id: 1,
    label: 'Tension',
    value: undefined,
  },
  {
    id: 2,
    label: 'Courant',
    value: undefined,
    initials: ['i'],
  },
  {
    id: 3,
    label: 'Puissance',
    value: undefined,
  },
  {
    id: 4,
    label: 'Energie',
    value: undefined,
  },
  {
    id: 5,
    label: 'Facteur de puissance',
    value: undefined,
    initials: ['f', 'p'],
  },
];

function App(): JSX.Element {
  return <MainScreen />;
}

export default App;
