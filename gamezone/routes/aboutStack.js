import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// Screens
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
// Components
import Header from '../shared/header';

const Stack = createStackNavigator();

// Top screen is the bottom of the stack - is the first thing that shows on app launch
const AboutStack = ({navigation}) => (
		<Stack.Navigator screenOptions={{
			headerStyle: { 
				backgroundColor: '#eee',
				height: 80,
			},
			headerTintColor: '#444',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}>
			<Stack.Screen 
				name="About"
				component={About}
				options={{ 
					headerTitle: () => <Header navigation={navigation} title='About GameZone' />
					// headerStyle: { backgroundColor: '#eee'}
				}} 
			/>
		</Stack.Navigator>
);

export default AboutStack;



