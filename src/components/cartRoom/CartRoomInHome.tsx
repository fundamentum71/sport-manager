import React from 'react';
import styles from './cartRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import { roomSchema } from '../../redux/room/types';

const CartRoomInHome = ({ _id, title, preferredSport, time, date, place, isLoading }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				<h2>Название комнаты</h2>
				<div className={styles.item}>
					<b>Создал комнату:</b> Пупкин В.С.
				</div>
				<div className={styles.item}>
					<b>Вид спорта:</b> Баскетбол
				</div>
				<div className={styles.item}>
					<b>К-во присоединившихся:</b> 10
				</div>

				<div className={styles.item}>
					<b>Площадка:</b> Площадка на Набережной
				</div>
				<div className={styles.item}>
					<b>Дата:</b> 03.04.2022
				</div>
				<div className={styles.item}>
					<b>Время:</b> 14:00
				</div>
			</div>
			<div className={styles.btns}>
				<Link to="/room">
					<button className={styles.btn}>Войти в комнату</button>
				</Link>
				<Link to="/addroom">
					<button className={styles.btn_edit}>
						<EditIcon />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CartRoomInHome;
