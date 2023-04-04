import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

/*
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
*/
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

const reference = database().ref('/electrical_value');

const Home = ({navigation}) => {
  const [values, setValues] = useState(value);
  useEffect(() => {
    reference.limitToLast(1).on('child_added', s => {
      let databaseValue: DatabaseValues = s.val();
      setValues([
        {
          id: 1,
          label: 'Tension',
          value: `${databaseValue.voltage} V`,
        },
        {
          id: 2,
          label: 'Courant',
          value: `${databaseValue.current} A`,
          initials: ['i'],
        },
        {
          id: 3,
          label: 'Puissance',
          value: `${databaseValue.power} W`,
        },
        {
          id: 4,
          label: 'Energie',
          value: `${databaseValue.energy} kWh`,
        },
        {
          id: 5,
          label: 'Facteur de puissance',
          value: `${databaseValue.power_factor}`,
          initials: ['f', 'p'],
        },
        {
          id: 6,
          label: 'Fréquence',
          value: `${databaseValue.frequency}`,
          // initials: ['f', 'p'],
        },
      ]);
      // console.log(s.val());
    });
    // .then(data=>console.log(data))
  }, []);
  return (
    <Screen style={{backgroundColor: colors.lightGray2, padding: 15}}>
      <FlatList
        data={values}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onPress={() => navigation.navigate('Details', {item: item})}
          />
        )}
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});

//Types
type DatabaseValues = {
  current: string;
  energy: string;
  frequency: string;
  power: string;
  voltage: string;
  power_factor: string;
};
