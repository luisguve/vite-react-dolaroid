import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/i18n';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback="loading">
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
);
