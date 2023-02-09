import React from 'react';
import Button from '../../../Button';
import styles from './TodoForm.module.css';
const TodoForm = () => {
	return (
		<div className={styles.form}>
			<form action=''>
				<div className={styles.form_item}>
					<label htmlFor=''>Название задачи: </label>
					<input type='text' className={styles.input} />

					<Button type='submit' text='+' />
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
