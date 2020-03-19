import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Cell = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
