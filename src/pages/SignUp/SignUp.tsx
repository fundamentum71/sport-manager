import React from 'react';
import { Navigate } from 'react-router-dom';
import { fetchRegister } from '../../redux/auth/asyncActions';
import { selectIsAuth } from '../../redux/auth/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './signup.module.scss';

export type SignUpProps = {
	fullName: string;
	email: string;
	password: string;
};

function SignUp() {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(selectIsAuth);

	const [name, setName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [checkPolice, setCheckPolice] = React.useState(false);

	const [nameDirty, setNameDirty] = React.useState(false);
	const [passwordDirty, setPasswordDirty] = React.useState(false);
	const [emailDirty, setEmailDirty] = React.useState(false);

	const [nameError, setNameError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');

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
			case 'email':
				setEmail(e.target.value.toLowerCase());
				const re =
					/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

				if (!e.target.value.match(re)) {
					setEmailError('Введите вашу почту');
					if (!e.target.value) {
						setEmailError('Поле является обязательным');
					}
				} else {
					setEmailError('');
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
				if (name == '') {
					setNameError('Поле является обязательным');
				}

				if (email == '') {
					setEmailError('Поле является обязательным');
				}

				if (password == '') {
					setPasswordError('Поле является обязательным');
				}

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
			case 'email':
				setEmailDirty(true);
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
		if (nameError || passwordError || emailError || !checkPolice) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [nameError, passwordError, emailError, checkPolice]);

	const onSubmit = async () => {
		const SingUpData: SignUpProps = {
			fullName: name,
			email,
			password,
		};
		if (formValid) {
			const data = await dispatch(fetchRegister(SingUpData));

			//if (name == '') {
			//	setNameError('Поле является обязательным');
			//}

			//if (email == '') {
			//	setEmailError('Поле является обязательным');
			//}

			//if (password == '') {
			//	setPasswordError('Поле является обязательным');
			//}

			if (!data.payload) {
				return alert('Не удалось зарегистрироваться!');
			}
			if ('token' in data.payload) {
				window.localStorage.setItem('token', data.payload.token);
			}

			setName('');
			setNameDirty(false);
			setNameError('');

			setEmail('');
			setEmailDirty(false);
			setEmailError('');

			setPassword('');
			setPasswordDirty(false);
			setPasswordError('');

			setCheckPolice(false);
		}
	};

	if (isAuth) {
		return <Navigate to="/" />;
	}

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
					{nameError && <div style={{ color: 'red', fontSize: '0.8rem' }}>{nameError}</div>}
					<label htmlFor="email">Почта:</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Введите почту"
						value={email}
						onChange={(e) => onChangeValue(e)}
						onFocus={(e) => blurHandler(e)}
					/>
					{emailError && <div style={{ color: 'red', fontSize: '0.8rem' }}>{emailError}</div>}
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
					{passwordError && <div style={{ color: 'red', fontSize: '0.8rem' }}>{passwordError}</div>}
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
				<button disabled={!formValid} className={styles.btn} onClick={onSubmit}>
					зарегистрироваться
				</button>
			</div>
		</div>
	);
}

export default SignUp;
