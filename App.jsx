import {SafeAreaView, View} from 'react-native';
import React from 'react';
// import Flatlist from './src/component/Flatlist';
// import SectionLists from './src/component/SectionLists';
// import Loader from './src/component/Loader';
// import Modal from './src/component/Modal';
import Login from './src/navigationScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/navigationScreen/Signup';

const stack = createNativeStackNavigator(); 


const App = () => {
  return (
    
      <>
        {/* <Text>harris</Text> */}
        {/* <Flatlist />
        <SectionLists /> */}
        {/* <Loader /> */}
        {/* <Modal /> */}
        {/* <Login /> */}



          <NavigationContainer>
            <stack.Navigator>
              <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <stack.Screen name="signup" component={Signup} />
            </stack.Navigator>
          </NavigationContainer>

      </>
  );
};

export default App;
