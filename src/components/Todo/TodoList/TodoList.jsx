import React from 'react';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem/TodoItem';
import TodoForm from './TodoForm';
import styles from './TodoList.module.css';

const TodoList = ({
	TODOS,
	removeTodo,
	changeFilter,
	changeChecked,
	handleClick,
	inputNameFormRef,
}) => {
	return (
		<>
			<div className={styles.container}>
				<TodoFilter changeFilter={changeFilter} />

				<TodoForm handleClick={handleClick} inputNameFormRef={inputNameFormRef} />
				<div className={styles.container}>
					{TODOS.map((i) => (
						<TodoItem
							key={i.id}
							id={i.id}
							title={i.title}
							checked={i.checked}
							removeTodo={removeTodo}
							changeChecked={changeChecked}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default TodoList;
