import { createSlice } from '@reduxjs/toolkit';
import { fetchRemoveRooms, fetchRooms } from './asyncActions';
import { roomsSliceState } from './types';

const initialState: roomsSliceState = {
	items: [],
	status: 'loading',
};

const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {},
	//описание ассинхронного экшена
	extraReducers: (builder) => {
		// получение комнат
		builder.addCase(fetchRooms.pending, (state) => {
			state.items = [];
			state.status = 'loading';
		});

		builder.addCase(fetchRooms.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'loaded';
		});

		builder.addCase(fetchRooms.rejected, (state) => {
			state.items = [];
			state.status = 'error';
		});

		//удаление комнаты
		builder.addCase(fetchRemoveRooms.pending, (state, action) => {
			state.items = state.items.filter((obj) => obj._id !== action.meta.arg);
			state.status = 'loading';
		});

		builder.addCase(fetchRemoveRooms.fulfilled, (state, action) => {
			//state.items = action.payload;
			state.status = 'loaded';
		});
	},
});

export const roomsReducer = roomsSlice.reducer;
