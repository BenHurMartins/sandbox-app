import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Screen01 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 01</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
