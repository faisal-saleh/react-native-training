import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {increment, incrementBy, decrement, decrementBy} from '../actions';

export const Counter = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const count = useSelector(state => state.calc.count);
  const dispatch = useDispatch();

  const borderColor = inputFocused ? {borderColor: 'blue'} : {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`Current count is ${count}`}</Text>
      <Button
        btnText="Increment by 1"
        touchCallback={() => dispatch(increment)}
      />
      <Button
        btnText="Decrement by 1"
        touchCallback={() => dispatch(decrement)}
      />

      <TextInput
        style={[styles.container, borderColor]}
        placeholder="Insert a  number"
        textValue={inputValue}
        onChangeText={value => setInputValue(Number(value))}
        keyboardType="numeric"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <View style={{flexDirection: 'row'}}>
        <Button
          btnText="Increment By"
          touchCallback={() => dispatch(incrementBy(inputValue))}
        />
        <Button
          btnText="Decrement By"
          touchCallback={() => dispatch(decrementBy(inputValue))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 2,
    padding: 8,
    width: 200,
  },
});
