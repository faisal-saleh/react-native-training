import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerRouter} from './routes/DrawerRouter';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
