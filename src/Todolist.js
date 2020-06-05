import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const TodoList = ({ todos, toogleTodo }) => {
	return (
		<View>
			{todos.map(todo => (
				<TouchableOpacity key={todo.id} onPress={() => toogleTodo(todo.id)}>
					<Text
						style={{
							fontSize: 24,
							textDecorationLine: todo.complited ? 'line-through' : 'none',
						}}
					>
						{todo.text}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({})
