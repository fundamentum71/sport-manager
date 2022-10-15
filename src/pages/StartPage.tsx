import React from 'react';
import styles from './startpage.module.scss';
import logoPrev from '../assets/images/logoPrev.svg';

const StartPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.logoPrev}>
					<img src={logoPrev} alt="" />
				</div>
				<div className={styles.text}>
					Современный сервис для активных людей. Выбирай любимый вид спорта, находи людей по
					интересам, обсуждай место встречи и действуй!
				</div>
				<button className={styles.btn}>Начать</button>
			</div>
		</div>
	);
};

export default StartPage;
