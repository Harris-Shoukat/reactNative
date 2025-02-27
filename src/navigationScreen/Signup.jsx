import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import loginconstant from '../constants/loginconstant';
const Signup = (props) => {
  // const {email} = props.route.params;

  return (
    <>
      {/* <Text>
        welcome <Text style={{fontSize: 20, fontWeight: '500'}}>{email}</Text>
      </Text> */}

      <FlatList
        data={loginconstant} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text>ID: {item.id}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Password: {item.password}</Text>
          </View>
        )}
      />
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
});
