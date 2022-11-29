import React from 'react';
import styles from './roomGamersItem.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type RoomGamerItem = {
	email?: string;
	fullName: string;
	_id: string;
	avatarUrl?: string;
	preferredSport?: string;
	age?: string;
	gamesPlayed?: number;
	gamesLeave?: number;
};

export const RoomGamerItem: React.FC<RoomGamerItem> = ({
	email,
	_id,
	fullName,
	avatarUrl,
	age,
	gamesPlayed,
	gamesLeave,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.line}>
				<div className={styles.avatar}>
					{avatarUrl ? (
						<img className={styles.photoAvatar_img} src={`http://localhost:4444${avatarUrl}`} />
					) : (
						<img className={styles.photoAvatar_img} src={avatar} />
					)}
				</div>
				<div>{fullName}</div>
				<InfoOutlinedIcon className={styles.info_icon} />
			</div>
			<div className={styles.slide_info}>
				<p>
					<b>id: </b>
					{_id}
				</p>
				<p>
					<b>Почта: </b>
					{email}
				</p>
				<p>
					<b>Возраст: </b>
					{age}
				</p>
				<p>
					<b>Сыграно игр: </b>
					{gamesPlayed}
				</p>
				<p>
					<b>Не явился: </b>
					{gamesLeave}
				</p>
			</div>
		</div>
	);
};
