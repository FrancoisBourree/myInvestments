import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InvestmentAdd from './Components/InvestmentAdd'
import Investment from './Components/Investment'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My investments</Text>
        <View style={styles.containerInvestments}>
          <Investment/>
          <Investment/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInvestments: {
    flex: 1,
    backgroundColor: '#ff0c00',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
