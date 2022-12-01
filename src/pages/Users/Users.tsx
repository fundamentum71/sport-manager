import React from 'react';
import styles from './users.module.scss';
import logoPrev from '../../assets/images/logoPrev.svg';
import { Link } from 'react-router-dom';
import { StatisticsUsers } from '../../components/statisticsUsers/StatisticsUsers';
import axios from '../../axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUsers } from '../../redux/users/asyncActions';

const Users = () => {
	const dispatch = useAppDispatch();
	const { items, status } = useAppSelector((state) => state.users);

	const isUsersLoading = status === 'loading';

	//получение всех пользователей
	React.useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	console.log(items);
	console.log(status);
	return (
		<div className={styles.wrapper}>
			<h2>Пользователи</h2>
			<p>
				Всего зарегистрированных пользователей: <span>{items.length}</span>
			</p>
			<div className={styles.tabl}>
				<div className={styles.tabl_item_small}>п/н</div>
				<div className={styles.tabl_item_long}> Имя:</div>
				{/*<div className={styles.tabl_item_long}>id:</div>*/}
				<div className={styles.tabl_item}>Возраст:</div>
				<div className={styles.tabl_item}>Город:</div>
				<div className={styles.tabl_item}>Вид спорта:</div>
				<div className={styles.tabl_item}>Дата регистрации:</div>
				<div className={styles.tabl_item}>Кол-во игр:</div>
				<div className={styles.tabl_item}>Не пришел:</div>
			</div>
			<div className={styles.users}>
				{(isUsersLoading ? [...Array(2)] : items).map((obj, index) =>
					isUsersLoading ? (
						<StatisticsUsers key={index} isLoading={true} />
					) : (
						<StatisticsUsers
							key={obj._id}
							id={obj._id}
							fullName={obj.fullName}
							avatarUrl={obj.avatarUrl}
							city={obj.city}
							age={obj.age}
							preferredSport={obj.preferredSport}
							createdAt={obj.createdAt}
							order={index + 1}
						/>
					),
				)}
			</div>
		</div>
	);
};

export default Users;
