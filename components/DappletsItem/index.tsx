import { useEffect, useState } from 'react';
import { API_URL } from '../../config/API_URL';
import { axios } from '../../config/axios';
import { IDapplets } from '../../interfaces/redux.state';
import { Button } from '../Button';
import { Tag } from '../Tag';
import styles from './DappletsItem.module.scss';
import DragAndDropIcon from '../Icons/DragAndDrop.svg';

interface DappletsItemProps {
	open?: boolean
	state?: 'install' | 'installed'
	item?: IDapplets
}

export function DappletsItem({ open, state, item }: DappletsItemProps): React.ReactElement<DappletsItemProps> {

	function onLoadImage(): string {
		return API_URL.getFile(item.icon);
	}

	function onLoadImageError() {
		onLoadImage();
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<button className={styles.dragAndDrop}>
					<DragAndDropIcon />
				</button>

				<img
					src={onLoadImage()}
					alt={item.title}
					className={styles.icon}
					onError={onLoadImageError}

				/>

				<div className={styles.information}>
					<h4 className={styles.title}>{item.title.substr(0, 30)}</h4>
					<span className={styles.address}>{item.address}</span>
				</div>

				<span className={styles.description}>{item.description}</span>
				<span className={styles.autor}>{item.author}</span>

				<ul className={styles.tagList}>
					{item.tags.map((tag, index) => {
						return (
							<li key={index} className={styles.tagItem}>
								<Tag>{tag}</Tag>
							</li>
						);
					})}
				</ul>

				<Button className={styles.install}>Install</Button>
			</div>

		</div>
	);
}