import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, ...props }) => {
	return (
		<>
			{props.hasOwnProperty('checked') ? (
				<button
					className={
						props.checked ? styles.button + ' ' + styles.active : styles.button + ' ' + styles.false
					}
					{...props}>
					{text}
				</button>
			) : text === 'X' ? (
				<button className={styles.button + ' ' + styles.delete} {...props}>
					{text}
				</button>
			) : (
				<button className={styles.button} {...props}>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
