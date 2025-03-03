import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const DeleteApi = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
        const res = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
        Alert.alert('Success','item deleted from dataset');
        console.log(res.data);
        
    } catch (error) {
        Alert.alert('error','there is a error')
    }
  }

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 10}}>
        DeleteApi
      </Text>

      <TextInput
        placeholder="enter id to delete"
        value={id}
        onChangeText={val => setId(val)}
      />

      <Button title='Delete' onPress={handleDelete} />
    </View>
  );
};

export default DeleteApi;
