import React from 'react';

const AddRoom = () => {
	return (
		<div>
			<label htmlFor=""> Назваине комнаты</label>
			<input type="text" placeholder="Введите название комнаты" />
			<label htmlFor="">Дата</label>
			<input type="date" placeholder="" />
			<label htmlFor="">Время</label>
			<input type="time" />
			<label htmlFor="">Площадка</label>
			<input type="text" placeholder="Введите адрес" />
			<button>Создать комнату</button>
		</div>
	);
};

export default AddRoom;
