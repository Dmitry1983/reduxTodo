import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export const TodoList = ({ todos, toggleTodo }) => {
	return (
		<View>
			{todos.map((todo) => (
				<TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
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
