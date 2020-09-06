import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
// Components
import Header from './components/header';

const App = () => {

  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play games', key: '3' },
    { text: 'ayy lmao', key: '4' },
  ]);

  return (
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        {/*TODO Form*/}
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
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
