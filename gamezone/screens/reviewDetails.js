import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// Styles
import { globalStyles, images } from '../styles/global';
// Components
import Card from '../shared/card';

const ReviewDetails = ({ route, navigation }) => {

	const { title, rating, body } = route.params;

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{title}</Text>
				<Text>{body}</Text>
				<View style={styles.rating}>
					<Text>GameZone rating: </Text>
					<Image source={ images.ratings[rating] } />
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	rating: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: '#eee'
	}
})

export default ReviewDetails;