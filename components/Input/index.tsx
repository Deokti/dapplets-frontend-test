
import { Button } from '../Button';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export function Input({ placeholder, className, value, onChange, name, title, onClick, ...props }: InputProps): React.ReactElement<InputProps> {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<div className={styles.content}>
				<span className={styles.title}>{title}</span>
				<input
					type="text"
					value={value}
					className={styles.input}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
				/>
			</div>
			<Button appearance="default" onClick={onClick}>Create</Button>
		</div>
	);
}