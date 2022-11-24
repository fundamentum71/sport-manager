import { userSchema } from '../../redux/auth/types';

type RoomGamersProps = {
	joined: userSchema[] | undefined;
	isLoadingOption: boolean;
};

const RoomGamers: React.FC<RoomGamersProps> = ({ joined, isLoadingOption }) => {
	return (
		<>
			{!isLoadingOption && (
				<>
					<h2>Список участников (Всего: {joined?.length})</h2>
					<div>
						{joined ? joined.map((item) => <p key={item._id}>{item?.fullName}</p>) : 'Список пуст'}
					</div>
				</>
			)}
		</>
	);
};

export default RoomGamers;
