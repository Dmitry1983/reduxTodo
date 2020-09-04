import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import AddTodo from './containers/AddTodo'

export const TodoApp = () => {
	return (
		<SafeAreaView style={styles.container}>
			<AddTodo />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		alignItems: 'center',
		backgroundColor: 'grey',
	},
})
