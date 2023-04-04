// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ViewDetails from './ViewDetails';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Meteo = () => (
  <View>
    <Text>Test</Text>
  </View>
);
const BottomNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Acceuil" component={StackNavigator} />
      <Tab.Screen name="Météo" component={Meteo} />
    </Tab.Navigator>
  </NavigationContainer>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Details"
      component={ViewDetails}
      options={({route}) => ({title: route.params?.item.label})}
    />
  </Stack.Navigator>
);
function MainScreen() {
  return <BottomNavigator />;
}

export default MainScreen;
