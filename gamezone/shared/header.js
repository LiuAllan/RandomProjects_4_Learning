import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {

	const openDrawer = () => {
		navigation.openDrawer();
	}

	return (
		<ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
			<MaterialIcons name='menu' size={28} onPress={openDrawer} style={styles.icon} />
			<View style={styles.headerTitle}>
				<Image source={require('../assets/images/heart_logo.png')} style={styles.headerLogo}/>
				<Text style={styles.headerText}>{ title }</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
	icon: {
		position: 'absolute',
		left: 16,
	},
	headerLogo: {
		width: 26,
		height: 26,
		marginHorizontal: 10
	},
	headerTitle: {
		flexDirection: 'row',
	}
})

export default Header;