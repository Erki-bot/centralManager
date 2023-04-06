// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ViewDetails from './ViewDetails';

import NotYetDevelopedScreen from './NotYetDevelopedScreen';
import Icon from '../components/Icon';
import constants from '../config/constants';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Meteo = () => (
  <View>
    <Text>Test</Text>
  </View>
);
const BottomNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarColor: colors.black,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Acceuil"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <Icon
              name="home"
              size={constants.BOTTOM_TAB_ICON_SIZE}
              color="#999"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={NotYetDevelopedScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="hammer-wrench"
              size={constants.BOTTOM_TAB_ICON_SIZE}
              color="#999"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Alertes"
        component={NotYetDevelopedScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="alert"
              size={constants.BOTTOM_TAB_ICON_SIZE}
              color="#999"
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Details"
      component={ViewDetails}
      options={({route}) => ({title: route.params?.item.name})}
    />
  </Stack.Navigator>
);
function MainScreen() {
  return <BottomNavigator />;
}

export default MainScreen;
