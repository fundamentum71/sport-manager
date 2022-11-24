import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './roomOptions.module.scss';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';
import Spiner from '../../components/Spiner';

type RoomOptionsProperty = {
	_id: string | undefined;
	title: string | undefined;
	preferredSport: string | undefined;
	time: string | undefined;
	date: string | undefined;
	place: string | undefined;
	user: userSchema | undefined;
	isEditable: boolean;
	isGamer: boolean;
	addUserToGame: () => Promise<void>;
	removeUserToGame: () => Promise<void>;
	isLoadingOption: boolean;
};
const RoomOptions: React.FC<RoomOptionsProperty> = ({
	_id,
	title,
	preferredSport,
	time,
	date,
	place,
	user,
	isEditable,
	isGamer,
	addUserToGame,
	removeUserToGame,
	isLoadingOption,
}) => {
	const [allUsersJoined, setAllUsersJoined] = React.useState<userSchema[]>();

	return (
		<>
			<h2>{title}</h2>
			{isEditable && (
				<Link to={`/editroom/${_id}`}>
					<button className={styles.btn_edit}>
						<EditIcon />
					</button>
				</Link>
			)}

			<div className={styles.option}>Вид спорта: {preferredSport}</div>
			<div className={styles.option}>Дата: {date}</div>
			<div className={styles.option}>Время: {time}</div>
			<div className={styles.option}>Создал комнату: {user?.fullName}</div>
			<div className={styles.option}>Площадка: {place}</div>

			<div className={styles.btns}>
				{!isGamer ? (
					<button onClick={() => addUserToGame()} className={styles.btn}>
						Учавствую
					</button>
				) : (
					<button onClick={() => removeUserToGame()} className={styles.btn_exit}>
						Отказаться
					</button>
				)}
			</div>
		</>
	);
};

export default RoomOptions;
