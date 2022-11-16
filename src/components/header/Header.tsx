import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './header.module.scss';
import btns from '../../style/btns.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectIsAuth } from '../../redux/auth/slice';
import noAvatar from '../../assets/images/no-avatar.png';
import avatar from '../../assets/images/avatar.jpg';
import { fetchAuthMe } from '../../redux/auth/asyncActions';

const Header = () => {
	const isAuth = useAppSelector(selectIsAuth);
	const dispatch = useAppDispatch();
	const dataUser = useAppSelector((store) => store.auth.data);
	const LoadedDataUser = useAppSelector((store) => store.auth.status);

	const [activeListItem, setActiveListItem] = React.useState(-1);
	const listPage = [
		//{ title: 'Превью', link: '/start', id: 0, isAuthView: false },
		{ title: 'О сайте', link: '/about', id: 0, isAuthView: true },
		{ title: 'Комнаты', link: '/', id: 1, isAuthView: true },
		//{ title: 'Профиль', link: '/profile', id: 2, isAuthView: true },
		//{ title: 'Войти', link: '/signin', id: 3 },
		//{ title: 'Регистрация', link: '/signup', id: 4 },
	];

	const removeActiv = () => {
		setActiveListItem(-1);
	};

	const logOut = () => {
		if (window.confirm('Вы действительно хотите выйти из аккаунта?')) {
			//выход из аккаунта
			dispatch(logout());
			//удаление токена из localStorage
			window.localStorage.removeItem('token');
		}
	};

	React.useEffect(() => {
		console.log('isAuth', isAuth, 'dataUser', dataUser, LoadedDataUser);
	});

	return (
		<div className={styles.wrapper}>
			<Link to="/start">
				<div className={styles.logo}>
					<img src={logo} alt="logo" />
				</div>
			</Link>

			{dataUser?.fullName && (
				<Link to="/profile">
					<div className={styles.userBlock}>
						<img className={styles.userBlock__photo} src={dataUser.avatarUrl || avatar} />

						<div className={styles.userBlock__name}>{dataUser.fullName}</div>
					</div>
				</Link>
			)}

			<div className={styles.btns}>
				{listPage.map((item) =>
					item.isAuthView === isAuth ? (
						<div key={item.id} className={btns.m10}>
							<Link to={item.link}>
								<button
									//onClick={() => setActiveListItem(item.id)}
									className={activeListItem === item.id ? styles.active : styles.btn}>
									{item.title}
								</button>
							</Link>
						</div>
					) : (
						''
					),
				)}
				{!isAuth && (
					<>
						<div className={btns.m10}>
							<Link to={'/login'}>
								<button onClick={removeActiv} className={styles.btn_reg}>
									Войти
								</button>
							</Link>
						</div>
						<div className={btns.m10}>
							<Link to={'/registration'}>
								<button onClick={removeActiv} className={styles.btn_reg}>
									Регистрация
								</button>
							</Link>
						</div>
					</>
				)}

				{isAuth && (
					<div className={btns.m10}>
						<Link to={'/start'}>
							<button onClick={logOut} className={styles.btn_exit}>
								Выйти
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
