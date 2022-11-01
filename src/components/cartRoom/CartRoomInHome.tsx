import React from 'react';
import styles from './cartRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const CartRoomInHome = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				<div className={styles.item}>
					<b>Название комнаты:</b> конченные футболисты
				</div>
				<div className={styles.item}>
					<b>Создал комнату:</b> Пупкин В.С.
				</div>
				<div className={styles.item}>
					<b>Вид спорта:</b> Баскетбол
				</div>
				<div className={styles.item}>
					<b>Колличество присоединившихся:</b> 10
				</div>
				<div className={styles.item}>
					<b>Время:</b> 14:00
				</div>
				<div className={styles.item}>
					<b>Площадка:</b> Площадка на Набережной
				</div>
			</div>
			<div className={styles.btns}>
				<Link to="/room">
					<button className={styles.btn}>Войти в комнату</button>
				</Link>
				<Link to="/editroom">
					<button className={styles.btn_edit}>
						<EditIcon />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CartRoomInHome;
