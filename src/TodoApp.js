import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TodoApp = () => {
	return (
		<View style={styles.container}>
			<Text>TodoApp</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
})
