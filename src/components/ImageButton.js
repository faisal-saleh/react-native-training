import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

export const ImageButton = ({btnImage, touchCallback}) => {
  return (
    <TouchableOpacity onPress={touchCallback}>
      <Image resizeMode="cover" style={styles.btnStyle} source={btnImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: 50,
    height: 50,
  },
});
