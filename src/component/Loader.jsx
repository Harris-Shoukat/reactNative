import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="rgba(0,0,0,0.3)"
        hidden={false}
        translucent={false}
      />
      {loading && <ActivityIndicator size="large" color="#007bff" />}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setLoading(!loading)}>
        <Text style={styles.buttonText}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200Fe',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
