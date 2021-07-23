import React from 'react';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import { RiCloseFill } from 'react-icons/ri';

export function Tag({ children, appearance = 'my-tag' }: TagProps): React.ReactElement<TagProps> {
	return (
		<div className={cn(styles.tag, {
			[styles.purple]: appearance === 'my-tag',
			[styles.green]: appearance === 'community-tag',
		})}>
			<span>{children}</span>
			<button className={styles.close}>
				<RiCloseFill size={15} color="#FFF" />
			</button>
		</div>
	);
}
