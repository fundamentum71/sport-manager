import React from 'react';
import styles from './roomGamersItem.module.scss';

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
	return <div className={styles.wrapper}>{fullName}</div>;
};
