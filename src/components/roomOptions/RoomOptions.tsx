import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './roomOptions.module.scss';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';

type RoomOptionsProperty = {
	_id: string | undefined;
	title: string | undefined;
	preferredSport: string | undefined;
	time: string | undefined;
	date: string | undefined;
	place: string | undefined;
	user: userSchema | undefined;
	isEditable: boolean;
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
}) => {
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
				<button className={styles.btn}>Учавствую</button>
				<button className={styles.btn_exit}>Отказаться</button>
			</div>
		</>
	);
};

export default RoomOptions;
