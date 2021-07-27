
import styles from './LoadingLine.module.scss';
import { LoadingLineProps } from './LoadingLine.props';

export function LoadingLine({ title }: LoadingLineProps): React.ReactElement<LoadingLineProps> {
	return (
		<div className={styles.wrapper}>
			<h5 className={styles.title}>{title}</h5>

			<span className={styles.line} />
		</div>
	);
}