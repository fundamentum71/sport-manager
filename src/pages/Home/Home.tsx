import React from 'react';
import CartRoomInHome from '../../components/cartRoom/CartRoomInHome';
import styles from './home.module.scss';

function Home() {
	return (
		<div className={styles.rooms}>
			<h1>Выберите комнату или создайте свою</h1>
			<div className={styles.wrapper}>
				<div className={styles.items}>
					<CartRoomInHome />
					<CartRoomInHome />
					<CartRoomInHome />
					<CartRoomInHome />
				</div>
				<button className={styles.btn}>Создать комнату</button>
			</div>
		</div>
	);
}

export default Home;
