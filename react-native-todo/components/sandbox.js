import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Sandbox = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>one</Text>
			<Text style={styles.boxTwo}>two</Text>
		</View>
	)
}

export default Sandbox;

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		backgroundColor: '#ddd',
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start'
	},
	boxOne: {
		backgroundColor: 'violet',
		padding: 20,
		flex: 1,
	},
	boxTwo: {
		backgroundColor: 'gold',
		padding: 30,
		flex: 5,
	}
})