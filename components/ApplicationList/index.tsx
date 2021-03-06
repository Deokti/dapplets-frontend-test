import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { setDrag } from '../../redux/actions';
import { ApplicationItem } from '../ApplicationItem';
import { Search } from '../Search';
import { Select } from '../Select';
import styles from './ApplicationList.module.scss';
import { ApplicationListProps } from './ApplicationList.props';
import update from 'immutability-helper';
import { LoadingLine } from '../LoadingLine';

function ApplicationList({ dapplets, tags, setDrag, loading }: ApplicationListProps): React.ReactElement<ApplicationListProps> {
	const findApplication = useCallback((id: string) => {
		const application = dapplets.filter((c) => `${c.id}` === id)[0];
		return {
			application,
			index: dapplets.indexOf(application),
		};
	}, [dapplets]);

	const moveApplication = useCallback((id: string, atIndex: number) => {
		const { application, index } = findApplication(id);
		setDrag(update(dapplets, {
			$splice: [
				[index, 1],
				[atIndex, 0, application],
			],
		}),
		);
	}, [findApplication, dapplets]);

	const [, drop] = useDrop(() => ({ accept: 'VERTICAL' }));
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
			<ul className={styles.list} ref={drop}>
				{
					dapplets && dapplets.map((item) => (
						<li key={item.id}>
							<ApplicationItem
								dapplets={item}
								tags={tags}
								findApplication={findApplication}
								moveApplication={moveApplication}
							/>
						</li>
					))
				}
			</ul>

			{loading && <LoadingLine title="Loading more Dapplets" />}
		</div>
	);
}

const mapStateToProps = ({ dapplets, tags, loading }: IData) => ({ dapplets, tags, loading });

export default connect(mapStateToProps, { setDrag })(ApplicationList);