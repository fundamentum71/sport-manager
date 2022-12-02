import React from 'react';
import styles from './fulluser.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuth } from '../../redux/auth/slice';
import axios from '../../axios';

type fullUserProps = {
	avatarUrl: string;
	fullName: string;
	city: string;
	createdAt: string;
	age: string;
	preferredSport: string;
	gamesPlayed: string;
	gamesLeave: string;
};

function FullUser() {
	const [data, setData] = React.useState<fullUserProps | undefined>();
	const isAuth = useAppSelector(selectIsAuth);

	//получаем id
	const { id } = useParams();

	//получение данных о комнате
	React.useEffect(() => {
		axios
			.get(`/users/${id}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.warn(err);
				alert('Ошибка при получение пользователя');
			})
			.finally(() => {});
	}, []);

	if (!isAuth) {
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
					{/*<img src={avatar} alt="avatar" />*/}
					{data?.avatarUrl ? (
						<img
							className={styles.photoAvatar_img}
							src={`http://localhost:4444${data?.avatarUrl}`}
						/>
					) : (
						<img className={styles.photoAvatar_img} src={avatar} />
					)}
				</div>

				<div className={styles.info_container}>
					<div className={styles.info_name}>{data?.fullName || 'Нет данных'}</div>
					<div className={styles.info_reg}>Город: {data?.city || 'Нет данных'}</div>
					<div className={styles.info_reg}>
						Дата регистрации: {data?.createdAt.substring(0, 10)}
					</div>
					<div className={styles.info_reg}>Возраст: {data?.age || 'Нет данных'}</div>
					<div className={styles.info_statistic}>
						Предпочитаемый вид спорта: {data?.preferredSport || 'Нет данных'}
					</div>
					<div className={styles.info_statistic}>
						Сыграно игр: {data?.gamesPlayed ?? 'Нет данных'}
					</div>
					<div className={styles.info_statistic}>Не пришел: {data?.gamesLeave ?? 'Нет данных'}</div>
				</div>
			</div>
		</div>
	);
}

export default FullUser;
