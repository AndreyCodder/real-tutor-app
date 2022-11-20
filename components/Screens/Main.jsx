import React from 'react';
import { Text } from 'react-native';
import MyTouchableText from '../UI/MyTouchableText';

const Main = ({setScreen}) => {
    return (
        <MyTouchableText title="Напомнить пароль" onPress={()=>{setScreen('auth')}}/>
    );
};

export default Main;