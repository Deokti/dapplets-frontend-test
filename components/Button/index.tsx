import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export function Button({ install = false, children, appearance = 'install', className, mobile = false, ...props }: ButtonProps): React.ReactElement<ButtonProps> {

	return (
		<button className={cn(styles.button, {
			[styles.install]: install === false,
			[styles.uninstall]: install === true,
			[styles.appearanceInstall]: appearance === 'install',
			[styles.default]: appearance === 'default',
			[styles.mobile]: mobile,
		}, className)} {...props}>
			{children}
		</button>
	);
}
