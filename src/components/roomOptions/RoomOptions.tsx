import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from './roomOptions.module.scss';
import { Link } from 'react-router-dom';

function RoomOptions() {
	return (
		<>
			<h2>Футболисты</h2>
			<Link to="/addroom">
				<button className={styles.btn_edit}>
					<EditIcon />
				</button>
			</Link>

			<div className={styles.option}>Вид спорта: Футбол</div>
			<div className={styles.option}>Дата: 23.04.22</div>
			<div className={styles.option}>Время: 15:15</div>
			<div className={styles.option}>Создал комнату: Пупкин С.И.</div>
			<div className={styles.option}>Площадка: набережная</div>

			<div className={styles.btns}>
				<button className={styles.btn}>Приду играть</button>
				<button className={styles.btn_exit}>Не приду</button>
			</div>
		</>
	);
}

export default RoomOptions;
