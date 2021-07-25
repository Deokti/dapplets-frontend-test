import { useEffect, useState } from 'react';
import { API_URL } from '../../config/API_URL';
import { IDapplets } from '../../interfaces/redux.state';
import { Button } from '../Button';
import { Tag } from '../Tag';
import styles from './DappletsItem.module.scss';
import DragAndDropIcon from '../Icons/DragAndDrop.svg';
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
	useEffect(onLoadImage, []);
	useEffect(onGetLocalStorage, []);

	const [loadImage, setLoadImage] = useState<boolean>(true);
	const [imageUrl, setImageUrl] = useState<string>('');
	const [install, setInstall] = useState<boolean>(false);

	function onLoadImage(): void {
		setImageUrl(API_URL.getFile(dapplets.icon));
	}

	async function onError() {
		setLoadImage(false);
		setImageUrl('./no-image.jpg');
	}

	async function onLoad() {
		setLoadImage(false);
	}

	function onSetInstallApp() {
		setInstall(i => !i);
		onSaveLocalStorage(!install);
	}

	function onSaveLocalStorage(installState: boolean) {
		localStorage.setItem(dapplets.id, JSON.stringify(installState));
	}

	function onGetLocalStorage() {
		const getInstalState = localStorage.getItem(dapplets.id);

		if (getInstalState !== null) {
			setInstall(JSON.parse(getInstalState));
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<button className={styles.dragAndDrop}>
					<DragAndDropIcon />
				</button>

				<div className={styles.image}>
					{loadImage && <img src="./spinner-gif.gif" alt="" />}

					<img
						src={imageUrl}
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
								{Number(tag) < tags.length && (
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
				<Button onClick={onSetInstallApp} install={install}>
					{install ? 'Uninstall' : 'Install'}
				</Button>
			</div>
		</div>
	);
}
