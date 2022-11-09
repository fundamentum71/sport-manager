import React from 'react';
import styles from './startpage.module.scss';
import logoPrev from '../../assets/images/logoPrev.svg';
import { Link } from 'react-router-dom';

const StartPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.logoPrev}>
					<img src={logoPrev} alt="logo" />
				</div>
				<div className={styles.text}>
					Современный сервис для активных людей. Выбирай любимый вид спорта, находи людей по
					интересам, обсуждай место встречи и действуй!
				</div>
				<Link to={'/login'}>
					<button className={styles.btn}>Начать</button>
				</Link>
			</div>
		</div>
	);
};

export default StartPage;
