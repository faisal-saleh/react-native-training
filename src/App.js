import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerRouter} from './routes/DrawerRouter';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
};

export default App;
