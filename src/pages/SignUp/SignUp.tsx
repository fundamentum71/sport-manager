import React from 'react';
import styles from './signup.module.scss';

function SignUp() {
	const [name, setName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [login, setLogin] = React.useState('');
	const [checkPolice, setCheckPolice] = React.useState(false);

	const [nameDirty, setNameDirty] = React.useState(false);
	const [passwordDirty, setPasswordDirty] = React.useState(false);
	const [loginDirty, setLoginDirty] = React.useState(false);

	const [nameError, setNameError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
	const [loginError, setLoginError] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);

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
			case 'login':
				setLogin(e.target.value);

				if (!e.target.value) {
					setLoginError('Поле является обязательным');
				} else {
					setLoginError('');
				}

				break;
			case 'password':
				setPassword(e.target.value);

				if (e.target.value.length < 7 || e.target.value.length > 16) {
					setPasswordError('Пароль должнем быть от 7 до 16 символов');
					if (!e.target.value) {
						setPasswordError('Поле является обязательным');
					}
				} else {
					setPasswordError('');
				}

				break;

			case 'checkbox':
				setCheckPolice(!checkPolice);

				break;

			default:
				console.log('err');
				break;
		}
	};

	//после выхода из фокуса функция будет считаться измененной
	const blurHandler = (e: any) => {
		switch (e.target.name) {
			case 'name':
				setNameDirty(true);
				break;
			case 'login':
				setLoginDirty(true);
				break;
			case 'password':
				setPasswordDirty(true);
				break;

			default:
				console.log('err in focus');
				break;
		}
	};

	//проверка на валидность формы
	React.useEffect(() => {
		if (nameError || passwordError || loginError || !checkPolice) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [nameError, passwordError, loginError, checkPolice]);

	const onSubmit = () => {
		if (formValid) {
			console.log('submit');
		}
	};

	console.log(name, password, login, checkPolice);

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}></div>
			<div className={styles.form}>
				<div className={styles.desc}>
					<h2>Регистрация</h2>
					<h3>Пожалуйста, введите данные для создания своей учетной записи на нашем сайте.</h3>
				</div>
				<div className={styles.line}></div>
				<div className={styles.input}>
					<label htmlFor="name">Имя:</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Введите имя"
						value={name}
						onChange={(e) => onChangeValue(e)}
						onFocus={(e) => blurHandler(e)}
					/>
					{nameDirty && nameError && (
						<div style={{ color: 'red', fontSize: '0.8rem' }}>{nameError}</div>
					)}
					<label htmlFor="login">Логин:</label>
					<input
						id="login"
						name="login"
						type="text"
						placeholder="Введите логин"
						value={login}
						onChange={(e) => onChangeValue(e)}
						onFocus={(e) => blurHandler(e)}
					/>
					{loginDirty && loginError && (
						<div style={{ color: 'red', fontSize: '0.8rem' }}>{loginError}</div>
					)}
					<label htmlFor="password">Пароль:</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Введите пароль"
						value={password}
						onChange={(e) => onChangeValue(e)}
						onFocus={(e) => blurHandler(e)}
					/>
					{passwordDirty && passwordError && (
						<div style={{ color: 'red', fontSize: '0.8rem' }}>{passwordError}</div>
					)}
					<div className={styles.checkbox}>
						<input
							id="checkbox"
							type="checkbox"
							name="checkbox"
							checked={checkPolice}
							onChange={(e) => onChangeValue(e)}
						/>
						<label htmlFor="checkbox"> Cогласен с политикой конфиденциальности</label>
					</div>
				</div>
				<button className={styles.btn} onClick={onSubmit}>
					зарегистрироваться
				</button>
			</div>
		</div>
	);
}

export default SignUp;
