
import styles from './Search.module.scss';
import SearchIcon from '../Icons/Search.svg';
import { SearchProps } from './Search.props';

export function Search({ value, onChange }: SearchProps): React.ReactElement<SearchProps> {
	return (
		<label className={styles.wrapper}>
			<span className={styles.icon}><SearchIcon /></span>
			<input
				type="text"
				className={styles.input}
				placeholder="Search"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}