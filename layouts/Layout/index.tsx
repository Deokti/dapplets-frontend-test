import React from 'react';
import { Header } from '../Header';
import SettingsPanel from '../SettingsPanel';
import SidePanel from '../SidePanel';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

function Layout({ children }: LayoutProps): React.ReactElement<LayoutProps> {

	return (
		<div className={styles.grid}>
			<Header className={styles.header} />
			<SidePanel className={styles.sidePanel} />
			<div className={styles.body}>
				{children}
			</div>
			<SettingsPanel className={styles.settingsPagel} />
		</div >
	);
}

export default Layout;