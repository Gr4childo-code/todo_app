import React from 'react';
import Button from '../../../Button';
import itemstyles from '../TodoList.module.css';
const TodoFilter = ({ changeFilter }) => {
	return (
		<div className={itemstyles.filter}>
			<Button text={'all'} onClick={() => changeFilter('all')} />
			<Button text={'work'} onClick={() => changeFilter('work')} />
			<Button text={'completed'} onClick={() => changeFilter('completed')} />
		</div>
	);
};

export default TodoFilter;
