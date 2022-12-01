import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './asyncActions';
import { usersSliceState } from './types';

type initialStateType = {
	items: usersSliceState[] | [];
	status: string;
};

const initialState: initialStateType = {
	items: [],
	status: 'loading',
};

const usersSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {},
	//описание ассинхронного экшена
	extraReducers: (builder) => {
		// получение всех пользователей
		builder.addCase(fetchUsers.pending, (state) => {
			state.items = [];
			state.status = 'loading';
		});

		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'loaded';
		});

		builder.addCase(fetchUsers.rejected, (state) => {
			state.items = [];
			state.status = 'error';
		});
	},
});

export const usersReducer = usersSlice.reducer;
