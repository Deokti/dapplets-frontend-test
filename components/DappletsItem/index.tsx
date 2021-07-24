import { useEffect } from 'react';
import { API_URL } from '../../config/API_URL';
import { axios } from '../../config/axios';
import { IDapplets } from '../../interfaces/redux.state';
import styles from './DappletsItem.module.scss';

interface DappletsItemProps {
	open?: boolean
	state?: 'install' | 'installed'
	item?: IDapplets
}


export function DappletsItem({ open, state, item }: DappletsItemProps): React.ReactElement<DappletsItemProps> {

	return (
		<div className={styles.wrapper}>

		</div>
	);
}