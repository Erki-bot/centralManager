import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import DatabaseValues from '../types/types';

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

const reference = database().ref('/electrical_values');

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  // console.log(isFocused)
  const [values, setValues] = useState(value);

  let listener:
    | ((
        a: FirebaseDatabaseTypes.DataSnapshot,
        b?: string | null | undefined,
      ) => void)
    | undefined;

  useEffect(() => {
    if (isFocused) {
      listener = reference.limitToLast(1).on('child_added', s => {
        let databaseValue: DatabaseValues = s.val().datas;

        setValues([
          {
            id: 1,
            label: 'voltage',
            name: 'Tension',
            value: `${databaseValue.voltage} V`,
            unit: 'V',
          },
          {
            id: 2,
            name: 'Courant',
            label: 'current',
            value: `${databaseValue.current} A`,
            initials: ['i'],
            unit: 'A',
          },
          {
            id: 3,
            name: 'Puissance',
            label: 'power',
            value: `${databaseValue.power} W`,
            unit: 'W',
          },
          {
            id: 4,
            name: 'Energie',
            label: 'energy',
            value: `${databaseValue.energy} kWh`,
            unit: 'kWh',
          },
          {
            id: 5,
            name: 'Facteur de puissance',
            label: 'power_factor',
            value: `${databaseValue.power_factor}`,
            initials: ['f', 'p'],
            unit: '',
          },
          {
            id: 6,
            name: 'Fréquence',
            label: 'frequency',
            value: `${databaseValue.frequency}`,
            unit: 'Hz',
            // initials: ['f', 'p'],
          },
        ]);
        // console.log(s.val());
      });
    } else {
      reference.off('child_added', listener);
    }
    return () => {
      reference.off('child_added', listener);
    };
    // .then(data=>console.log(data))
  }, [isFocused]);
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
