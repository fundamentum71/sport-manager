import React from 'react';
import styles from './addRoom.module.scss';

const AddRoom = () => {
	return (
		<section className={styles.wrapper}>
			<div>
				<h2>Создание комнаты</h2>
				<button className={styles.btn_red}>Удалить комнату</button>
			</div>
			<div className={styles.options}>
				<label htmlFor=""> Название комнаты</label>
				<input type="text" placeholder="Введите название комнаты" />
				<label htmlFor="">Вид спорта</label>
				<input type="text" placeholder="Вид спорта" />
				<label htmlFor="">Дата</label>
				<input type="date" placeholder="" />
				<label htmlFor="">Время</label>
				<input type="time" />
				<label htmlFor="">Площадка</label>
				<input type="text" placeholder="Введите адрес" />
				<button className={styles.btn}>Создать комнату</button>
			</div>
		</section>
	);
};

export default AddRoom;
