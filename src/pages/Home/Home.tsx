import React from 'react';
import { Link } from 'react-router-dom';
import CartRoomInHome from '../../components/cartRoomInHome/CartRoomInHome';
import styles from './home.module.scss';
import btns from '../../style/btns.module.scss';
import logoPrev from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRooms } from '../../redux/room/asyncActions';
import ListRoomInHome from '../../components/listRoomInHome/ListRoomInHome';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Home() {
	const dispatch = useAppDispatch();
	const { items, status } = useAppSelector((state) => state.rooms);

	const [checkRoomList, setCheckRoomList] = React.useState(false);

	//после перезагрузки список остается списком
	React.useEffect(() => {
		if (window.localStorage.getItem('checkRoomList')) {
			setCheckRoomList(JSON.parse(window.localStorage.getItem('checkRoomList') || ''));
		}
	}, []);

	const isRoomsLoading = status === 'loading';

	const onChangeListOrCart = () => {
		setCheckRoomList(!checkRoomList);
		window.localStorage.setItem('checkRoomList', JSON.stringify(!checkRoomList));
	};

	React.useEffect(() => {
		dispatch(fetchRooms());
	}, []);

	return (
		<div className={styles.rooms}>
			<h1>Выберите комнату или создайте свою</h1>

			<FormGroup className={styles.checkRoom}>
				<FormControlLabel
					onClick={onChangeListOrCart}
					checked={checkRoomList}
					control={<Switch />}
					label={checkRoomList ? 'Список' : 'Карточки'}
				/>
			</FormGroup>

			<div className={styles.wrapper}>
				{/* вывод карточке */}
				{!checkRoomList && (
					<>
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

						<div className={styles.itemsCart}>
							{items.length === 0 && <h2>Список комнат пуст...</h2>}

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
										dateCreatedRoom={obj.dateCreatedRoom}
									/>
								),
							)}
						</div>
					</>
				)}
				{/* Вывод по списку */}
				{checkRoomList && (
					<div className={styles.wrapperList}>
						<div className={styles.itemsList}>
							{/*<ListRoomInHome />*/}

							{items.length === 0 && <h2>Список комнат пуст...</h2>}

							{(isRoomsLoading ? [...Array(5)] : items).map((obj, index) =>
								isRoomsLoading ? (
									<ListRoomInHome key={index} isLoading={true} />
								) : (
									<ListRoomInHome
										key={obj._id}
										_id={obj._id}
										title={obj.title}
										preferredSport={obj.preferredSport}
										time={obj.time}
										date={obj.date}
										place={obj.place}
										user={obj.user}
										joined={obj.joined.length}
										dateCreatedRoom={obj.dateCreatedRoom}
									/>
								),
							)}
						</div>
						<div className={btns.m20}>
							<Link to="/addroom">
								<button className={styles.btnList}>Создать комнату</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
