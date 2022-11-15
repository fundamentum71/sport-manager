import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './roomOptions.module.scss';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';

type RoomOptionsProperty = {
	title: string | undefined;
	preferredSport: string | undefined;
	time: string | undefined;
	date: string | undefined;
	place: string | undefined;
	user: userSchema | undefined;
};
const RoomOptions: React.FC<RoomOptionsProperty> = ({
	title,
	preferredSport,
	time,
	date,
	place,
	user,
}) => {
	return (
		<>
			<h2>{title}</h2>
			<Link to="/addroom">
				<button className={styles.btn_edit}>
					<EditIcon />
				</button>
			</Link>

			<div className={styles.option}>Вид спорта: {preferredSport}</div>
			<div className={styles.option}>Дата: {date}</div>
			<div className={styles.option}>Время: {time}</div>
			<div className={styles.option}>Создал комнату: {user?.fullName}</div>
			<div className={styles.option}>Площадка: {place}</div>

			<div className={styles.btns}>
				<button className={styles.btn}>Учавствую</button>
				<button className={styles.btn_exit}>Отказаться</button>
			</div>
		</>
	);
};

export default RoomOptions;
