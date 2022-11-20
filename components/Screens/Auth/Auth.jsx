import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { gStyle } from "../../styles";
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/MyInput';
import MyTouchableText from '../../UI/MyTouchableText';


const Auth = ({setScreen}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const Test = async () => {
      const respons = await axios(
        `https://sdo.avangard.ru/oapi/Test/Test`,
        {
          headers: {
            'x-app-id': '9qaen5t94kzjxmnvulwssvce084qp4'
          }
        }
      )
      alert(respons.data);
    }
    const LogIn = async () => {
      const respons = await axios.post(
        `https://sdo.avangard.ru/oapi/Login/Log_in`,
        {
          login: "ovcherovap",
          password: "qwerty123"
        },
        {
          headers: {
            'x-app-id': '9qaen5t94kzjxmnvulwssvce084qp4'
          }
        }
      )
      alert(respons.data);
    }
    
    return (
        <View style={[styles.container]}>
            <Image style={styles.img} source={require("../../../images/AvangardLogo.png")}/>
            <Text style={gStyle.fontHeaders}>Добро пожаловать в учебный центр Авангард!</Text>
            <MyInput placeholder="Логин" label="Login" onChangeText={(login) => setLogin(login)}/>
            <MyInput placeholder="Пароль" label="Password" secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
            <MyButton title="Войти" onPress={LogIn}/>
            <MyTouchableText title="Напомнить пароль" onPress={()=>{setScreen('remember')}}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      justifySelf: 'center'
    },
    img:{
      width: 280,
      height: 40
    }
  });

export default Auth;