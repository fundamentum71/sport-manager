import React from 'react';
import styles from './statisticsUsers.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';

type StatisticsUsersProps = {
	id?: string;
	fullName?: string;
	avatarUrl?: string;
	city?: string;
	age?: string;
	preferredSport?: string;
	createdAt?: string;
	isLoading?: boolean;
	gamesPlayed?: number;
	gamesLeave?: number;
	order?: number;
};

export const StatisticsUsers: React.FC<StatisticsUsersProps> = ({
	id,
	fullName,
	avatarUrl,
	city,
	age,
	preferredSport,
	createdAt,
	isLoading,
	gamesPlayed,
	gamesLeave,
	order,
}) => {
	return (
		<div>
			<div className={styles.users}>
				<div className={styles.users_item_small}>{order}</div>
				<Link to={`/users/${id}`}>
					<div className={styles.users_item_long}>
						<div className={styles.users_item_avatar}>
							{avatarUrl ? (
								<img className={styles.photoAvatar_img} src={`http://localhost:4444${avatarUrl}`} />
							) : (
								<img className={styles.photoAvatar_img} src={avatar} />
							)}
						</div>

						{fullName}
					</div>
				</Link>
				{/*<div className={styles.users_item_long}>{id}</div>*/}

				<div className={styles.users_item}>{age}</div>
				<div className={styles.users_item}>{city}</div>
				<div className={styles.users_item}>{preferredSport}</div>
				<div className={styles.users_item}>{createdAt?.slice(0, 10)}</div>
				<div className={styles.users_item}>{gamesPlayed}</div>
				<div className={styles.users_item}>{gamesLeave}</div>
			</div>
		</div>
	);
};
