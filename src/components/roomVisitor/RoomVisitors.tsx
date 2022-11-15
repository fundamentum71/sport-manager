//import React from 'react';
//import styles from './roomVisitor.module.scss';

type RoomVisitorsProps = {
	visitors: string[] | undefined;
};

const RoomVisitors: React.FC<RoomVisitorsProps> = ({ visitors }) => {
	return (
		<>
			<h2>Список человек в комнате (Всего: 6)</h2>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
		</>
	);
};

export default RoomVisitors;
