import React from 'react';
import styles from './roomChat.module.scss';

function RoomChat() {
	return (
		<>
			<div>
				<div className={styles.chat_your}>
					15:05 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_dontyour}>
					15:06 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_your}>
					15:05 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_dontyour}>
					15:06 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_your}>
					15:05 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_dontyour}>
					15:06 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_your}>
					15:05 Имя Фамилия: <span>text text text text</span>
				</div>
				<div className={styles.chat_dontyour}>
					15:06 Имя Фамилия: <span>text text text text</span>
				</div>
			</div>
		</>
	);
}

export default RoomChat;
