import React from 'react';
import { Link } from 'react-router-dom';
import CartRoomInHome from '../../components/cartRoom/CartRoomInHome';
import styles from './home.module.scss';
import btns from '../../style/btns.module.scss';
import logoPrev from '../../assets/images/logo.svg';

function Home() {
	return (
		<div className={styles.rooms}>
			<h1>Выберите комнату или создайте свою</h1>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.logoPrev}>
						<img src={logoPrev} alt="logo" />
					</div>
					<div className={btns.m20}>
						<Link to="/addroom">
							<button className={styles.btn}>Создать комнату</button>
						</Link>
					</div>
				</div>
				<div className={styles.items}>
					<CartRoomInHome />
					<CartRoomInHome />
					<CartRoomInHome />
					<CartRoomInHome />
				</div>
			</div>
		</div>
	);
}

export default Home;
