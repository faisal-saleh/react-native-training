import React from 'react';
import {View} from 'react-native';
import {Button} from '../components/Button';

export const AppController = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Button
        btnText="Move to FlexSample "
        touchCallback={() => navigation.navigate('FlexSample')}
      />
      <Button
        btnText="Move to Listing "
        touchCallback={() => navigation.navigate('Listing')}
      />
      <Button
        btnText="Move to Login "
        touchCallback={() => navigation.navigate('Login')}
      />
      <Button
        btnText="Move to Permissions "
        touchCallback={() => navigation.navigate('Permissions')}
      />
      <Button
        btnText="Move to Picker with props"
        touchCallback={() => navigation.navigate('Picker', {post: 'test'})}
      />
      <Button
        btnText="Move to AppController Again "
        touchCallback={() => navigation.push('AppController')}
      />
      <Button
        btnText="Move to AppController with Back "
        touchCallback={() => navigation.goBack()}
      />
      <Button
        btnText="Move to AppController with pop to root "
        touchCallback={() => navigation.popToTop()}
      />
    </View>
  );
};
