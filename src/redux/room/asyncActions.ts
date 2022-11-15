import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

//асинхронный запрос на получение комнат
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
	const { data } = await axios.get('/rooms');
	return data;
});

//асинхронный запрос на удаление комнат
export const fetchRemoveRooms = createAsyncThunk('rooms/fetchRemoveRooms', async (id) =>
	axios.delete(`/rooms/${id}`),
);
