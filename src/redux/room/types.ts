import { userSchema } from '../auth/types';

export type roomSchema = {
	_id: string;
	title: string;
	preferredSport: string;
	time: string;
	date: string;
	place: string;
	user: userSchema;
	isLoading?: boolean;
};

export interface roomsSliceState {
	items: roomSchema[] | [];
	status: string;
}
