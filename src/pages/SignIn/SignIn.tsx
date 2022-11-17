import React from 'react';
import { Navigate } from 'react-router-dom';
import { fetchAuth } from '../../redux/auth/asyncActions';
import { selectIsAuth } from '../../redux/auth/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './signin.module.scss';

export type SignInProps = {
	email: string;
	password: string;
};

function SignIn() {
	const isAuth = useAppSelector(selectIsAuth);
	//const data = useAppSelector((store) => store.auth.data);

	const dispatch = useAppDispatch();

	const [password, setPassword] = React.useState('1111111');
	const [email, setEmail] = React.useState('it.kucherov@gmail.com');

	const [passwordDirty, setPasswordDirty] = React.useState(false);
	const [emailDirty, setEmailDirty] = React.useState(false);
	const [passwordError, setPasswordError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');

	const [formValid, setFormValid] = React.useState(false);

	const blurHandler = (e: any) => {
		switch (e.target.name) {
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

	const onChangeValue = (e: any) => {
		switch (e.target.name) {
			case 'email':
				setEmail(e.target.value.toLowerCase());

				if (!e.target.value) {
					setEmailError('Поле является обязательным');
				} else {
					setEmailError('');
				}

				break;

			case 'password':
				setPassword(e.target.value);

				if (!e.target.value) {
					setPasswordError('Поле является обязательным');
				} else {
					setPasswordError('');
				}

				break;

			default:
				console.log('err');
				break;
		}
	};

	const onSubmit = async () => {
		const SingInData: SignInProps = {
			email,
			password,
		};
		if (formValid) {
			const data = await dispatch(fetchAuth(SingInData));

			//сохранение в localStorage
			if (!data.payload) {
				return alert('Не удалось авторизоваться!');
			}
			if ('token' in data.payload) {
				window.localStorage.setItem('token', data.payload.token);
			}

			if (email == '') {
				setEmailError('Поле является обязательным');
			}

			if (password == '') {
				setPasswordError('Поле является обязательным');
			}

			if (!data.payload) {
				return alert('Не верный логин или пароль!');
			}

			setEmail('');
			setEmailDirty(false);
			setEmailError('');

			setPassword('');
			setPasswordDirty(false);
			setPasswordError('');
		}
	};

	//проверка на валидность формы
	React.useEffect(() => {
		if (passwordError || emailError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [passwordError, emailError, email, password]);

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}></div>
			<div className={styles.form}>
				<div className={styles.desc}>
					<h2>Вход в аккаунт</h2>
					<h3>Пожалуйста, введите данные, чтобы войти в аккаунт.</h3>
				</div>
				<div className={styles.line}></div>
				<div className={styles.input}>
					<label htmlFor="email">Почта:</label>
					<input
						id="email"
						name="email"
						type="text"
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
				</div>
				<button disabled={!formValid} className={styles.btn} onClick={onSubmit}>
					войти
				</button>
			</div>
		</div>
	);
}

export default SignIn;
