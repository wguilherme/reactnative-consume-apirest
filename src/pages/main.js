import React, {Component} from 'react';

import {Text, View} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Eae',
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
