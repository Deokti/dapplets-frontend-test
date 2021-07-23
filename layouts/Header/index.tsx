import React from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import CloudIcon from '../../components/Icons/Cloud.svg';
import SettingsIcon from '../../components/Icons/Settings.svg';

import styles from './Header.module.scss';

export function Header({ className, ...props }: HeaderProps): React.ReactElement<HeaderProps> {

	return (
		<header
			className={cn(styles.header, className)}
			{...props}
		>
			<div className={styles.extension}>
				<CloudIcon />
				<span>
					Extension state: <span className={styles.extensionState}>Active</span>
				</span>
			</div>

			<div className={styles.settings}>
				<SettingsIcon />
				<span>Settings</span>
			</div>
		</header>
	);
}