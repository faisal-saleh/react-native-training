import React from 'react';
import {View, Text} from 'react-native';

export const PermissionsView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Permissions not granted on iOS</Text>
    </View>
  );
};
