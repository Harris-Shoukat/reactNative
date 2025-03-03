import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Postapi = () => {
  const [data, setData] = useState({id: '', name: '', email: ''});

  const handleinput = (field, value) => {
    setData({...data, [field]: value});
  };

  const handlesubmit = async () => {
    try {
      const res = await axios.post('http://10.0.2.2:3000/users', data);
      Alert.alert('success', 'submited');
    } catch (error) {
      Alert.alert('Error');
    }
  };
  return (
    <View style={{marginHorizontal:10}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Postapi</Text>
      <TextInput
        placeholder="enter id"
        value={data.id}
        onChangeText={val => handleinput('id', val)}
        style={{
          marginVertical: 10,
          borderBottomColor: '#030303',
          borderWidth: 1,
        }}
      />
      <TextInput
        placeholder="enter name"
        value={data.name}
        onChangeText={val => handleinput('name', val)}
        style={{
          marginVertical: 10,
          borderBottomColor: '#030303',
          borderWidth: 1,
        }}
      />
      <TextInput
        placeholder="enter email"
        value={data.email}
        onChangeText={val => handleinput('email', val)}
        style={{
          marginVertical: 10,
          borderBottomColor: '#030303',
          borderWidth: 1,
        }}
      />
      <Button title="submit" onPress={handlesubmit} />
    </View>
  );
};

export default Postapi;

const styles = StyleSheet.create({});
