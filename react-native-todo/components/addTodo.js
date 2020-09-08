import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

const addTodo = ({ submitHandler }) => {
	const [text, setText] = useState('');

	const changeHandler = (value) => {
		setText(value);
	}

	const clearInput = () => {
		submitHandler(text);
		Keyboard.dismiss();
		setText('')
	}

	return (
		<View>
			<TextInput 
				placeholder='Add Todo...'
				onChangeText={changeHandler}
				style={styles.input}
				value={text}
			/>
			<Button 
				onPress={clearInput}
				title='Add'
				color='coral'
			/>
		</View>
	);
}



const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	}
});

export default addTodo;