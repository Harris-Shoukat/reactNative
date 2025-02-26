import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.textmodal}>Hello from Modal</Text>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textbtn}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.btnview}>
        <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      </View>
    </SafeAreaView>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Adds a dimmed background effect
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  textmodal: {
    fontSize: 20,
    marginBottom: 20,
  },
  btnview: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  modalbtn: {
    textAlign: 'center',
    padding: 10,
    paddingHorizontal: 18,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#2e86c1',
    color: '#fff',
  },
  textbtn: {
    color: '#fff',
  },
});
