import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/presentation/App';

export default class jackal extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('jackal', () => jackal);
