import React from 'react';
import {Alert} from 'react-native';
import {PickerView} from '../components/PickerView';

export const Picker = ({route}) => {
  if (route.params) {
    Alert.alert('params', JSON.stringify(route.params));
  }
  return <PickerView />;
};
