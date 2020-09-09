import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({navigation}) => {

	// Test data
	const [reviews, setReviews] = useState([
		{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'drgrgdrg', key: '1' },
		{ title: 'Zelda', rating: 8, body: 'drgrgdrdfbg', key: '2' },
		{ title: 'Fresh Air', rating: 1, body: 'drgrgdfg4drg', key: '3' },
	]);

	return (
		<View style={globalStyles.container}>
			<FlatList 
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
						<Text style={globalStyles.titleText}>{ item.title }</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

export default Home;