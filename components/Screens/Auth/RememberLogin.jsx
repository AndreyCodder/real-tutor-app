import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../../styles';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/MyInput';
import MyRichInput from '../../UI/MyRichInput';
import MyTouchableText from '../../UI/MyTouchableText';

const RememberLogin = ({setScreen}) => {
    return (
        <View style={[styles.container]}>
            <Image style={styles.img} source={require("../../../images/AvangardLogo.png")}/>
            <Text style={[gStyle.fontHeaders, {fontSize: 16}]}>Администратор получит ваше сообщение и ответит на вашу почту по будням с 09:00 до 18:00</Text>
            <MyInput placeholder="Ваше ФИО"/>
            <MyInput placeholder="Ваш email"/>
            <MyRichInput placeholder="Сообщение администратору" multiline numberOfLines={4}/>
            <MyButton title="Написать администратору" onPress={()=>{alert("1")}}/>
            <MyTouchableText title="Авторизоваться" onPress={()=>{setScreen('auth')}}/>
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

export default RememberLogin;