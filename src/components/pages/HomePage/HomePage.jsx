import React from 'react';
import Todo from '../../Todo/Todo';
import styles from './HomePage.module.css';

const HomePage = ({ getTodoLocal }) => {
	return (
		<div>
			<>
				<div className={styles.container}>
					<div className={styles.title}>
						This is my <span>TODO APP</span>
					</div>
				</div>
				<Todo getTodoLocal={getTodoLocal} />
			</>
		</div>
	);
};

export default HomePage;
