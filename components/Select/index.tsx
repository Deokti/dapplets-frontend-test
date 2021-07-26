import styles from './Select.module.scss';
import ArrowBottom from '../Icons/ArrowBottom.svg';
import { SelectProps } from './Select.props';
import cn from 'classnames';

export function Select({ open = false, values, defaultValue }: SelectProps): React.ReactElement<SelectProps> {
	return (
		<div className={cn(styles.wrapper, {
			[styles.open]: open
		})}>
			<span className={styles.value}>{defaultValue}</span>
			<span className={styles.icon}>
				<ArrowBottom />
			</span>


			{open && (
				<ul className={styles.list}>
					{values && values.map((item) => (
						<li className={styles.item} key={item}>{item}</li>
					))}
				</ul>
			)}

		</div>
	);
}