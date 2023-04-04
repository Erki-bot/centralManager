import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import SampleChart from '../components/SampleChart';
import Icon from 'react-native-vector-icons/FontAwesome5';
const shadowOpt = {
  width: 150,
  height: 150,
  color: '#000',
  border: 2,
  radius: 10,
  opacity: 0.2,
  x: 0,
  y: 0,
  style: {marginVertical: 5, backgroundColor: 'white'},
};

const ViewDetails = ({route}:any) => {
  return (
    <ScrollView>
      <Screen
        style={{backgroundColor: colors.lightGray2, padding: 15, flex: 1}}>
        <View style={[styles.valueContainer, styles.currentValueContainer]}>
          <AppText>Valeur en temps réel</AppText>
          <Icon name = "rocket" size={20} color="#999"/>
          <AppText style={styles.valueText}>{route.params.item.value}</AppText>
        </View>
        <SampleChart />
        <View style={styles.extremeValuesContainer}>
          <View style={[styles.extremeValue, styles.valueContainer]}>
            <AppText style={styles.valueText}>119 V</AppText>
            <AppText style={{alignSelf: 'center', color: '#ff0000'}}>
              Min
            </AppText>
          </View>
          <View style={[styles.extremeValue, styles.valueContainer]}>
            <AppText style={styles.valueText}>230 V</AppText>
            <AppText style={{alignSelf: 'center', color: '#00ff00'}}>
              Max
            </AppText>
          </View>
        </View>
      </Screen>
    </ScrollView>
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
