import React from 'react';
import styles from './TodoItem.module.css';
import Button from '../../../Button/';
import { Link } from 'react-router-dom';

const TodoItem = ({ title, id, removeTodo, checked, changeChecked }) => {
	return (
		<div className={styles.container}>
			<span className={checked ? styles.title + ' ' + styles.dashed : styles.title}>{title}</span>
			<div className={styles.action}>
				<Button
					checked={checked}
					text={checked ? 'done' : 'work'}
					onClick={() => {
						changeChecked(id);
					}}
				/>

				<Link to={`/todo_app/${id}`}>
					<Button text={'page'} />
				</Link>

				<Button text={'X'} onClick={() => removeTodo(id)} />
			</div>
		</div>
	);
};

export default TodoItem;
