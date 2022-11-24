import React from 'react';
import styles from './room.module.scss';
import RoomVisitors from '../../components/roomVisitor/RoomVisitors';
import RoomOptions from '../../components/roomOptions/RoomOptions';
import RoomGamers from '../../components/roomGamers/RoomGamers';
import RoomInputChat from '../../components/roomInputChat/RoomInputChat';
import RoomChat from '../../components/roomChat/RoomChat';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import { userSchema } from '../../redux/auth/types';
import Spiner from '../../components/Spiner';
import { useAppSelector } from '../../redux/hooks';

//дату создания комнаты

export type upRoomProps = {
	title: string | undefined;
	preferredSport: string | undefined;
	date: string | undefined;
	time: string | undefined;
	place: string | undefined;
	joined?: userSchema[] | undefined;
	visitors?: userSchema[] | undefined;
};

export type RoomProperty = {
	_id: string;
	title: string;
	preferredSport: string;
	time: string;
	date: string;
	place: string;
	user: userSchema;
	isLoading: boolean;
	joined: userSchema[];
	visitors: userSchema[];
	viewsCount: number;
};

const Room = () => {
	const [data, setData] = React.useState<RoomProperty>();
	//загрузка для компонента room
	const [isLoading, setIsLoading] = React.useState(true);
	const userData = useAppSelector((store) => store.auth.data);
	//загрузка для отдельных комнонетов
	const [isLoadingOption, setIsLoadingOption] = React.useState(false);
	//const [isButtonDisable, setIsButtonDisable] = React.useState(false);

	//получаем id
	const { id } = useParams();

	//получение данных о комнате
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
				setIsLoadingOption(false);
			});
	}, []);

	//функция добавляет юзера в массив геймеров
	const addUserToGame = async () => {
		//setIsLoadingOption(true);

		if (userData) {
			data?.joined.push(userData);
		}
		const editRoomData: upRoomProps = {
			title: data?.title,
			preferredSport: data?.preferredSport,
			date: data?.date,
			time: data?.time,
			place: data?.place,
			joined: data?.joined,
		};
		//вход в комнату
		await axios
			.patch(`/rooms/${data?._id}`, editRoomData)

			.catch((err) => {
				console.warn(err);
				alert('Ошибка при присоединении к комнате');
			})
			.finally(() => {
				//setIsLoadingOption(false);
			});
		//обновление данных в комнате
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
				setIsLoadingOption(false);
			});
	};

	//функция удаляет юзера из массива геймеров
	const removeUserToGame = async () => {
		//setIsLoadingOption(true);
		const editRoomData: upRoomProps = {
			title: data?.title,
			preferredSport: data?.preferredSport,
			date: data?.date,
			time: data?.time,
			place: data?.place,
			joined: data?.joined.filter((obj) => obj._id !== userData?._id),
		};
		//выход из комнаты
		await axios
			.patch(`/rooms/${data?._id}`, editRoomData)

			.catch((err) => {
				console.warn(err);
				alert('Ошибка при выходе из комнаты');
			})
			.finally(() => {
				//setIsLoadingOption(false);
			});
		//обновление данных в комнате
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
				setIsLoadingOption(false);
			});
	};
	if (isLoading) {
		return <Spiner />;
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				{/*<div className={styles.visitors}>
					<RoomVisitors visitors={data?.visitors} />
				</div>*/}
				<div className={styles.options}>
					{data ? (
						<RoomOptions
							_id={data._id}
							title={data.title}
							preferredSport={data.preferredSport}
							time={data.time}
							date={data.date}
							place={data.place}
							user={data.user}
							isEditable={userData?._id == data.user._id}
							//вернет true если пользователь присоединился к игре
							isGamer={data?.joined.some(({ _id }) => _id === userData?._id)}
							addUserToGame={() => addUserToGame()}
							removeUserToGame={() => removeUserToGame()}
							isLoadingOption={isLoadingOption}
						/>
					) : (
						'Нет данных'
					)}
				</div>
				<div className={styles.gamers}>
					<RoomGamers
						joined={data?.joined}
						//isLoadingOption={isLoadingOption}
					/>
				</div>
			</div>
			<h2>ЧАТ</h2>
			<div className={styles.chat_wrapper}>
				<div className={styles.input_chat}>
					<RoomInputChat />
				</div>
				<div className={styles.chat}>
					<RoomChat />
				</div>
			</div>
		</section>
	);
};

export default Room;
