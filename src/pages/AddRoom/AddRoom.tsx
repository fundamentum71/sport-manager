import React from 'react';
import styles from './addRoom.module.scss';
import axios from '../../axios';

type addRoomProps = {
	title: string;
	preferredSport: string;
	date: string;
	time: string;
	place: string;
};

const AddRoom = () => {
	const [title, setTitle] = React.useState('');
	const [preferredSport, setPreferredSport] = React.useState('');
	const [date, setDate] = React.useState('');
	const [time, setTime] = React.useState('');
	const [place, setPlace] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);

	const onChangeValue = (e: any) => {
		switch (e.target.name) {
			case 'title':
				setTitle(e.target.value);

				//if (!e.target.value) {
				//	setNameError('Поле является обязательным');
				//} else {
				//	setNameError('');
				//}

				break;
			case 'preferredSport':
				setPreferredSport(e.target.value);

				//if (!e.target.value.match(re)) {
				//	setEmailError('Введите вашу почту');
				//	if (!e.target.value) {
				//		setEmailError('Поле является обязательным');
				//	}
				//} else {
				//	setEmailError('');
				//}

				break;
			case 'date':
				setDate(e.target.value);

				//if (e.target.value.length < 7 || e.target.value.length > 16) {
				//	setPasswordError('Пароль должнем быть от 7 до 16 символов');
				//	if (!e.target.value) {
				//		setPasswordError('Поле является обязательным');
				//	}
				//} else {
				//	setPasswordError('');
				//}

				break;

			case 'time':
				setTime(e.target.value);

				//if (e.target.value.length < 7 || e.target.value.length > 16) {
				//	setPasswordError('Пароль должнем быть от 7 до 16 символов');
				//	if (!e.target.value) {
				//		setPasswordError('Поле является обязательным');
				//	}
				//} else {
				//	setPasswordError('');
				//}

				break;
			case 'place':
				setPlace(e.target.value);

				//if (e.target.value.length < 7 || e.target.value.length > 16) {
				//	setPasswordError('Пароль должнем быть от 7 до 16 символов');
				//	if (!e.target.value) {
				//		setPasswordError('Поле является обязательным');
				//	}
				//} else {
				//	setPasswordError('');
				//}

				break;

			default:
				console.log('err');
				break;
		}
	};

	const onSubmit = async () => {
		const addRoomData: addRoomProps = {
			title,
			preferredSport,
			date,
			time,
			place,
		};

		await axios
			.post(`/rooms`, addRoomData)

			.catch((err) => {
				console.warn(err);
				alert('Ошибка при создании комнаты');
			})
			.finally(() => {
				//setIsLoading(false);
			});

		//if (formValid) {
		//	const data = await dispatch(fetchRegister(addRoomData));

		//if (name == '') {
		//	setNameError('Поле является обязательным');
		//}

		//if (email == '') {
		//	setEmailError('Поле является обязательным');
		//}

		//if (password == '') {
		//	setPasswordError('Поле является обязательным');
		//}

		//	if (!data.payload) {
		//		return alert('Не удалось зарегистрироваться!');
		//	}

		//	setTitle('');
		//	setPreferredSport('');
		//	setDate('');
		//	setTime('');
		//	setPlace('');
		//}
	};

	console.log(title, preferredSport, date, time, place);

	return (
		<section className={styles.wrapper}>
			<div>
				<h2>Создание комнаты</h2>
				<button className={styles.btn_red}>Удалить комнату</button>
			</div>
			<div className={styles.options}>
				<label htmlFor=""> Название комнаты</label>
				<input
					name="title"
					type="text"
					placeholder="Введите название комнаты"
					value={title}
					onChange={(e) => onChangeValue(e)}
				/>
				<label htmlFor="">Вид спорта</label>
				<input
					name="preferredSport"
					type="text"
					placeholder="Вид спорта"
					value={preferredSport}
					onChange={(e) => onChangeValue(e)}
				/>
				<label htmlFor="">Дата</label>
				<input
					name="date"
					type="date"
					placeholder=""
					value={date}
					onChange={(e) => onChangeValue(e)}
				/>
				<label htmlFor="">Время</label>
				<input name="time" type="time" value={time} onChange={(e) => onChangeValue(e)} />
				<label htmlFor="">Площадка</label>
				<input
					name="place"
					type="text"
					placeholder="Введите адрес"
					value={place}
					onChange={(e) => onChangeValue(e)}
				/>
				<button className={styles.btn} onClick={onSubmit}>
					Создать комнату
				</button>
			</div>
		</section>
	);
};

export default AddRoom;
