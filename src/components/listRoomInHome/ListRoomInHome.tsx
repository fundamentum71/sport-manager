import React from 'react';
import { Link } from 'react-router-dom';
import styles from './listRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';

const ListRoomInHome = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				<div className={styles.item}>
					<b>Название комнаты:</b> <p>Баскетбол форева</p>
				</div>
				<div className={styles.item}>
					<b>Создал комнату:</b> <p>Александр Кучеров</p>
				</div>
				<div className={styles.item}>
					<b>Вид спорта:</b> <p>Баскетболл</p>
				</div>
				<div className={styles.item}>
					<b>Колличество участников:</b> <p>22</p>
				</div>

				<div className={styles.item}>
					<b>Площадка:</b> <p>Старый торг</p>
					{/*{place}*/}
				</div>
				<div className={styles.item}>
					<b>Дата:</b> <p>22.22.2023</p>
				</div>
				<div className={styles.item}>
					<b>Время:</b> <p>15.15</p>
				</div>
			</div>
			<div className={styles.btns}>
				<button className={styles.btn}>Войти в комнату</button>

				<Link to="/addroom">
					<button className={styles.btn_edit}>
						<EditIcon />
					</button>
				</Link>
			</div>
			<div className={styles.dateCreated}>Дата создания комнаты: 15.15.23 15.15.48</div>
		</div>
	);
};

export default ListRoomInHome;
