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
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    margin: 4,
    padding: 3,
    textAlign: 'center',
  },
});

// export default Button;
// export Button;
