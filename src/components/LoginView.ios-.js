import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Button} from './Button';
import {ImageButton} from './ImageButton';
import {Input} from './Input';

const logo = require('../assets/react-logo.png');

export class LoginView extends PureComponent {
  state = {
    counter: 0,
    username: '',
    usernameFocused: false,
    password: '',
    passwordFocused: false,
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   counter: 0,
    // };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onUsernameFocused = this.onUsernameFocused.bind(this);
    this.onUsernameBlurred = this.onUsernameBlurred.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onPasswordFocused = this.onPasswordFocused.bind(this);
    this.onPasswordBlurred = this.onPasswordBlurred.bind(this);
  }

  onButtonClick() {
    console.log(this.state);

    var counter = this.state.counter;
    this.setState({
      counter: counter + 1,
    });
  }

  onUsernameChanged(value) {
    console.log(value);

    this.setState({
      username: value,
    });
  }

  onUsernameFocused() {
    this.setState({
      usernameFocused: true,
    });
  }

  onUsernameBlurred() {
    this.setState({
      usernameFocused: false,
    });
  }

  onPasswordChanged(value) {
    this.setState({
      password: value,
    });
  }

  onPasswordFocused() {
    this.setState({
      passwordFocused: true,
    });
  }

  onPasswordBlurred() {
    this.setState({
      passwordFocused: false,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, minHeight: 400}} />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <ImageButton
                btnImage={logo}
                touchCallback={() => {
                  console.warn('abc');
                }}
              />
            </View>
            <Input
              labelText="Username"
              textValue={this.state.username}
              onChangeText={this.onUsernameChanged}
              onFocus={this.onUsernameFocused}
              onBlur={this.onUsernameBlurred}
              isFocused={this.state.usernameFocused}
            />
            <Input
              labelText="Password"
              textValue={this.state.password}
              onChangeText={this.onPasswordChanged}
              onFocus={this.onPasswordFocused}
              onBlur={this.onPasswordBlurred}
              isFocused={this.state.passwordFocused}
            />
            <Text>{this.state.counter}</Text>
            <Button btnText="Signin" touchCallback={this.onButtonClick} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    margin: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
