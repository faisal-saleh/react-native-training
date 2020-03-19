import React, {PureComponent} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

export class FlexSample extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'red'}]} />
        <View style={[styles.box, {backgroundColor: 'blue'}]} />
        <View style={[styles.box, {backgroundColor: 'green'}]} />
        <View style={[styles.box, {backgroundColor: 'yellow'}]} />
        <View style={{flexDirection: Platform.OS === 'ios' ? 'row' : 'column'}}>
          <View style={[styles.box, {backgroundColor: 'blue'}]} />
          <View style={[styles.box, {backgroundColor: 'green'}]} />
          <View style={[styles.box, {backgroundColor: 'yellow'}]} />
        </View>
        <View style={[styles.box, {backgroundColor: 'black'}]} />
        <View style={[styles.box, {backgroundColor: 'pink'}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Platform.OS === 'ios' ? 'column' : 'row',
    justifyContent: 'space-evenly', // on same axis as flex direction
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  box: {
    width: 100,
    height: 100,
  },
});
