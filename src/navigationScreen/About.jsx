import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

// const Tab = createBottomTabNavigator();

const About = () => {
  return (
    <>
    
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sign up" component={Signup} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator> */}
    </>
  );
};

export default About;

const styles = StyleSheet.create({});
