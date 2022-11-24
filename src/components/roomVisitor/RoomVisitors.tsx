//import React from 'react';
//import styles from './roomVisitor.module.scss';

import { userSchema } from '../../redux/auth/types';

type RoomVisitorsProps = {
	visitors: userSchema[] | undefined;
};

const RoomVisitors: React.FC<RoomVisitorsProps> = ({ visitors }) => {
	return (
		<>
			<h2>Список человек в комнате (Всего: {visitors?.length})</h2>
			<div>
				{visitors
					? visitors.map((item) => <div key={item._id}>{item?.fullName}</div>)
					: 'Список пуст'}
			</div>
		</>
	);
};

export default RoomVisitors;
