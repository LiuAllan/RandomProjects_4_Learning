import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// React Native components
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk'
    },
    {
      id: 2,
      text: 'Eggs'
    },
    {
      id: 3,
      text: 'Bread'
    },
    {
      id: 4,
      text: 'Juice'
    },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {
    // if(!text) {
    //   Alert.alert('Error', 'Please enter an item', { text: 'OK' })
    // }
    // else {
    //   setItems(prevItems => {
    //     return [{ id: Math.random(), text }, ...prevItems]
    //   });
    // }
    setItems(prevItems => {
      return [{ id: Math.random(), text }, ...prevItems]
    });
    
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )} 
      />
      <AddItem addItem={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;