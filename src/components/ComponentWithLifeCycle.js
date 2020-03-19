import React, {Component} from 'react';
import {Text} from 'react-native';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    console.log('in constructor', props);

    this.state = {
      someValue: props.someValue,
    };
  }

  componentDidMount() {
    console.log('in didMount');
    this.setState({
      someValue: 5,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('in shouldUpdate', nextProps, nextState);
    return true;
  }

  render() {
    console.log('in render');
    return <Text>{this.state.someValue}</Text>;
  }

  componentDidUpdate() {
    console.log('in didUpdate');
  }

  componentWillUnmount() {
    console.log('in willUnmount');
  }
}
