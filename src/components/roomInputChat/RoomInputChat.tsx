import React from 'react';
import styles from './roomInputChat.module.scss';

function RoomInputChat() {
	return (
		<>
			<textarea />
			<button className={styles.btns_chat}>Отправить</button>
		</>
	);
}

export default RoomInputChat;
