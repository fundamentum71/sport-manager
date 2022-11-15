export type roomSchema = {
	_id: string;
	title: string;
	preferredSport: string;
	time: string;
	date: string;
	place: string;
};

export interface roomsSliceState {
	items: roomSchema[] | [];
	status: string;
}
