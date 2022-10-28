import { link } from 'fs';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './header.module.scss';

const Header = () => {
	const [activeListItem, setActiveListItem] = React.useState(0);
	const listPage = [
		{ title: 'О сайте', link: '/start', id: 0 },
		{ title: 'Главная', link: '/', id: 1 },
		{ title: 'Профиль', link: '/profile', id: 2 },
		//{ title: 'Войти', link: '/signin', id: 3 },
		//{ title: 'Регистрация', link: '/signup', id: 4 },
	];

	const removeActiv = () => {
		setActiveListItem(-1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>

			<div className={styles.btns}>
				{listPage.map((item) => (
					<Link key={item.id} to={item.link}>
						<button
							onClick={() => setActiveListItem(item.id)}
							className={activeListItem === item.id ? styles.active : styles.btn}>
							{item.title}
						</button>
					</Link>
				))}
				<Link to={'/signin'}>
					<button onClick={removeActiv} className={styles.btn_reg}>
						Войти
					</button>
				</Link>
				<Link to={'/signup'}>
					<button onClick={removeActiv} className={styles.btn_reg}>
						Регистрация
					</button>
				</Link>
				<button className={styles.btn_exit}>Выйти</button>
			</div>
		</div>
	);
};

export default Header;
