import React, {PureComponent} from 'react';
import {Login} from './Login';
import {FlexSample} from './FlexSample';
import {Listing} from './Listing';

export class AppController extends PureComponent {
  render() {
    // return <Listing />;
    return <Login />;
    // return <FlexSample />;
  }
}
