import React from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import CloudIcon from '../../components/Icons/Cloud.svg';
import SettingsIcon from '../../components/Icons/Settings.svg';

import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { setSettinsOpen } from '../../redux/actions';
import { IData } from '../../interfaces/redux.state';

function Header({ className, settingOpen, setSettinsOpen, ...props }: HeaderProps): React.ReactElement<HeaderProps> {

	function onSettingOpen() {
		setSettinsOpen(!settingOpen);
	}

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

			<div className={styles.settings} onClick={onSettingOpen}>
				<SettingsIcon />
				<span>Settings</span>
			</div>
		</header>
	);
}

const mapStateToProps = ({ settingOpen }: IData) => ({ settingOpen });

export default connect(mapStateToProps, { setSettinsOpen })(Header);