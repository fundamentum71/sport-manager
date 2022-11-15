import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { roomsReducer } from './room/slice';
//import formReducer from './form/slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		rooms: roomsReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
