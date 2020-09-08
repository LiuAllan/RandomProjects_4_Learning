// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
// Components
import Home from './screens/home';
// import * as Font from 'expo-font';

const App = () => {

  let [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Home />
  );

}

export default App;
