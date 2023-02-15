import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TodoPage from '../pages/TodoPage';

const App = ({ getTodoLocal }) => {
	return (
		<>
			{/* <HomePage getTodoLocal={getTodoLocal} /> */}
			<Routes>
				<Route path='/' element={<HomePage getTodoLocal={getTodoLocal} />} />
				<Route path='/todo_app/*' element={<HomePage getTodoLocal={getTodoLocal} />} />
				<Route path='/todo_app/:todoID' element={<TodoPage />} />
			</Routes>
		</>
	);
};

export default App;
