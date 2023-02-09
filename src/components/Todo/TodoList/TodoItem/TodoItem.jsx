import React from 'react';
import styles from './TodoItem.module.css';
import Button from '../../../Button/';
const TodoItem = ({ title, id, removeTodo, checked, changeChacked }) => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>{title}</span>
			<div className={styles.action}>
				<Button
					checked={checked}
					text={checked ? 'done' : 'work'}
					onClick={() => {
						changeChacked(id);
					}}
				/>
				<Button text={'settings'} />
				<Button text={'X'} onClick={() => removeTodo(id)} />
			</div>
		</div>
	);
};

export default TodoItem;
