import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const data = [
  {id: 1, name: 'Hammad', age: 22},
  {id: 2, name: 'Ali', age: 23},
  {id: 3, name: 'Ahmed', age: 24},
  {id: 4, name: 'Khan', age: 25},
  {id: 5, name: 'Bilal', age: 26},
  {id: 6, name: 'Zain', age: 27},
  {id: 7, name: 'Farhan', age: 28},
  {id: 8, name: 'Usman', age: 29},
  {id: 9, name: 'Tariq', age: 30},
  {id: 10, name: 'Saad', age: 31},
  {id: 11, name: 'Omer', age: 32},
  {id: 12, name: 'Imran', age: 33},
  {id: 13, name: 'Rizwan', age: 34},
  {id: 14, name: 'Danish', age: 35},
  {id: 15, name: 'Asif', age: 36},
  {id: 16, name: 'Fahad', age: 37},
  {id: 17, name: 'Naveed', age: 38},
  {id: 18, name: 'Shahid', age: 39},
  {id: 19, name: 'Adnan', age: 40},
  {id: 20, name: 'Yasir', age: 41},
  {id: 21, name: 'Jawad', age: 42},
  {id: 22, name: 'Waqas', age: 43},
  {id: 23, name: 'Salman', age: 44},
  {id: 24, name: 'Hassan', age: 45},
  {id: 25, name: 'Shahrukh', age: 46},
];

const Flatlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FlatList</Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.age}</Text>
            </View>
          )}
          
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    height: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#fae5d3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 10,
    marginVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Flatlist;
