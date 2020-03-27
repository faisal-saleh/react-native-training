import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Counter} from '../scenes/Counter';
import {TabRouter} from './TabRouter';

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={TabRouter} />
      <Drawer.Screen name="Counter" component={Counter} />
    </Drawer.Navigator>
  );
};
