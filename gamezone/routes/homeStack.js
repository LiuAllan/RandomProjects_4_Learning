import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// Screens
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
// Components
import Header from '../shared/header';

const Stack = createStackNavigator();

// Top screen is the bottom of the stack - is the first thing that shows on app launch
const HomeStack = ({ navigation }) => (
	//<NavigationContainer>
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
				name="Home"
				component={Home}
				options={{ 
					header: () => <Header navigation={navigation} title='GameZone'/>
				}} 
			/>
			<Stack.Screen 
				name="Details" 
				component={ReviewDetails} 
				options={{ 
					title: 'Review Details', 
				}}
			/>
		</Stack.Navigator>
	//</NavigationContainer>
);

export default HomeStack;



