import React from 'react';
import styles from './editRoom.module.scss';
import axios from '../../axios';
import { Link, Navigate, useParams } from 'react-router-dom';
import logoPrev from '../../assets/images/logo.svg';
import { RoomProperty } from '../Room/Room';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRemoveRooms } from '../../redux/room/asyncActions';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

type addRoomProps = {
	title: string;
	preferredSport: string;
	date: string;
	time: string;
	place: string;
};

const EditRoom = () => {
	const { status } = useAppSelector((state) => state.rooms);
	const isRoomsLoading = status === 'loading';
	const userData = useAppSelector((store) => store.auth.data);

	const dispatch = useAppDispatch();
	//данные получвенной комнаты
	const [data, setData] = React.useState<RoomProperty>();
	const [isLoading, setIsLoading] = React.useState(true);
	const [isDelete, setIsDelete] = React.useState(false);

	//значения инпутов
	const [title, setTitle] = React.useState('');
	const [preferredSport, setPreferredSport] = React.useState('');
	const [date, setDate] = React.useState('');
	const [time, setTime] = React.useState('');
	const [place, setPlace] = React.useState('');

	//если данные есть, записываем в value
	React.useEffect(() => {
		if (data) {
			setTitle(data?.title);
			setPreferredSport(data?.preferredSport);
			setDate(data?.date);
			setTime(data?.time);
			setPlace(data?.place);
		}
	}, [data]);

	//ошибки
	const [errorTitle, setErrorTitle] = React.useState('');
	const [errorPreferredSport, setErrorPreferredSport] = React.useState('');
	const [errorDate, setErrorDate] = React.useState('');
	const [errorTime, setErrorTime] = React.useState('');
	const [errorPlace, setErrorPlace] = React.useState('');

	const [toRoomPage, setToRoomPage] = React.useState(false);

	const [formValid, setFormValid] = React.useState(false);

	//получаем id
	const { id } = useParams();

	//получение данных редактируемой комнаты
	React.useEffect(() => {
		axios
			.get(`/rooms/${id}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.warn(err);
				alert('Ошибка при получение комнаты');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	//проверка на валидность формы
	React.useEffect(() => {
		if (errorTitle || errorPreferredSport || errorDate || errorTime || errorPlace) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [errorTitle, errorPreferredSport, errorDate, errorTime, errorPlace]);

	const onChangeValue = (e: any) => {
		switch (e.target.name) {
			case 'title':
				setTitle(e.target.value);

				if (!e.target.value) {
					setErrorTitle('Поле является обязательным');
				} else {
					setErrorTitle('');
				}

				break;
			case 'preferredSport':
				setPreferredSport(e.target.value);

				if (!e.target.value) {
					setErrorPreferredSport('Поле является обязательным');
				} else {
					setErrorPreferredSport('');
				}

				break;
			case 'date':
				setDate(e.target.value);

				if (!e.target.value) {
					setErrorDate('Поле является обязательным');
				} else {
					setErrorDate('');
				}

				break;

			case 'time':
				setTime(e.target.value);

				if (!e.target.value) {
					setErrorTime('Поле является обязательным');
				} else {
					setErrorTime('');
				}

				break;
			case 'place':
				setPlace(e.target.value);

				if (!e.target.value) {
					setErrorPlace('Поле является обязательным');
				} else {
					setErrorPlace('');
				}

				break;

			default:
				console.log('err');
				break;
		}
	};

	const onSubmit = async () => {
		const editRoomData: addRoomProps = {
			title,
			preferredSport,
			date,
			time,
			place,
		};

		if (formValid) {
			await axios
				.patch(`/rooms/${data?._id}`, editRoomData)
				.then((res) => {
					setToRoomPage(true);
				})
				.then(() => {
					//очитска формы
					setTitle('');
					setPreferredSport('');
					setDate('');
					setTime('');
					setPlace('');
					//очистка ошибок
					setErrorTitle('');
					setErrorPreferredSport('');
					setErrorDate('');
					setErrorTime('');
					setErrorPlace('');
				})

				.catch((err) => {
					console.warn(err);
					alert('Ошибка при создании комнаты');
				})
				.finally(() => {
					//setIsLoading(false);
				});

			//если пользователь нажмет сабмит с незаполненным полем
			if (title == '') {
				setErrorTitle('Поле является обязательным');
			}

			if (preferredSport == '') {
				setErrorPreferredSport('Поле является обязательным');
			}

			if (date == '') {
				setErrorDate('Поле является обязательным');
			}
			if (time == '') {
				setErrorTime('Поле является обязательным');
			}
			if (place == '') {
				setErrorPlace('Поле является обязательным');
			}
		}
	};

	const onClickRemoveRoom = (_id: string | undefined) => {
		if (window.confirm('Вы действительно хотите удалить комнату?')) {
			dispatch(fetchRemoveRooms(_id));
			setIsDelete(true);
		}
	};

	const isEditable = userData?._id == data?.user._id;

	return (
		<>
			{isLoading ? <h2>Загрузка</h2> : isDelete && <Navigate to={`/`} />}

			{toRoomPage && <Navigate to={`/rooms/${data?._id}`} />}

			{isEditable ? (
				<section className={styles.wrapper}>
					<Link to="/">
						<div className={styles.cancel}>
							<ClearIcon />
						</div>
					</Link>
					<h2>Редактирование комнаты</h2>
					<div className={styles.colomn}>
						<div className={styles.menu}>
							<div className={styles.logoPrev}>
								<img src={logoPrev} alt="logo" />
							</div>
							<div>
								<div>*Введите новые данные и примените изменения</div>
								<div className={styles.text_remove}>
									Вы так же можете <b onClick={() => onClickRemoveRoom(data?._id)}>удалить</b>{' '}
									комнату{' '}
									<button
										onClick={() => onClickRemoveRoom(data?._id)}
										className={styles.btn_remove}>
										<DeleteIcon />
									</button>
								</div>
							</div>

							{/*<button onClick={() => onClickRemoveRoom(data?._id)} className={styles.btn_red}>
						Удалить комнату
					</button>*/}
						</div>
						<div className={styles.options}>
							<label htmlFor=""> Название комнаты</label>
							{errorTitle && (
								<div
									style={{
										color: 'red',
										fontSize: '0.8rem',
										textAlign: 'center',
										marginTop: '-14px',
									}}>
									{errorTitle}
								</div>
							)}
							<input
								name="title"
								type="text"
								placeholder="Введите название комнаты"
								value={title}
								onChange={(e) => onChangeValue(e)}
							/>

							<label htmlFor="">Вид спорта</label>
							{errorPreferredSport && (
								<div
									style={{
										color: 'red',
										fontSize: '0.8rem',
										textAlign: 'center',
										marginTop: '-14px',
									}}>
									{errorPreferredSport}
								</div>
							)}
							<input
								name="preferredSport"
								type="text"
								placeholder="Вид спорта"
								value={preferredSport}
								onChange={(e) => onChangeValue(e)}
							/>

							<label htmlFor="">Дата</label>
							{errorDate && (
								<div
									style={{
										color: 'red',
										fontSize: '0.8rem',
										textAlign: 'center',
										marginTop: '-14px',
									}}>
									{errorDate}
								</div>
							)}
							<input
								name="date"
								type="date"
								placeholder=""
								value={date}
								onChange={(e) => onChangeValue(e)}
							/>

							<label htmlFor="">Время</label>
							{errorTime && (
								<div
									style={{
										color: 'red',
										fontSize: '0.8rem',
										textAlign: 'center',
										marginTop: '-14px',
									}}>
									{errorTime}
								</div>
							)}
							<input name="time" type="time" value={time} onChange={(e) => onChangeValue(e)} />

							<label htmlFor="">Площадка</label>
							{errorPlace && (
								<div
									style={{
										color: 'red',
										fontSize: '0.8rem',
										textAlign: 'center',
										marginTop: '-14px',
									}}>
									{errorPlace}
								</div>
							)}
							<input
								name="place"
								type="text"
								placeholder="Введите адрес"
								value={place}
								onChange={(e) => onChangeValue(e)}
							/>

							<button disabled={!formValid} className={styles.btn} onClick={onSubmit}>
								Применить изменения
							</button>
						</div>
					</div>
				</section>
			) : (
				<h2>В доступе отказано</h2>
			)}
		</>
	);
};

export default EditRoom;
