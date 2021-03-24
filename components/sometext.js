import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default class SomeText extends React.Component {
    render() {
        return <Text style={styles.textstyle}  >{this.props.name}</Text>
        
        
    }
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        color: "white",
        backgroundColor: "orange",
        paddingHorizontal: 15
    }
})