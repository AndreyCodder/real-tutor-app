import React from 'react';
import { ImageProps, StyleSheet, TextInput } from 'react-native';

const MyRichInput = (props) => {
    return (
        <TextInput 
            style={[styles.textField, {...props.style}]}
            mode="outlined"
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    textField: {
        backgroundColor: '#ebebec',
        marginTop: 10,
        fontSize: 20,
        padding: 5,
        width: 250,
        borderRadius: 10,
    },
  });

export default MyRichInput;