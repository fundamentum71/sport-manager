import React from 'react';
import styles from './editProfile.module.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuth } from '../../redux/auth/slice';

const EditProfile = () => {
	const [name, setName] = React.useState('');
	const [age, setAge] = React.useState('');
	const [preferredSport, setPreferredSport] = React.useState('');
	const [avatarImg, setAvatarImg] = React.useState('');

	const [nameDirty, setNameDirty] = React.useState(false);
	const [nameError, setNameError] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);

	const isAuth = useAppSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to="/start" />;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.input_item}>
				<input
					id="avatarImg"
					name="avatarImg"
					type="file"
					placeholder="Аватар"
					className={styles.hidden}
					//value={avatarImg}
					//onChange={(e) => onChangeValue(e)}
				/>
			</div>

			<label htmlFor="avatarImg" className={styles.photoAvatar}>
				{/*<div className={styles.clear}>
					<ClearIcon />
				</div>*/}
				<div className={styles.logo}>
					<img src={logo} />
				</div>
				<img className={styles.photoAvatar_img} src={avatar} />

				<span className={styles.photoAvatar_desc}>Нажмите чтобы обновить аватар</span>
				<button className={styles.btn_clear}>Удалить аватар</button>
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
							//value={name}
							//onChange={(e) => onChangeValue(e)}
							//onFocus={(e) => blurHandler(e)}
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
							//value={age}
							//onChange={(e) => onChangeValue(e)}
						/>
					</div>

					<div className={styles.input_item}>
						<label htmlFor="preferredSport">Ваш вид спорта:</label>
						<input
							id="preferredSport"
							name="preferredSport"
							type="text"
							placeholder="Предпочитаемый вид спорта"
							//value={preferredSport}
							//onChange={(e) => onChangeValue(e)}
						/>
					</div>

					<div className={styles.input_item}>
						<label htmlFor="Город">Ваш город:</label>
						<input
							id="Город"
							name="Город"
							type="text"
							placeholder="Укажите ваш город"
							//value={preferredSport}
							//onChange={(e) => onChangeValue(e)}
						/>
					</div>
				</div>

				<div className={styles.btns}>
					<button
						disabled={!formValid}
						className={styles.btn}
						// onClick={onSubmit}
					>
						Обновить профиль
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
