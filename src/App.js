import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerRouter} from './routes/DrawerRouter';
import {Provider} from 'react-redux';
import {store} from './store';
import {StackRouter} from './routes/StackRouter';
import {TabRouter} from './routes/TabRouter';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <DrawerRouter />
        <TabRouter /> */}
        <StackRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
