import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { roomsReducer } from './room/slice';
import { usersReducer } from './users/slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		rooms: roomsReducer,
		users: usersReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
