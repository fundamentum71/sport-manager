import React from 'react';
import styles from './profile.module.scss';
import avatar from '../../assets/images/avatar.jpg';

function Profile() {
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
					<div className={styles.info_name}>Имя Фамилия</div>
					<div className={styles.info_reg}>В сети</div>
					<div className={styles.info_reg}>Дата регистрации: 03.04.2022</div>
					<div className={styles.info_reg}>Возраст: 27</div>
					<div className={styles.info_statistic}>Предпочитаемый вид спорта: футбол</div>
					<div className={styles.info_statistic}>Сыграно игр: 10</div>
					<div className={styles.info_statistic}>Не пришел: 3</div>

					<div className={styles.info_btns}>
						<button className={styles.btn_edit}>Редактировать</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
