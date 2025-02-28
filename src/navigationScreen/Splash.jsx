import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e5e7e8',
        }}>
        <StatusBar
        //   barStyle={'dark-content'}
        //   translucent={false}
        //   hidden={false}
        //   color="red"
        //   backgroundColor="blue"  
        backgroundColor="lightgreen"
        />
        <Animatable.Image
          source={require('../../asset/Splash.png')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 20,
            elevation: 20,
            shadowColor: 'white',
          }}
          duration={2000}
          animation="fadeOut"
        />
      </SafeAreaView>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});
