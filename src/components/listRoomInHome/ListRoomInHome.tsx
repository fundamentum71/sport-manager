import React from 'react';
import { Link } from 'react-router-dom';
import styles from './listRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { CartRoomInHomeProperty } from '../cartRoomInHome/CartRoomInHome';

const ListRoomInHome: React.FC<CartRoomInHomeProperty> = ({
	_id,
	title,
	preferredSport,
	time,
	date,
	place,
	isLoading,
	user,
	joined,
	isFullPost,
	dateCreatedRoom,
}) => {
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				'Загрузка'
			) : (
				<>
					<div className={styles.items}>
						<div className={styles.item}>
							<b>Название комнаты:</b>{' '}
							<p>{isFullPost ? title : <Link to={`/rooms/${_id}`}>{title}</Link>}</p>
						</div>
						<div className={styles.item}>
							<b>Создал комнату:</b> <p>{user ? user.fullName : ''}</p>
						</div>
						<div className={styles.item}>
							<b>Вид спорта:</b> <p>{preferredSport}</p>
						</div>
						<div className={styles.item}>
							<b>Колличество участников:</b> <p>{joined}</p>
						</div>

						<div className={styles.item}>
							<b>Площадка:</b> <p>{place}</p>
						</div>
						<div className={styles.item}>
							<b>Дата:</b> <p>{date}</p>
						</div>
						<div className={styles.item}>
							<b>Время:</b> <p>{time}</p>
						</div>
					</div>
					<div className={styles.btns}>
						<Link to={`/rooms/${_id}`}>
							<button className={styles.btn}>Войти в комнату</button>
						</Link>

						<Link to="/addroom">
							<button className={styles.btn_edit}>
								<EditIcon />
							</button>
						</Link>
					</div>
					<div className={styles.dateCreated}>Дата создания комнаты: {dateCreatedRoom}</div>
				</>
			)}
		</div>
	);
};

export default ListRoomInHome;
