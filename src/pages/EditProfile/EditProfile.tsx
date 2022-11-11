import React from 'react';
import styles from './editProfile.module.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';

const EditProfile = () => {
	const [name, setName] = React.useState('');
	const [age, setAge] = React.useState('');
	const [preferredSport, setPreferredSport] = React.useState('');
	const [avatarImg, setAvatarImg] = React.useState('');

	const [nameDirty, setNameDirty] = React.useState(false);
	const [nameError, setNameError] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.photoAvatar}>
				<img src={avatar} />
			</div>
			<div className={styles.form}>
				<div className={styles.logo}>
					<img src={logo} />
				</div>
				<div className={styles.desc}>
					<h2>Редактирование профиля</h2>
					<h3>Пожалуйста, заполните поля</h3>
				</div>
				<div className={styles.line}></div>
				<div className={styles.input}>
					<div className={styles.input_item}>
						<label htmlFor="name">Имя*:</label>
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
						<label htmlFor="age">Возраст:</label>
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
						<label htmlFor="preferredSport">Вид спорта:</label>
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
						<label htmlFor="avatarImg">Загрузите аватар</label>
						<input
							id="avatarImg"
							name="avatarImg"
							type="file"
							placeholder="Аватар"
							//value={avatarImg}
							//onChange={(e) => onChangeValue(e)}
						/>
					</div>
				</div>
				<button
					disabled={!formValid}
					className={styles.btn}
					// onClick={onSubmit}
				>
					Обновить профиль
				</button>
			</div>
		</div>
	);
};

export default EditProfile;
