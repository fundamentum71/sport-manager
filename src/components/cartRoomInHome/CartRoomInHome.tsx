import React from 'react';
import styles from './cartRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';
import SkeletonCart from './SkeletonCart';

export type CartRoomInHomeProperty = {
	_id?: string;
	title?: string;
	preferredSport?: string;
	time?: string;
	date?: string;
	place?: string;
	user?: userSchema;
	isLoading?: boolean;
	key?: number;
	joined?: string[];
	visitors?: string[];
	viewsCount?: number;
	dateCreatedRoom?: string;
	isEditable?: boolean;
};

const CartRoomInHome: React.FC<CartRoomInHomeProperty> = ({
	_id,
	title,
	preferredSport,
	time,
	date,
	place,
	isLoading,
	user,
	joined,
	dateCreatedRoom,
	isEditable,
}) => {
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className={styles.items}>
					<SkeletonCart />
				</div>
			) : (
				<>
					<div className={styles.items}>
						<h2>
							<Link to={`/rooms/${_id}`}>{title}</Link>
						</h2>
						<div className={styles.item}>
							<b>Создал комнату:</b> {user ? user.fullName : ''}
						</div>
						<div className={styles.item}>
							<b>Вид спорта:</b> {preferredSport}
						</div>
						<div className={styles.item}>
							<b>Колличество участников:</b> {joined}
						</div>

						<div className={styles.item}>
							<b>Площадка:</b> {place}
						</div>
						<div className={styles.item}>
							<b>Дата:</b> {date}
						</div>
						<div className={styles.item}>
							<b>Время:</b> {time}
						</div>
					</div>
					<div className={styles.btns}>
						<Link to={`/rooms/${_id}`}>
							<button className={styles.btn}>Войти в комнату</button>
						</Link>

						{isEditable && (
							<Link to={`/editroom/${_id}`}>
								<button className={styles.btn_edit}>
									<EditIcon />
								</button>
							</Link>
						)}
					</div>
					<div className={styles.dateCreated}>Дата создания комнаты: {dateCreatedRoom}</div>
				</>
			)}
		</div>
	);
};

export default CartRoomInHome;
