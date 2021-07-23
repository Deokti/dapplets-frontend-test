import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export function Button({ children, outline = false, color = 'blue', className }: ButtonProps): React.ReactElement<ButtonProps> {

	return (
		<button className={cn(styles.button, {
			[styles.outline]: outline,
			[styles.vinous]: color === 'vinous',
			[styles.blue]: color === 'blue',
			className
		})}>
			{children}
		</button>
	);
}
