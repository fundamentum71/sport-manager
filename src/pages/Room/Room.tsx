import React from 'react';
import styles from './room.module.scss';

import RoomVisitors from '../../components/roomVisitor/RoomVisitors';
import RoomOptions from '../../components/roomOptions/RoomOptions';
import RoomGamers from '../../components/roomGamers/RoomGamers';
import RoomInputChat from '../../components/roomInputChat/RoomInputChat';
import RoomChat from '../../components/roomChat/RoomChat';

const Room = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.visitors}>
					<RoomVisitors />
				</div>
				<div className={styles.options}>
					<RoomOptions />
				</div>
				<div className={styles.gamers}>
					<RoomGamers />
				</div>
			</div>
			<h2>ЧАТ</h2>
			<div className={styles.chat_wrapper}>
				<div className={styles.input_chat}>
					<RoomInputChat />
				</div>
				<div className={styles.chat}>
					<RoomChat />
				</div>
			</div>
		</section>
	);
};

export default Room;
