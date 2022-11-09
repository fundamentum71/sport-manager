import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { SignInProps } from '../../pages/SignIn/SignIn';
import { SignUpProps } from '../../pages/SignUp/SignUp';

//запрос на авторизацию
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: SignInProps) => {
	const { data } = await axios.post('/auth/login', params);
	return data;
});

//запрос на проверку авторизации
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
	const { data } = await axios.get('/auth/me');
	return data;
});

//запрос на регистрацию
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params: SignUpProps) => {
	const { data } = await axios.post('/auth/register', params);
	return data;
});
