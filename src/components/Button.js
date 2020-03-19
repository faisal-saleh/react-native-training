import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Proptypes from 'prop-types';

export const Button = ({btnText, touchCallback}) => {
  return (
    <TouchableOpacity onPress={touchCallback}>
      <Text style={styles.textBackgroundColor}>{`${btnText}`}</Text>
    </TouchableOpacity>
  );
};

Button.Proptypes = {
  btnText: Proptypes.number.isRequired,
  touchCallback: Proptypes.func.isRequired,
};

const styles = StyleSheet.create({
  textBackgroundColor: {
    backgroundColor: 'red',
  },
});

// export default Button;
// export Button;
