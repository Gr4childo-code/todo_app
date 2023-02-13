import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let getTodoLocal = JSON.parse(localStorage.getItem('TODOS'));
console.log(getTodoLocal);
root.render(
	<React.StrictMode>
		<App getTodoLocal={getTodoLocal} />
	</React.StrictMode>
);
