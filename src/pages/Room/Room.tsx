import React from 'react';
import styles from './room.module.scss';
import EditIcon from '@mui/icons-material/Edit';

const Room = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.visitor}>
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
				</div>
				<div className={styles.options}>
					<h2>Футболисты</h2>
					<button className={styles.btn_edit}>
						<EditIcon />
					</button>
					<div className={styles.option}>Вид спорта: Футбол</div>
					<div className={styles.option}>Дата: 23.04.22</div>
					<div className={styles.option}>Время: 15:15</div>
					<div className={styles.option}>Создал комнату: Пупкин С.И.</div>
					<div className={styles.option}>Площадка: набережная</div>

					<div className={styles.btns}>
						<button className={styles.btn}>Приду играть</button>
						<button className={styles.btn_exit}>Не приду</button>
					</div>
				</div>
				<div className={styles.gamers}>
					<h2>Список игроков (Всего: 6)</h2>
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
				</div>
			</div>
			<h2>ЧАТ</h2>
			<div className={styles.chat_wrapper}>
				<div className={styles.input_chat}>
					<textarea />
					<button className={styles.btns_chat}>Отправить</button>
				</div>
				<div className={styles.chat}>
					<div>
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
						<div className={styles.chat_your}>
							15:05 Имя Фамилия: <span>text text text text</span>
						</div>
						<div className={styles.chat_dontyour}>
							15:06 Имя Фамилия: <span>text text text text</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Room;
