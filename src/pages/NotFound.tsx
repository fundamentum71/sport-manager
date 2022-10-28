import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notFound.module.scss';

function NotFound() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.error}>
				<p>Ошибка 404</p>
				<p>Страница не найдена</p>
			</div>
			<Link to={'/'}>
				<p className={styles.back}>Вернуться на главную</p>
			</Link>
		</div>
	);
}

export default NotFound;
