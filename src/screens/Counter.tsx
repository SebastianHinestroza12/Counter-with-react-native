import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../components/Button/Button';

export const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textCounter}>Counter : {counter}</Text>
      <Button
        title="+1"
        position="br"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="-1"
        position="bl"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textCounter: {
    backgroundColor: '#dc143c',
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
  },
});
