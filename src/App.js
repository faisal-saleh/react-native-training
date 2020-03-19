import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button} from './components/Button';
import {AppController} from './scenes/AppController';

const App = () => {
  return (
    <>
      {/* <View>
        <Text>Hello World</Text>
        <Button
          btnText="Press Me"
          touchCallback={() => console.warn('I got pressed')}
        />
        <MyComponent someValue={10} />
      </View> */}
      <AppController />
    </>
  );
};

export default App;
