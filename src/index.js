import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let getTodoLocal = JSON.parse(localStorage.getItem('TODOS'));

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App getTodoLocal={getTodoLocal} />
		</React.StrictMode>
	</BrowserRouter>
);
