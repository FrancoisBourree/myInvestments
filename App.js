import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InvestmentAdd from './Components/InvestmentAdd'
import NavigationBar from './Components/NavigationBar'
import Investment from './Components/Investment'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar/>
        <View style={styles.containerInvestments}>
          <Investment/>
          <Investment/>

            <Button
                icon={
                    <Icon
                        name="home"
                        size={50}
                        color="white"
                        type="clear"
                    />
                }
                iconRight
                title="Investment 1"
            />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60ff00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  containerInvestments: {
    flex: 1,
    backgroundColor: '#ff0c00',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
