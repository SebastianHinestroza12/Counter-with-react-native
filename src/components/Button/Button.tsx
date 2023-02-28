import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Props} from '../../interfaces';

export const Button = ({title, onPress, position}: Props): JSX.Element => {
  const ios = (): JSX.Element => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
        onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.icon}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = (): JSX.Element => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#00ffff', false, 30)}>
          <View style={styles.button}>
            <Text style={styles.icon}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 1,
  },
  icon: {
    fontSize: 29,
  },
});
