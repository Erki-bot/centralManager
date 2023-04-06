import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import SampleChart from '../components/SampleChart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import DatabaseValues from '../types/types';
import {useIsFocused} from '@react-navigation/native';

const reference = database().ref('/electrical_values');

const ViewDetails = ({route}: any) => {
  const isFocused = useIsFocused();
  let electricalValueLabel = route.params.item.label;
  //state values
  const [currentValue, setCurrentValue] = useState(undefined);
  const [lastValues, setLastValues] = useState({});
  const [minValue, setMinValue] = useState(undefined);
  const [maxValue, setMaxValue] = useState(undefined);

  let listener:
    | ((
        a: FirebaseDatabaseTypes.DataSnapshot,
        b?: string | null | undefined,
      ) => void)
    | undefined;

  useEffect(() => {
    if (isFocused) {
      listener = reference
        .limitToLast(10)
        // .orderByKey()
        .on('value', s => {
          let datas = s.val();
          let keys = Object.keys(s.val());
          let currentDatas = datas[keys[keys.length - 1]];
          setCurrentValue(currentDatas.datas[electricalValueLabel]);
          let chartDatas = [];
          let chartLabel = [];
          for (let index of keys) {
            chartDatas.push(Number(datas[index].datas[electricalValueLabel]));
            chartLabel.push(datas[index].date.time);
          }

          setLastValues({labels: chartLabel, datas: chartDatas});
          //set min
          let min = Math.min(...chartDatas);
          setMinValue(min);
          //set max
          let max = Math.max(...chartDatas);
          setMaxValue(max);
        });
    } else {
      reference.off('value', listener);
    }
    return () => {
      reference.off('value', listener);
    };
  }, [isFocused]);
  return (
    <Screen style={{backgroundColor: colors.lightGray2}}>
      <ScrollView
        contentContainerStyle={{
          padding: 15,
        }}>
        <View style={[styles.valueContainer, styles.currentValueContainer]}>
          <AppText>Valeur en temps réel</AppText>
          <Icon name="rocket" size={20} color="#999" />
          <AppText style={styles.valueText}>{currentValue}</AppText>
        </View>
        {lastValues.datas && <SampleChart datas={lastValues} />}
        <View style={styles.extremeValuesContainer}>
          <View style={[styles.extremeValue, styles.valueContainer]}>
            {minValue && (
              <AppText style={styles.valueText}>
                {minValue.toFixed(2)} {route.params.item.unit}
              </AppText>
            )}
            <AppText style={{alignSelf: 'center', color: '#ff0000'}}>
              Min
            </AppText>
          </View>
          <View style={[styles.extremeValue, styles.valueContainer]}>
            {maxValue && (
              <AppText style={styles.valueText}>
                {maxValue.toFixed(2)} {route.params.item.unit}
              </AppText>
            )}
            <AppText style={{alignSelf: 'center', color: '#00ff00'}}>
              Max
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  valueText: {
    fontSize: 28,
    fontWeight: '900',
  },
  topPlaceHolder: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  bottomPlaceHolder: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  extremeValuesContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  extremeValue: {
    // shadowRadius: 50,
    // shadowColor: 'black',
    // shadowOffset: {width: 50, height: 12},
    // shadowOpacity: 50,
  },
  valueContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
  },
  currentValueContainer: {
    width: '100%',
    margin: 0,
    marginVertical: 15,
  },
});
