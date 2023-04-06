import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
const NotYetDevelopedScreen = () => {
  return (
    <View style={styles.constainer}>
      <Icon name="progress-pencil" size={100} color="white" />
      <AppText style={styles.text}>En cours de développement...</AppText>
    </View>
  );
};

export default NotYetDevelopedScreen;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#0a6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
