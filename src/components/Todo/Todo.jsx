import React, { createRef, useState } from 'react';
import uuid from 'react-uuid';

import styles from './Todo.module.css';
import TodoList from './TodoList';

const Todo = ({ getTodoLocal }) => {
	const [tasks, setTask] = useState(getTodoLocal);

	const [filter, setFilter] = useState('all');
	const inputNameFormRef = createRef();

	// Start component Form
	const handleClick = (e) => {
		e.preventDefault();

		if (inputNameFormRef.current.value) {
			const newTask = { id: uuid(), title: inputNameFormRef.current.value, checked: false };
			console.log(newTask);
			if (tasks === null) {
				localStorage.setItem('TODOS', JSON.stringify([newTask]));
				setTask([newTask]);
				inputNameFormRef.current.value = '';
			} else {
				localStorage.setItem('TODOS', JSON.stringify([...tasks, newTask]));

				setTask([...tasks, newTask]);
				inputNameFormRef.current.value = '';
			}
		}
	};
	// end

	// start Component TodoItem
	const removeTodo = (id) => {
		localStorage.setItem('TODOS', JSON.stringify([...tasks.filter((todo) => todo.id !== id)]));
		setTask([...tasks.filter((todo) => todo.id !== id)]);
	};
	const changeChecked = (id) => {
		localStorage.setItem(
			'TODOS',
			JSON.stringify([
				...tasks.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
				),
			])
		);

		setTask([
			...tasks.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo })),
		]);
	};
	//  end Component TodoItem

	// start Component Filter
	const changeFilter = (value) => {
		setFilter(value);
	};
	let taskForTodoList = tasks;
	if (filter === 'completed') {
		taskForTodoList = tasks.filter((t) => t.checked === true);
	} else if (filter === 'work') {
		taskForTodoList = tasks.filter((t) => t.checked === false);
	}
	// end Component Filter

	return (
		<div className={styles.container}>
			<TodoList
				TODOS={taskForTodoList}
				removeTodo={removeTodo}
				changeFilter={changeFilter}
				changeChecked={changeChecked}
				handleClick={handleClick}
				inputNameFormRef={inputNameFormRef}
			/>
		</div>
	);
};

export default Todo;
