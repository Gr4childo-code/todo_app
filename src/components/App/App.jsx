import React from 'react';
import Todo from '../Todo/Todo';
import styles from './App.module.css';
const App = ({ getTodoLocal }) => {
	return (
		<div className={styles.ll}>
			<div className={styles.container}>
				<div className={styles.title}>
					This is my <span>TODO APP</span>
				</div>
			</div>
			<div>
				<Todo getTodoLocal={getTodoLocal} />
			</div>
		</div>
	);
};

export default App;
