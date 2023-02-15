import React from 'react';
import { useParams } from 'react-router-dom';

const TodoPage = ({ getTodoLocal }) => {
	const { todoID } = useParams();
	const task1 = getTodoLocal.filter((todo) => todo.id === todoID);
	console.log(task1);
	return (
		<div>
			{task1.map((i) => (
				<div key={i.id}>
					<p>{i.title}</p>
					<p>{i.checked + ''}</p>
				</div>
			))}
		</div>
	);
};

export default TodoPage;
