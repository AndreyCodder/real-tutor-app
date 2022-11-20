import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyButton = (props) => {
    return (
        <View style={{width: 250, height: 60}}>
            <TouchableOpacity style={styles.loginBtn} onPress={props.onPress}>
                <Text style={styles.loginText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    loginBtn: {
        flex:1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#0e864d",
      },
    loginText: {
        color: "#fff",
    }
});

export default MyButton;