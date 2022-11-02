import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import AddRoom from '../../pages/AddRoom/AddRoom';
import EditProfile from '../../pages/EditProfile/EditProfile';
import EditRoom from '../../pages/EditRoom/EditRoom';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Room from '../../pages/Room/Room';
import StartPage from '../../pages/StartPage/StartPage';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './app.module.scss';

const NotFound = React.lazy(
	() => import(/* webpackChunkName: 'NotFound'*/ '../../pages/NotFound/NotFound'),
);
const SignIn = React.lazy(
	() => import(/* webpackChunkName: 'SignIn'*/ '../../pages/SignIn/SignIn'),
);
const SignUp = React.lazy(
	() => import(/* webpackChunkName: 'SignUp'*/ '../../pages/SignUp/SignUp'),
);

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route
					path=""
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<Home />
						</Suspense>
					}
				/>

				<Route
					path="*"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<NotFound />
						</Suspense>
					}
				/>

				{/*<Route
					path="/editProfile"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<EditProfile />
						</Suspense>
					}
				/>*/}

				<Route
					path="/addroom"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<AddRoom />
						</Suspense>
					}
				/>

				<Route
					path="/editroom"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<EditRoom />
						</Suspense>
					}
				/>

				<Route
					path="/room"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<Room />
						</Suspense>
					}
				/>

				<Route
					path="/start"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<StartPage />
						</Suspense>
					}
				/>
				<Route
					path="/profile"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<Profile />
						</Suspense>
					}
				/>
				<Route
					path="/signin"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<SignIn />
						</Suspense>
					}
				/>

				<Route
					path="/signup"
					element={
						<Suspense fallback={<CircularProgress color="secondary" />}>
							<SignUp />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
