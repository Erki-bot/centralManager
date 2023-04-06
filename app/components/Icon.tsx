import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type PropsType = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};
const Icon = ({name, size = 40, color = 'black', ...otherProps}: PropsType) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      {...otherProps}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {},
});
