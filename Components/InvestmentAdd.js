import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default class InvestmentAdd extends React.Component {
    render() {
        return (
            <View style={styles.View}>
                <TextInput style={styles.textinput} placeholder='investment'/>
                <Button title='Add' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    View: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#8e0006',
        borderWidth: 1,
        paddingLeft: 5
    }
}