import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAuth, fetchAuthMe, fetchRegister } from './asyncActions';

const initialState = {
	data: null,
	status: 'loading',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.data = null;
		},
	},
	//описание ассинхронного экшена
	extraReducers: (builder) => {
		//
		builder.addCase(fetchAuth.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});

		builder.addCase(fetchAuth.fulfilled, (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		});

		builder.addCase(fetchAuth.rejected, (state) => {
			state.status = 'error';
			state.data = null;
		});

		//на проверку авторизации

		builder.addCase(fetchAuthMe.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});

		builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		});

		builder.addCase(fetchAuthMe.rejected, (state) => {
			state.status = 'error';
			state.data = null;
		});

		//на регистрацию

		builder.addCase(fetchRegister.pending, (state) => {
			state.status = 'loading';
			state.data = null;
		});

		builder.addCase(fetchRegister.fulfilled, (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		});

		builder.addCase(fetchRegister.rejected, (state) => {
			state.status = 'error';
			state.data = null;
		});
	},
});

//авторизован ли пользователь
//export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
