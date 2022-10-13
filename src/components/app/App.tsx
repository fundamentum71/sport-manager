import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';
import StartPage from '../../pages/StartPage';
import styles from './app.module.scss';

const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFound'*/ '../../pages/NotFound'));
const SignIn = React.lazy(() => import(/* webpackChunkName: 'SignIn'*/ '../../pages/SignIn'));
const SignUp = React.lazy(() => import(/* webpackChunkName: 'SignUp'*/ '../../pages/SignUp'));

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route
					path="*"
					element={
						<Suspense>
							<NotFound />
						</Suspense>
					}
				/>
				<Route
					path="/start"
					element={
						<Suspense fallback={<div>Загрузка...</div>}>
							<StartPage />
						</Suspense>
					}
				/>
				<Route
					path="/signin"
					element={
						<Suspense fallback={<div>Загрузка...</div>}>
							<SignIn />
						</Suspense>
					}
				/>

				<Route
					path="/signup"
					element={
						<Suspense fallback={<div>Загрузка...</div>}>
							<SignUp />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
