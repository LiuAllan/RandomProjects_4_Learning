import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Stacks
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeStack} />
				<Drawer.Screen name="About" component={AboutStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default DrawerNavigation;