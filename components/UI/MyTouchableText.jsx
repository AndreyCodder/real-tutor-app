import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const MyTouchableText = (props) => {
    return (
        <TouchableHighlight style={styles.buttonContainer} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        borderRadius:10,
      },
})

export default MyTouchableText;