import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const Onpress = () => {
  const [name, setName] = useState('harris');

  const updateName = () => {
    setName("harris shoukat")
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>onPress {name}</Text>
      <Button title="press" onPress={updateName} />
    </View>
  );
};

export default Onpress;
