import React from 'react';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { ApplicationItem } from '../ApplicationItem';
import { Search } from '../Search';
import { Select } from '../Select';
import styles from './ApplicationList.module.scss';
import { ApplicationListProps } from './ApplicationList.props';

function ApplicationList({ dapplets, tags }: ApplicationListProps): React.ReactElement<ApplicationListProps> {

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Search />

				<div className={styles.selects}>
					<Select defaultValue="Release Date" values={['1', '2', '3']} />
					<Select defaultValue="Descending" values={['1', '2', '3']} />
				</div>
			</header>

			<span className={styles.line} />
			<ul className={styles.list}>
				{
					dapplets && dapplets.map((item) => (
						<li key={item.id}>
							<ApplicationItem dapplets={item} tags={tags} />
						</li>
					))
				}
			</ul>
		</div>

	);
}

const mapStateToProps = ({ dapplets, tags }: IData) => ({ dapplets, tags });

export default connect(mapStateToProps)(ApplicationList);