import React from 'react';
import { Button } from '../../components/Button';
import styles from './StartPage.module.scss';

export function StartPage(): React.ReactElement {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>
						Добро
						пожаловать
					</h1>
					<span className={styles.details}>
						Dapplets
						<span className={styles.detailsDot}>.</span>
					</span>
				</div>
				<div className={styles.description}>
					<p>В тестовое задание на должность Frontend Developer</p>
					<p>
						Мы строим платформу Аугментированного веба, состоящую из браузерного плагина и децентрализованных приложений (дапплетов), основанных на крипто-технологиях.
					</p>
					<p>Наша платформа создается по принципу open-source и доступна для разработчиков со всего мира.</p>
				</div>

				<div className={styles.buttonContainer}>
					<Button color="vinous">Desktop</Button>
					<Button outline>Mobile</Button>
				</div>
			</div>
		</div>
	);
}