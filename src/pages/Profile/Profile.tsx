import React from 'react';
import styles from './profile.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

function Profile() {
	const dataUser = useAppSelector((store) => store.auth.data);

	//if (!dataUser) {
	//	return null;
	//}

	if (!dataUser) {
		return <Navigate to="/start" />;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.row_menu}>
				<div className={styles.menu_item}>Об аккаунте</div>
				{/*<div className={styles.menu_item}>Об аккаунте</div>
				<div className={styles.menu_item}>Об аккаунте</div>
				<div className={styles.menu_item}>Об аккаунте</div>
				<div className={styles.menu_item}>Об аккаунте</div>*/}
			</div>
			<div className={styles.row_info}>
				<div className={styles.info_avatar}>
					<img src={avatar} alt="avatar" />
				</div>

				<div className={styles.info_container}>
					<div className={styles.info_name}>{dataUser.fullName || 'Нет данных'}</div>
					<div className={styles.info_reg}>В сети</div>
					<div className={styles.info_reg}>
						Дата регистрации: {dataUser.createdAt.substring(0, 10)}
					</div>
					<div className={styles.info_reg}>Возраст: {dataUser.age || 'Нет данных'}</div>
					<div className={styles.info_statistic}>
						Предпочитаемый вид спорта: {dataUser.preferredSport || 'Нет данных'}
					</div>
					<div className={styles.info_statistic}>
						Сыграно игр: {dataUser.gamesPlayed || 'Нет данных'}
					</div>
					<div className={styles.info_statistic}>
						Не пришел: {dataUser.gamesLeave || 'Нет данных'}
					</div>

					<div className={styles.info_btns}>
						<Link to="/editProfile">
							<button className={styles.btn_edit}>Редактировать</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
