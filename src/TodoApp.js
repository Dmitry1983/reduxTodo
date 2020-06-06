import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AddTodo from './containers/AddTodo'

export const TodoApp = () => {
	return (
		<View style={styles.container}>
			<AddTodo />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		alignItems: 'center',
		backgroundColor: 'white',
	},
})
