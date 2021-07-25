import React from 'react';
import { connect } from 'react-redux';
import { ITag } from '../../interfaces';
import { IDapplets, IData } from '../../interfaces/redux.state';
import { DappletsItem } from '../DappletsItem';
import styles from './Dapplets.module.scss';


export interface DappletsProps {
	dapplets: IDapplets[];
	tags: ITag[]
}

function Dapplets({ dapplets, tags }: DappletsProps): React.ReactElement<DappletsProps> {

	return (
		<div className={styles.wrapper}>

			<span className={styles.line} />

			<ul className={styles.list}>
				{
					dapplets && dapplets.map((item) => (
						<li key={item.id}>
							<DappletsItem dapplets={item} tags={tags} />
						</li>
					))
				}
			</ul>
		</div>

	);
}

const mapStateToProps = ({ dapplets, tags }: IData) => ({ dapplets, tags });

export default connect(mapStateToProps)(Dapplets);