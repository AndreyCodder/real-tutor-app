import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/Screens/Auth/Auth';
import MainAuth from './components/Screens/Auth/MainAuth';
import { gStyle } from './components/styles';


export default function App() {
  return (
    <View style={gStyle.main}>
      <MainAuth/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
