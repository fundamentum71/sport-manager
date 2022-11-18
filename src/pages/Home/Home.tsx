import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import CartRoomInHome from '../../components/cartRoomInHome/CartRoomInHome';
import logoPrev from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRooms } from '../../redux/room/asyncActions';
import ListRoomInHome from '../../components/listRoomInHome/ListRoomInHome';
import ListHeaderRoomInHome from '../../components/listHeaderRoomInHome/ListHeaderRoomInHome';

import styles from './home.module.scss';
import btns from '../../style/btns.module.scss';

function Home() {
	const dispatch = useAppDispatch();
	const { items, status } = useAppSelector((state) => state.rooms);
	const [view, setView] = React.useState('module');

	const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
		if (nextView !== null) {
			setView(nextView);
			window.localStorage.setItem('view', nextView);
		}
	};

	//после перезагрузки список остается списком
	React.useEffect(() => {
		if (window.localStorage.getItem('view')) {
			setView(window.localStorage.getItem('view') || '');
		}
	}, []);

	const isRoomsLoading = status === 'loading';
	const isRoomsLoaded = status === 'loaded';

	React.useEffect(() => {
		dispatch(fetchRooms());
	}, []);

	return (
		<div className={styles.rooms}>
			<h1>Выберите комнату или создайте свою</h1>

			<ToggleButtonGroup
				className={styles.checkRoom}
				exclusive
				value={view}
				onChange={handleChange}>
				<ToggleButton value="list" aria-label="list">
					<ViewListIcon />
				</ToggleButton>
				<ToggleButton value="module" aria-label="module">
					<ViewModuleIcon />
				</ToggleButton>
			</ToggleButtonGroup>

			<div className={styles.wrapper}>
				{/* вывод карточке */}
				{view == 'module' && (
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
							{!isRoomsLoading && items.length === 0 && <h2>Список комнат пуст...</h2>}

							{/*{isRoomsLoading && <Spiner />}*/}

							{(isRoomsLoading ? [...Array(2)] : items).map((obj, index) =>
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
				{view == 'list' && (
					<div className={styles.wrapperList}>
						{items.length !== 0 && <ListHeaderRoomInHome />}

						<div className={styles.itemsList}>
							{/*<ListRoomInHome />*/}

							{!isRoomsLoading && items.length === 0 && <h2>Список комнат пуст...</h2>}

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
