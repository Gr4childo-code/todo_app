import React from 'react';
import styles from './TodoItem.module.css';
import Button from '../../../Button/';
const TodoItem = ({ title, id, removeTodo, checked, changeChacked }) => {
	return (
		<div className={styles.container}>
			<span>{title}</span>
			<div className={styles.action}>
				<Button
					text={'check'}
					checked={checked}
					onClick={() => {
						changeChacked(id);
					}}
				/>
				<Button text={'settings'} />
				<Button text={'delete'} onClick={() => removeTodo(id)} />
			</div>
		</div>
	);
};

export default TodoItem;
