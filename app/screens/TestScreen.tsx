import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ViewDetails from './ViewDetails';

let value = [
  {
    id: 1,
    label: 'Tension',
    value: '220 V',
  },
  {
    id: 2,
    label: 'Courant',
    value: '0.152 A',
    initials: ['i'],
  },
  {
    id: 3,
    label: 'Puissance',
    value: '135 W',
  },
  {
    id: 4,
    label: 'Energie',
    value: '12.2645 kWh',
  },
  {
    id: 5,
    label: 'Facteur de puissance',
    value: '0.86',
    initials: ['f', 'p'],
  },
];
const TestScreen = ({values}) => {
  return <ViewDetails />;
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {},
});

/**
 * @todo
 * 
 */