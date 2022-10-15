import React from 'react';
import styles from './footer.module.scss';
function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				<div className={styles.item}>Версия 0.0.1</div>
				<div className={styles.item}>Калуга</div>
			</div>
		</div>
	);
}

export default Footer;
