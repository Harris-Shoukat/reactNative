import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('Counter is already 0');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.textview}>
        <Text style={styles.Text}>Nuclear Counter</Text>
      </View>

      <View style={styles.scoreviewContainer}>
        <View style={styles.scoreview}>
          <Text style={{fontSize: 40, color: 'white'}}>{counter}</Text>
        </View>
      </View>

      <View style={styles.btnview}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.actionbtn}
          onPress={() => setCounter(counter + 1)}>
          <Text style={{fontSize: 30, color: 'white'}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.actionbtn}
          onPress={handleMinus}>
          <Text style={{fontSize: 40, color: 'white'}}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textview: {
    backgroundColor: 'lightgrey',
    paddingVertical: 30,
    alignItems: 'center',
  },
  Text: {
    fontSize: 30,
    fontWeight: 'medium',
    fontFamily: 'serif',
  },
  scoreviewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  scoreview: {
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#123456',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 50,
    backgroundColor: 'lightgrey',
  },
  actionbtn: {
    width: 100,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#123456',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
