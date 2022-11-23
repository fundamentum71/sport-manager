import React from 'react';
import styles from './room.module.scss';

import RoomVisitors from '../../components/roomVisitor/RoomVisitors';
import RoomOptions from '../../components/roomOptions/RoomOptions';
import RoomGamers from '../../components/roomGamers/RoomGamers';
import RoomInputChat from '../../components/roomInputChat/RoomInputChat';
import RoomChat from '../../components/roomChat/RoomChat';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import CartRoomInHome from '../../components/cartRoomInHome/CartRoomInHome';
import { userSchema } from '../../redux/auth/types';
import Spiner from '../../components/Spiner';
import { useAppSelector } from '../../redux/hooks';

//дату создания комнаты

export type RoomProperty = {
	_id: string;
	title: string;
	preferredSport: string;
	time: string;
	date: string;
	place: string;
	user: userSchema;
	isLoading: boolean;
	joined: string[];
	visitors: string[];
	viewsCount: number;
};

const Room = () => {
	const [data, setData] = React.useState<RoomProperty>();
	const [isLoading, setIsLoading] = React.useState(true);
	const userData = useAppSelector((store) => store.auth.data);

	//получаем id
	const { id } = useParams();

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

	if (isLoading) {
		return <Spiner />;
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.visitors}>
					<RoomVisitors visitors={data?.visitors} />
				</div>
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
						/>
					) : (
						'Нет данных'
					)}
				</div>
				<div className={styles.gamers}>
					<RoomGamers joined={data?.joined} />
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
