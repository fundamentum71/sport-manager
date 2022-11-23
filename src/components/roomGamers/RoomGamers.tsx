import { userSchema } from '../../redux/auth/types';

type RoomGamersProps = {
	joined: userSchema[] | undefined;
};

const RoomGamers: React.FC<RoomGamersProps> = ({ joined }) => {
	return (
		<>
			<h2>Список участников (Всего: {joined?.length})</h2>
			{joined ? joined.map((item) => <p key={item._id}>{item?.fullName}</p>) : 'Список пуст'}
		</>
	);
};

export default RoomGamers;
