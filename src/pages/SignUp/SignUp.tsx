import React from 'react';
import styles from './signup.module.scss';
function SignUp() {
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
					<input id="name" name="name" type="text" placeholder="Введите имя" />
					<label htmlFor="login">Логин:</label>
					<input id="login" name="login" type="text" placeholder="Введите логин" />
					<label htmlFor="password">Пароль:</label>
					<input id="password" name="password" type="text" placeholder="Введите пароль" />
					<div className={styles.checkbox}>
						<input id="checkbox" type="checkbox" />
						<label htmlFor="checkbox"> Cогласен с политикой конфиденциальности</label>
					</div>
				</div>
				<button className={styles.btn}>зарегистрироваться</button>
			</div>
		</div>
	);
}

export default SignUp;
