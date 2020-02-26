import React, {Component} from 'react';
import {Text, View} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main Page',
  };
  //state

  state = {
    pets: [],
  };

  // //call api
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/pets');

    this.setState({pets: response.data});
    console.log(response.data);
  };

  render() {
    const {pets} = this.state;
    return (
      <View>
        <Text> aeae </Text>

        {this.state.pets.map(item => (
          <Text key={item._id}>{item.nome}</Text>
        ))}
      </View>
    );
  }
}
