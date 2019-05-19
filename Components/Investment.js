import React from 'react'
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native'

export default class Investment extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.text}>Investissement 1</Text>
            </TouchableOpacity>
        )
    }
}

const styles = {
    TouchableOpacity: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:4,
        //paddingLeft: 5,
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aeffa6',
        //paddingTop:10,
        margin:5,
    },
    text: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        //borderColor: '#8e0006',
        //borderWidth: 1,
        //paddingLeft: 5,
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}