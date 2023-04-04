import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextIcon from './TextIcon';
import AppText from './AppText';
import AppTitle from './AppTitle';

const ListItem = ({item, iconSize, onPress}: CardPropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextIcon title={item.label} size={iconSize} initials={item.initials} />
      <View style={styles.description}>
        <AppTitle numberOfLines={1} style={styles.title}>
          {item.label}
        </AppTitle>
        <AppText numberOfLines={1} style={styles.title}>
          {item.value}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    paddingRight: 0,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {},
  description: {},
});

type CardPropsType = {
  item: Item;
  iconSize?: number;
  onPress: any;
};

type Item = {
  id: number;
  label: string;
  value: string;
  initials?: string[];
  icon?: string;
};
