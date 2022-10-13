import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import styles from './mainLayout.module.scss';

const MainLayout: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};
export default MainLayout;
