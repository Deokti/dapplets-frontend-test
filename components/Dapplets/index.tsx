import React from 'react';
import { DappletsItem } from '../DappletsItem';
import styles from './Dapplets.module.scss';


export function Dapplets(): React.ReactElement {
	return (
		<div className={styles.wrapper}>
			<DappletsItem />
		</div>
	);
}