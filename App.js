import React from 'react'
import { Provider } from 'react-redux'
import { TodoApp } from './src/TodoApp'
import store from './src/redux/store'

const App = () => {
	return (
		<Provider store={store}>
			<TodoApp />
		</Provider>
	)
}

export default App
