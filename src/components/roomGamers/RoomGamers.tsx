import { userSchema } from '../../redux/auth/types';
import Spiner from '../../components/Spiner';

type RoomGamersProps = {
	joined: userSchema[] | undefined;
	isLoadingOption: boolean;
};

const RoomGamers: React.FC<RoomGamersProps> = ({ joined, isLoadingOption }) => {
	return (
		<>
			{isLoadingOption ? (
				<Spiner />
			) : (
				<>
					<h2>Список участников (Всего: {joined?.length})</h2>
					<div>
						{joined
							? joined.map((item) => <div key={item._id}>{item?.fullName}</div>)
							: 'Список пуст'}
					</div>
				</>
			)}
		</>
	);
};

export default RoomGamers;
