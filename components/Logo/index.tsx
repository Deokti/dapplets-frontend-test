import React from 'react';
import LogoIcon from '../Icons/Logo.svg';
import styles from './Logo.module.scss';

export function Logo(): React.ReactElement {
	return (
		<div className={styles.logo}>
			<LogoIcon />
			<h2 className={styles.text}>Dapplets Project.</h2>
		</div>
	);
}