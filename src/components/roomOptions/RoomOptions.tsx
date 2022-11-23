import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './roomOptions.module.scss';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';
import axios from '../../axios';

type upRoomProps = {
	title: string | undefined;
	preferredSport: string | undefined;
	date: string | undefined;
	time: string | undefined;
	place: string | undefined;
	joined: userSchema[] | null;
};

type RoomOptionsProperty = {
	_id: string | undefined;
	title: string | undefined;
	preferredSport: string | undefined;
	time: string | undefined;
	date: string | undefined;
	place: string | undefined;
	user: userSchema | undefined;
	isEditable: boolean;
	userInRoom: userSchema | null;
	allJoined: userSchema[];
	isGamer: boolean;
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
	userInRoom,
	allJoined,
	isGamer,
}) => {
	const [allUsersJoined, setAllUsersJoined] = React.useState<userSchema[]>();

	//React.useEffect(() => {
	//	setAllUsersJoined(allJoined);
	//	console.log(allUsersJoined);
	//}, [allJoined]);

	const addUserToGame = async () => {
		if (userInRoom) {
			allJoined.push(userInRoom);
		}
		const editRoomData: upRoomProps = {
			title,
			preferredSport,
			date,
			time,
			place,
			joined: allJoined,
		};

		await axios
			.patch(`/rooms/${_id}`, editRoomData)

			.catch((err) => {
				console.warn(err);
				alert('Ошибка при присоединении к комнате');
			})
			.finally(() => {
				//setIsLoading(false);
			});
	};

	const removeUserToGame = async () => {
		if (userInRoom) {
			//allJoined.push(userInRoom);
		}
		const editRoomData: upRoomProps = {
			title,
			preferredSport,
			date,
			time,
			place,
			joined: allJoined.filter((obj) => obj._id !== userInRoom?._id),
		};

		await axios
			.patch(`/rooms/${_id}`, editRoomData)

			.catch((err) => {
				console.warn(err);
				alert('Ошибка при выходе из комнаты');
			})
			.finally(() => {
				//setIsLoading(false);
			});
	};

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
					<button onClick={addUserToGame} className={styles.btn}>
						Учавствую
					</button>
				) : (
					<button onClick={removeUserToGame} className={styles.btn_exit}>
						Отказаться
					</button>
				)}
			</div>
		</>
	);
};

export default RoomOptions;
