//import React from 'react';
//import styles from './roomGamer.module.scss';

type RoomGamersProps = {
	joined: string[] | undefined;
};

const RoomGamers: React.FC<RoomGamersProps> = ({ joined }) => {
	return (
		<>
			<h2>Список участников (Всего: 6)</h2>
			<p>Имя Фамилия (В сети)</p>
			<p>Имя Фамилия (Не в сети)</p>
			{/*<p>Имя Фамилия (В сети)</p>
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
			<p>Имя Фамилия (Не в сети)</p>*/}
		</>
	);
};

export default RoomGamers;
