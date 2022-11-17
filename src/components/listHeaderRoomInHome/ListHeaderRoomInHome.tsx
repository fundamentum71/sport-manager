import React from 'react';
import styles from './listHeaderRoomInHome.module.scss';

const ListHeaderRoomInHome = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				<div className={styles.item}>
					<b>Название комнаты:</b>{' '}
				</div>
				<div className={styles.item}>
					<b>Создал комнату:</b>
				</div>
				<div className={styles.item}>
					<b>Вид спорта:</b>
				</div>
				<div className={styles.item}>
					<b>Колличество участников:</b>
				</div>

				<div className={styles.item}>
					<b>Площадка:</b>
				</div>
				<div className={styles.item}>
					<b>Дата:</b>
				</div>
				<div className={styles.item}>
					<b>Время:</b>
				</div>
			</div>
		</div>
	);
};

export default ListHeaderRoomInHome;
