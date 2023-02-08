import React, { useState } from 'react';
import styles from './Todo.module.css';
import TodoList from './TodoList';

const Todo = ({ TODOS }) => {
	const [tasks, setTask] = useState(TODOS);
	const [filter, setFilter] = useState('all');

	const removeTodo = (id) => {
		setTask([...tasks.filter((todo) => todo.id !== id)]);
	};

	const changeFilter = (value) => {
		setFilter(value);
	};
	const changeChacked = (id) => {
		setTask([
			...tasks.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo })),
		]);
	};

	let taskForTodoList = tasks;
	if (filter === 'completed') {
		taskForTodoList = tasks.filter((t) => t.checked === true);
	} else if (filter === 'active') {
		taskForTodoList = tasks.filter((t) => t.checked === false);
	}

	return (
		<>
			<div className={styles.container}>
				<TodoList
					TODOS={taskForTodoList}
					removeTodo={removeTodo}
					changeFilter={changeFilter}
					changeChacked={changeChacked}
				/>
			</div>
		</>
	);
};

export default Todo;
