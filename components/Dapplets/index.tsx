import React from 'react';
import { IDapplets } from '../../interfaces/redux.state';
import { DappletsItem } from '../DappletsItem';
import styles from './Dapplets.module.scss';


export interface DappletsProps {
	dapplets: IDapplets[]
}

export function Dapplets({ dapplets }: DappletsProps): React.ReactElement<DappletsProps> {

	console.log(dapplets);

	return (
		<ul className={styles.wrapper}>
			{
				dapplets && dapplets.map((item) => {
					return (
						<li key={item.id}>
							<DappletsItem item={item} />
						</li>
					);
				})
			}
		</ul>
	);
}