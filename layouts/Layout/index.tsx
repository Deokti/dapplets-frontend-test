import React from 'react';
import Header from '../Header';
import SettingsPanel from '../SettingsPanel';
import SidePanel from '../SidePanel';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import cn from 'classnames';

function Layout({ children, menuOpen, settingOpen }: LayoutProps): React.ReactElement<LayoutProps> {

	return (
		<div className={cn(styles.grid, {
			[styles.menuOpen]: menuOpen === false,
			[styles.settingOpen]: settingOpen === false
		})}>
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