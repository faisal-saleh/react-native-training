import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

export const Input = ({
  labelText,
  textValue,
  onChangeText,
  onEndEditing,
  onFocus,
  onBlur,
  isFocused,
}) => {
  const borderColor = isFocused ? {borderColor: 'blue'} : {};
  return (
    <View style={[styles.container, borderColor]}>
      <Text>{labelText}</Text>
      <TextInput
        value={textValue}
        onChangeText={onChangeText}
        onSubmitEditing={onEndEditing}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 2,
    padding: 8,
  },
});
