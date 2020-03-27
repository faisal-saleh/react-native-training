import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Notifications} from '../scenes/Notifications';
import {TabRouter} from './TabRouter';

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={TabRouter} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};
