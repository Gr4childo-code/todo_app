import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';
import Button from '../../Button';

const TodoList = ({ TODOS, removeTodo, changeFilter, changeChacked }) => {
	return (
		<div className={styles.container}>
			<div className={styles.filter}>
				<Button text={'all'} onClick={() => changeFilter('all')} />
				<Button text={'completed'} onClick={() => changeFilter('completed')} />
				<Button text={'active'} onClick={() => changeFilter('active')} />
			</div>
			{TODOS.map((i) => (
				<TodoItem
					key={i.id}
					id={i.id}
					title={i.title}
					checked={i.checked}
					removeTodo={removeTodo}
					changeChacked={changeChacked}
				/>
			))}
		</div>
	);
};

export default TodoList;
