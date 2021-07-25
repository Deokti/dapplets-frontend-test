import { useEffect, useState } from 'react';
import { API_URL } from '../../config/API_URL';
import { axios } from '../../config/axios';
import { IDapplets } from '../../interfaces/redux.state';
import { Button } from '../Button';
import { Tag } from '../Tag';
import styles from './DappletsItem.module.scss';
import DragAndDropIcon from '../Icons/DragAndDrop.svg';
import SpinnerImageIcon from '../Icons/Spinner.svg';
import cn from 'classnames';
import { ITag } from '../../interfaces';
import React from 'react';

interface DappletsItemProps {
	open?: boolean
	state?: 'install' | 'installed'
	dapplets?: IDapplets
	tags: ITag[];
}

export function DappletsItem({ open, state, dapplets, tags }: DappletsItemProps): React.ReactElement<DappletsItemProps> {
	const [loadImage, setLoadImage] = useState(true);

	function onLoadImage(): string {
		try {
			const response = API_URL.getFile(dapplets.icon);
			return response;

		} catch (error) {
			console.error('При загрузке изображения произошла ошибка -->', error);
		}
	}

	async function onError() {
		console.log();
	}

	async function onLoad() {
		setLoadImage(false);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<button className={styles.dragAndDrop}>
					<DragAndDropIcon />
				</button>

				<div className={styles.image}>
					{loadImage && <SpinnerImageIcon />}

					<img
						src={onLoadImage()}
						alt={dapplets.title}
						className={cn(styles.icon, { [styles.iconLoad]: loadImage })}
						onLoad={onLoad}
						onError={onError}
					/>
				</div>


				<div className={styles.information}>
					<h4 className={styles.title}>{dapplets.title.substr(0, 30)}</h4>
					<span className={styles.address}>{dapplets.address}</span>
				</div>

				<span className={styles.description}>{dapplets.description.substr(0, 60)}</span>
				<span className={styles.autor}>{dapplets.author}</span>

				<ul className={styles.tagList}>
					{dapplets.tags.map((tag) => {
						return (
							<li key={tag}>
								{Number(tag) < 8 && (
									<div className={styles.tagItem}>
										<Tag>
											{tags[tag]?.name}
										</Tag>
									</div>
								)}
							</li>
						);
					})}
				</ul>

				<Button className={styles.install}>Install</Button>
			</div>

		</div>
	);
}