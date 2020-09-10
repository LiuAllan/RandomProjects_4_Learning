import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
// Styles
import { globalStyles } from '../styles/global';
// Components
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({navigation}) => {

	const [modalOpen, setModalOpen] = useState(false);

	// Test data
	const [reviews, setReviews] = useState([
		{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'drgrgdrg', key: '1' },
		{ title: 'Zelda', rating: 3, body: 'drgrgdrdfbg', key: '2' },
		{ title: 'Fresh Air', rating: 1, body: 'drgrgdfg4drg', key: '3' },
	]);

	return (
		<View style={globalStyles.container}>

			<Modal visible={modalOpen} animationType='slide'>
				<View style={styles.modalContent}>
					<MaterialIcons 
						name='close'
						size={24}
						onPress={() => setModalOpen(false)}
						style={{...styles.modalToggle, ...styles.modalClose}}
					/>
					<Text>Hello from the modal</Text>
				</View>
			</Modal>

			<MaterialIcons 
				name='add'
				size={24}
				onPress={() => setModalOpen(true)}
				style={styles.modalToggle}
			/>

			<FlatList 
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
						<Card>
							<Text style={globalStyles.titleText}>{ item.title }</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center'
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	}
})