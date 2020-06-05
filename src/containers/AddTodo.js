import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Alert,
} from 'react-native'

export const AddTodo = () => {
	return (
		<View style={styles.view}>
			<View style={styles.viewTextInput}>
				<TextInput
					style={styles.textInput}
					placeholder="Input new text"
					autoCapitalize="words"
				/>
			</View>

			<TouchableOpacity
				style={styles.butAdd}
				onPress={() => Alert.alert('Add todo')}
			>
				<Text style={styles.btnText}>ADD</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	viewTextInput: {
		//borderWidth: 1,
		//borderColor: 'black',
		borderRadius: 10,
		width: '75%',
		marginRight: 15,
		paddingHorizontal: 10,
		backgroundColor: '#a2d6f9',
	},
	textInput: {
		color: '#0b2545',
	},
	butAdd: {
		backgroundColor: '#1e96fc',
		width: '15%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	btnText: {
		color: 'white',
	},
})
