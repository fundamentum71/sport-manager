import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

//асинхронный запрос на получение всех пользователей
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const { data } = await axios.get('/users');
	return data;
});
