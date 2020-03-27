import React from 'react';
import {TabRouter} from './TabRouter';

export const AppRouter = ({userIsLoggedIn}) => {
  if (userIsLoggedIn) {
    return <TabRouter />;
  } else {
    return <AuthRouter />;
  }
};
