import React from 'react';
import styles from './cartRoomInHome.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { userSchema } from '../../redux/auth/types';
import SkeletonCart from './SkeletonCart';
import { useAppSelector } from '../../redux/hooks';
import { upRoomProps } from '../../pages/Room/Room';
import axios from '../../axios';

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
	joined?: userSchema[];
	visitors?: userSchema[];
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
	visitors,
	dateCreatedRoom,
	isEditable,
}) => {
	const userData = useAppSelector((store) => store.auth.data);
	const allRooms = useAppSelector((state) => state.rooms.items);

	const addUserToVisitors = async () => {
		//проверка, есть ли пользователь в комнате
		const userInTheRoom = visitors?.some(({ _id }) => _id === userData?._id);

		if (userData && visitors && !userInTheRoom) {
			const newVisitor = [...visitors, userData];
			const editRoomData: upRoomProps = {
				title,
				preferredSport,
				date,
				time,
				place,
				joined,
				visitors: newVisitor,
			};

			await axios
				.patch(`/rooms/${_id}`, editRoomData)

				.catch((err) => {
					console.warn(err);
					alert('Ошибка при присоединении к комнате');
				})
				.finally(() => {});
		} else {
			console.log('Пользователь в комнате');
		}
	};

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
							<b>Колличество участников:</b> {joined?.length}
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
							<button onClick={addUserToVisitors} className={styles.btn}>
								Войти в комнату
							</button>
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
