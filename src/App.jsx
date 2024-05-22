import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { BanknoteDataProvider } from './services/Context';

import './scss/index.scss';

// Components
import Home from './components/Home';
import LocaleSwitcher from './components/LocaleSwitcher';

function App() {
	const { i18n } = useTranslation();

	return (
		<Router>
			<BanknoteDataProvider>
				<LocaleSwitcher lang={i18n.language} />
				<main className="container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</main>
			</BanknoteDataProvider>
		</Router>
	);
}

export default App;
