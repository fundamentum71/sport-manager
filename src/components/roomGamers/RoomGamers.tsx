import { userSchema } from '../../redux/auth/types';
import { RoomGamerItem } from '../roomGamerItem/RoomGamerItem';
//import Spiner from '../../components/Spiner';
//import CircularProgress from '@mui/material/CircularProgress';

type RoomGamersProps = {
	joined: userSchema[] | undefined;
	//isLoadingOption: boolean;
};

const RoomGamers: React.FC<RoomGamersProps> = ({
	joined,
	//isLoadingOption
}) => {
	return (
		<>
			<h2>Список участников (Всего: {joined?.length})</h2>
			<div>
				{joined &&
					joined.map((item) => (
						<RoomGamerItem
							key={item._id}
							fullName={item.fullName}
							email={item.email}
							_id={item._id}
							avatarUrl={item.avatarUrl}
							age={item.age}
							gamesPlayed={item.gamesPlayed}
							gamesLeave={item.gamesLeave}
						/>
					))}
			</div>
		</>
	);
};

export default RoomGamers;
