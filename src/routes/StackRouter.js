import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppController} from '../scenes/AppController';
import {FlexSample} from '../scenes/FlexSample';
import {Listing} from '../scenes/Listing';
import {Login} from '../scenes/Login';
import {Permissions} from '../scenes/Permissions';
import {Picker} from '../scenes/Picker';
import {Button} from '../components/Button';

const Stack = createStackNavigator();

export const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="AppController">
      <Stack.Screen
        name="AppController"
        component={AppController}
        options={({navigation}) => ({
          headerLeft: () => (
            <Button
              btnText="Drawer"
              touchCallback={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen name="FlexSample" component={FlexSample} />
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              btnText="Press me"
              touchCallback={() => navigation.navigate('FlexSample')}
            />
          ),
        })}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Permissions" component={Permissions} />
      <Stack.Screen name="Picker" component={Picker} />
    </Stack.Navigator>
  );
};
