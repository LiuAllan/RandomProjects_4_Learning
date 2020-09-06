import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
  // const [name, setName] = useState('Allan');
  // const [person, setPerson] = useState({
  //   name: 'Mario',
  //   age: 40
  // });

  // const handlePress = () => {
  //   setName('Chun-li');
  //   setPerson({
  //     name: 'Luigi',
  //     age: 45
  //   });
  // }

  const [people, setPeople] = useState([
      { name: 'shaun', id: '1' },
      { name: 'test', id: '2' },
      { name: 'mark', id: '3' },
      { name: 'ben', id: '4' },
      { name: 'ben', id: '5' },
      { name: 'ben', id: '6' },
      { name: 'ben', id: '7' },
    ])

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/*<ScrollView>
      { people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>
              {item.name}
            </Text>
          </View>
      ))}
      </ScrollView>*/}

      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>
                {item.name}
            </Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});

export default App;
