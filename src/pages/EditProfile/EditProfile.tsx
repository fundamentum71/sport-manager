import React from 'react';
import styles from './editProfile.module.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsAuth } from '../../redux/auth/slice';
import axios from '../../axios';
import { fetchAuthMe } from '../../redux/auth/asyncActions';

type editProfileProps = {
	fullName: string;
	age?: string;
	preferredSport?: string;
	avatarUrl?: string | null;
	city?: string;
};

type deleteAvatarProp = {
	avatarImg: string;
};

const EditProfile = () => {
	const dataUser = useAppSelector((store) => store.auth.data);
	const dispatch = useAppDispatch();

	const [name, setName] = React.useState('');
	const [age, setAge] = React.useState('');
	const [preferredSport, setPreferredSport] = React.useState('');
	const [avatarImg, setAvatarImg] = React.useState<string | null>('');
	const [city, setCity] = React.useState('');

	const [nameError, setNameError] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);
	const [toProfilePage, setToProfilePage] = React.useState(false);

	const isAuth = useAppSelector(selectIsAuth);

	//console.log(dataUser);

	//если данные есть, записываем в value
	React.useEffect(() => {
		if (dataUser) {
			setName(dataUser.fullName);
			setAge(dataUser.age ? dataUser.age : '');
			setPreferredSport(dataUser.preferredSport ? dataUser.preferredSport : '');
			setAvatarImg(dataUser.avatarUrl ? dataUser.avatarUrl : '');
			setCity(dataUser.city ? dataUser.city : '');
		}
	}, [dataUser]);

	const onClickRemoveImage = async () => {
		setAvatarImg(null);
		if (avatarImg) {
			const deleteAvatar: deleteAvatarProp = { avatarImg };
			await axios.post('/deleteAvatar', deleteAvatar);
		}
	};

	//добавление картинки
	const handleChangeFile = async (event: any) => {
		try {
			//специальный формат куда можно вшивать картинку и отправлять на бэк
			const formData = new FormData();
			const file = event.target.files[0];
			formData.append('avatar', file);
			//загрузка ее на сервер
			const { data } = await axios.post(`/upload`, formData);
			setAvatarImg(data.url);
			console.log(avatarImg);
		} catch (error) {
			console.warn(error);
			alert('Произошла оишбка при загрузке картинки');
		}
	};

	const onChangeValue = (e: any) => {
		switch (e.target.name) {
			case 'name':
				setName(e.target.value);

				if (!e.target.value) {
					setNameError('Поле является обязательным');
				} else {
					setNameError('');
				}
				break;
			case 'age':
				setAge(e.target.value);

				break;
			case 'preferredSport':
				setPreferredSport(e.target.value);
				break;

			case 'city':
				setCity(e.target.value);

				break;
			default:
				console.log('err');
				break;
		}
	};

	//проверка на валидность формы
	React.useEffect(() => {
		if (nameError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [nameError]);

	//отправить обновление профиля на сервер
	const onSubmit = async () => {
		const editProfileData: editProfileProps = {
			fullName: name,
			age,
			preferredSport,
			avatarUrl: avatarImg,
			city,
		};

		if (formValid) {
			await axios
				.patch(`/users/${dataUser?._id}`, editProfileData)
				.then(() => {
					setToProfilePage(true);
					dispatch(fetchAuthMe());
				})
				.catch((err) => {
					console.warn(err);
					alert('Ошибка при редактировании профиля ');
				})
				.finally(() => {
					//setIsLoading(false);
				});
			//если пользователь нажмет сабмит с незаполненным полем
			if (name == '') {
				setNameError('Поле является обязательным');
			}
		}
	};

	if (!isAuth) {
		return <Navigate to="/start" />;
	}

	return (
		<>
			{toProfilePage && <Navigate to={`/profile`} />}
			<div className={styles.wrapper}>
				<div className={styles.input_item}>
					<input
						id="avatarImg"
						name="avatarImg"
						type="file"
						placeholder="Аватар"
						className={styles.hidden}
						onChange={handleChangeFile}
					/>
				</div>

				<label htmlFor="avatarImg" className={styles.photoAvatar}>
					{/*<div className={styles.clear}>
					<ClearIcon />
				</div>*/}
					<div className={styles.logo}>
						<img src={logo} />
					</div>

					{avatarImg ? (
						<img className={styles.photoAvatar_img} src={`http://localhost:4444${avatarImg}`} />
					) : (
						<img className={styles.photoAvatar_img} src={avatar} />
					)}

					<span className={styles.photoAvatar_desc}>Нажмите чтобы обновить аватар</span>
					<button className={styles.btn_clear} onClick={onClickRemoveImage}>
						Удалить аватар
					</button>
				</label>

				<div className={styles.form}>
					<Link to="/profile">
						<div className={styles.cancel}>
							<ClearIcon />
						</div>
					</Link>

					<div className={styles.desc}>
						<h2>Редактирование профиля</h2>
						<h3>Пожалуйста, заполните поля</h3>
					</div>
					<div className={styles.line}></div>
					<div className={styles.input}>
						<div className={styles.input_item}>
							<label htmlFor="name">Ваше полное имя*:</label>
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Введите имя"
								value={name}
								onChange={(e) => onChangeValue(e)}
							/>
							{nameError && <div style={{ color: 'red', fontSize: '0.8rem' }}>{nameError}</div>}
						</div>

						<div className={styles.input_item}>
							<label htmlFor="age">Ваш возраст:</label>
							<input
								id="age"
								name="age"
								type="number"
								placeholder="Укажите возраст"
								value={age}
								onChange={(e) => onChangeValue(e)}
							/>
						</div>

						<div className={styles.input_item}>
							<label htmlFor="preferredSport">Ваш вид спорта:</label>
							<input
								id="preferredSport"
								name="preferredSport"
								type="text"
								placeholder="Предпочитаемый вид спорта"
								value={preferredSport}
								onChange={(e) => onChangeValue(e)}
							/>
						</div>

						<div className={styles.input_item}>
							<label htmlFor="city">Ваш город:</label>
							<input
								id="city"
								name="city"
								type="text"
								placeholder="Укажите ваш город"
								value={city}
								onChange={(e) => onChangeValue(e)}
							/>
						</div>
					</div>

					<div className={styles.btns}>
						<button disabled={!formValid} className={styles.btn} onClick={onSubmit}>
							Обновить профиль
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProfile;
