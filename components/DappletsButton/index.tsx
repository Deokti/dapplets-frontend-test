import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export function DappletsButton({ className, install = false, ...props }: ButtonProps): React.ReactElement<ButtonProps> {

	return (
		<button className={cn(styles.button, {
			[styles.install]: install === false,
			[styles.uninstall]: install === true,
		})} {...props}>
			{install ? 'Uninstall' : 'Install'}
		</button>
	);
}
