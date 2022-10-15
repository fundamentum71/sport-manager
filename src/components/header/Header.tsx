import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './header.module.scss';

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<div className={styles.btns}>
				<Link to="/start">
					<button className={styles.btn}>О сайте</button>
				</Link>
				<Link to="/">
					<button className={styles.btn}>Главная</button>
				</Link>
				<Link to="/profile">
					<button className={styles.btn}>Профиль</button>
				</Link>
				<Link to="/signin">
					<button className={styles.btn}>Войти</button>
				</Link>
				<Link to="/signup">
					<button className={styles.btn}>Регистрация</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
