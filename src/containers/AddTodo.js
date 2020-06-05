import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Alert,
} from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

const borderWidth = 0.2

const AddTodo = () => {
	const dispatch = useDispatch()
	const [text, setText] = useState('')

	const addTodo = str => {
		dispatch({ type: 'ADD_TODO', str })
		setText('')
	}
	return (
		<View style={styles.view}>
			<View style={styles.viewTextInput}>
				<TextInput
					value={text}
					onChangeText={t => setText(t)}
					style={styles.textInput}
					placeholder="Input new text"
					autoCapitalize="words"
				/>
			</View>

			<TouchableOpacity style={styles.butAdd} onPress={() => addTodo(text)}>
				<Text style={styles.btnText}>ADD</Text>
			</TouchableOpacity>
		</View>
	)
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	viewTextInput: {
		borderWidth: borderWidth,
		//borderColor: 'black',
		borderRadius: 10,
		width: '75%',
		marginRight: 15,
		paddingHorizontal: 10,
		backgroundColor: '#F4EFDC',
	},
	textInput: {
		color: '#0b2545',
	},
	butAdd: {
		backgroundColor: '#1e96fc',
		borderWidth: borderWidth,
		width: '15%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	btnText: {
		color: 'white',
	},
})
