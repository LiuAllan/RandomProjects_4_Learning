import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
// Components
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

const App = () => {

  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play games', key: '3' },
    { text: 'ayy lmao', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    text.length > 0 ?
      setTodo((prevTodo) => {
        return [
        { text: text, key: Math.random().toString() },
          ...prevTodo,
        ]
      })
      : Alert.alert('OOPS!', 'Todo must be over 3 characters long', [
          {text: 'Understood', onPress: () => console.log('alert box closed')}
        ])
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        <View style={styles.content}>
          {/*TODO Form*/}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todo}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});

export default App;
