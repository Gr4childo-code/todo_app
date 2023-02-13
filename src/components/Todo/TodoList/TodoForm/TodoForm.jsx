import React from 'react';
import Button from '../../../Button';
import styles from './TodoForm.module.css';
const TodoForm = ({ handleClick, inputNameFormRef }) => {
	return (
		<div className={styles.form}>
			<form action=''>
				<div className={styles.form_item}>
					<label htmlFor=''>Название задачи: </label>
					<input
						type='text'
						className={styles.input}
						placeholder='Введите название задачи'
						name='taskName'
						ref={inputNameFormRef}
					/>

					<Button type='submit' text='+' onClick={handleClick} />
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
