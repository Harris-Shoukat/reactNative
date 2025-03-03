import 'react-native-gesture-handler';
import {SafeAreaView, View} from 'react-native';
import React from 'react';
// import Flatlist from './src/component/Flatlist';
// import SectionLists from './src/component/SectionLists';
// import Loader from './src/component/Loader';
// import Modal from './src/component/Modal';
import Login from './src/navigationScreen/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/navigationScreen/Signup';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/navigationScreen/Home';
// import About from './src/navigationScreen/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Splash from './src/navigationScreen/Splash';
import Getapi from './src/navigationScreen/Getapi';
import Postapi from './src/navigationScreen/Postapi';
import DeleteApi from './src/navigationScreen/DeleteApi';

const About = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {backgroundColor: 'lightgrey'},
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarActiveTintColor: '#2471a3',
      }}>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="Sign up"
        component={Signup}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user-plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="API"
        component={DeleteApi}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="sign-in-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();

// const stack = createNativeStackNavigator();

const drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      {/* <Text>harris</Text> */}
      {/* <Flatlist />
        <SectionLists /> */}
      {/* <Loader /> */}
      {/* <Modal /> */}
      {/* <Login /> */}

      {/* <NavigationContainer>
            <stack.Navigator>
              <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <stack.Screen name="signup" component={Signup} />
            </stack.Navigator>
          </NavigationContainer> */}

      <NavigationContainer>
        <drawer.Navigator
          initialRouteName="Splash"
          screenOptions={{
            drawerStyle: {
              backgroundColor: 'lightgrey',
            },
            drawerLabelStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#2471a3',
            },
            headerTintColor: '#FEFCFF',
          }}>
          <drawer.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
        
          />
          <drawer.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerIcon: ({size, color}) => (
                <Icon name="home" size={size} color={color} />
              ),
            }}
          />
          <drawer.Screen
            name="About"
            component={About}
            options={{
              drawerIcon: ({size, color}) => (
                <Icon name="address-card" size={size} color={color} />
              ),
            }}
          />
          <drawer.Screen name="signup" component={Signup} />
        </drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
