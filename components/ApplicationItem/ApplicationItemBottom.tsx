import { IDapplets } from '../../interfaces/redux.state';
import styles from './ApplicationItem.module.scss';

export function ApplicationItemBottom({ dapplets, onClick }: { dapplets: IDapplets, onClick: () => void }): React.ReactElement {
	return (
		<div className={styles.bottom} onClick={onClick}>
			<div className={styles.left}>
				<h5 className={styles.textTitle}>Semper neque</h5>
				<p className={styles.textDescription}>{dapplets.text_1}</p>
			</div>

			<div className={styles.right}>
				<ul className={styles.listText}>
					{dapplets.text_2 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Semper neque</h5>
							<p className={styles.textDescription}>{dapplets.text_2}</p>
						</li>
					)}
					{dapplets.text_3 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Leo ipsum.</h5>
							<p className={styles.textDescription}>{dapplets.text_3}</p>
						</li>
					)}
					{dapplets.text_4 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Elit sagittis et.</h5>
							<p className={styles.textDescription}>{dapplets.text_4}</p>
						</li>
					)}
				</ul>
				<ul className={styles.listText}>
					{dapplets.text_5 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Aliquam.</h5>
							<p className={styles.textDescription}>{dapplets.text_5}</p>
						</li>
					)}
					{dapplets.text_6 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>In euismod.</h5>
							<p className={styles.textDescription}>{dapplets.text_6}</p>
						</li>
					)}
					{dapplets.text_7 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Justo amet.</h5>
							<p className={styles.textDescription}>{dapplets.text_7}</p>
						</li>
					)}
				</ul>
				<ul className={styles.listText}>
					{dapplets.text_8 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Urna.</h5>
							<p className={styles.textDescription}>{dapplets.text_8}</p>
						</li>
					)}
					{dapplets.text_9 && (
						<li className={styles.rightItem}>
							<h5 className={styles.textTitle}>Nam diam.</h5>
							<p className={styles.textDescription}>{dapplets.text_9}</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}
