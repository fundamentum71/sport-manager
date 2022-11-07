import React from 'react';
import styles from './roomChat.module.scss';

function RoomChat() {
	return (
		<>
			<div>
				<div className={styles.chat_your}>
					15:05 Имя Фамилия:{' '}
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquam repellat facere
						similique voluptate sed reiciendis magnam praesentium adipisci, inventore eum saepe
						magni perspiciatis molestiae iste consectetur vero nesciunt itaque.
					</span>
				</div>
				<div className={styles.chat_dontyour}>
					15:06 Имя Фамилия:{' '}
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a distinctio velit tempora
						aliquid ad officia tenetur facilis aut recusandae itaque expedita doloremque, est
						adipisci, nostrum veniam reiciendis quibusdam maxime.
					</span>
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
