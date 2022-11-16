import React from 'react';
import { Link } from 'react-router-dom';
import CartRoomInHome from '../../components/cartRoom/CartRoomInHome';
import styles from './home.module.scss';
import btns from '../../style/btns.module.scss';
import logoPrev from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRooms } from '../../redux/room/asyncActions';

function Home() {
	const dispatch = useAppDispatch();
	const { items, status } = useAppSelector((state) => state.rooms);

	const isRoomsLoading = status === 'loading';

	React.useEffect(() => {
		dispatch(fetchRooms());
	}, []);

	console.log(items);

	return (
		<div className={styles.rooms}>
			<h1>Выберите комнату или создайте свою</h1>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.logoPrev}>
						<img src={logoPrev} alt="logo" />
					</div>
					<div className={btns.m20}>
						<Link to="/addroom">
							<button className={styles.btn}>Создать комнату</button>
						</Link>
					</div>
				</div>
				<div className={styles.items}>
					{items.length == 0 && <h2>Список комнат пуст...</h2>}
					{(isRoomsLoading ? [...Array(5)] : items).map((obj, index) =>
						isRoomsLoading ? (
							<CartRoomInHome key={index} isLoading={true} />
						) : (
							<CartRoomInHome
								key={obj._id}
								_id={obj._id}
								title={obj.title}
								preferredSport={obj.preferredSport}
								time={obj.time}
								date={obj.date}
								place={obj.place}
								user={obj.user}
								joined={obj.joined.length}
								createdAt={obj.createdAt}
							/>
						),
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
