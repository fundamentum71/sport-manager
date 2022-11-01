import React from 'react';
import styles from './signin.module.scss';
function SignIn() {
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
					<label htmlFor="login">Логин:</label>
					<input id="login" name="login" type="text" placeholder="Введите логин" />
					<label htmlFor="password">Пароль:</label>
					<input id="password" name="password" type="text" placeholder="Введите пароль" />
				</div>
				<button className={styles.btn}>войти</button>
			</div>
		</div>
	);
}

export default SignIn;
