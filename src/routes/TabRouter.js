import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../scenes/Home';
import {Settings} from '../scenes/Settings';
import {StackRouter} from './StackRouter';
import {Listing} from '../scenes/Listing';

const Tab = createBottomTabNavigator();

export const TabRouter = () => {
  return (
    <Tab.Navigator initialRouteName="StackRouter">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="StackRouter" component={StackRouter} />
      <Tab.Screen name="Listing" component={Listing} />
    </Tab.Navigator>
  );
};
