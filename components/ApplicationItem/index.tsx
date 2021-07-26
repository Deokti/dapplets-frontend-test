import { useEffect, useState } from 'react';
import { API_URL } from '../../config/API_URL';
import { Button } from '../Button';
import { Tag } from '../Tag';
import DragAndDropIcon from '../Icons/DragAndDrop.svg';
import cn from 'classnames';
import React from 'react';
import { ApplicationItemProps } from './ApplicationItem.props';
import styles from './ApplicationItem.module.scss';
import { ApplicationItemBottom } from './ApplicationItemBottom';
import { notification } from '../../utils/notification';

import DownloadIcon from '../Icons/Dowloand.svg';
import CheckIcon from '../Icons/Check.svg';
import { useDrag, useDrop } from 'react-dnd';


export function ApplicationItem({ dapplets, tags, findApplication, moveApplication }: ApplicationItemProps): React.ReactElement<ApplicationItemProps> {
	useEffect(onLoadImage, []);
	useEffect(onGetLocalStorage, []);

	const [loadImage, setLoadImage] = useState<boolean>(true);
	const [imageUrl, setImageUrl] = useState<string>('');
	const [install, setInstall] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	function onLoadImage(): void {
		setImageUrl(API_URL.getFile(dapplets.icon));
	}

	async function onError() {
		setLoadImage(false);
		notification({ content: `An error occured while loading the image by - ${dapplets.title}`, appearance: 'error' });
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

	function onChangeOpened() {
		setOpen(i => !i);
	}

	const originalIndex = findApplication(dapplets.id).index;
	const [{ isDragging }, drag, preview] = useDrag(() => ({
		type: "VERTICAL",
		item: { id: dapplets.id, originalIndex: originalIndex },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		}),
		end: (item, monitor) => {
			const { id: droppedId, originalIndex } = item;
			const didDrop = monitor.didDrop();

			if (!didDrop) {
				moveApplication(droppedId, originalIndex);
			}
		}
	}));

	const [, drop] = useDrop({
		accept: 'VERTICAL',
		canDrop: () => false,
		hover({ id: from }) {
			const { index: _in } = findApplication(dapplets.id);
			moveApplication(from, _in);
		}
	});

	const opacity = isDragging ? 0 : 1;
	return (
		<div className={cn(styles.wrapper, {
			[styles.opened]: open === true,
			[styles.closed]: open === false,
		})}
			style={{ opacity }}
			ref={preview}
		>
			<div className={styles.top}>
				<button className={styles.dragAndDrop} ref={node => drag(drop(node))}>
					<DragAndDropIcon />
				</button>

				<div className={styles.topContent} onClick={onChangeOpened}>

					<div className={styles.information}>
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

						<div className={styles.informationInner}>
							<h4 className={styles.title}>{dapplets.title.substr(0, 30)}</h4>
							<span className={styles.address}>{dapplets.address}</span>
							<span className={styles.authorMobile}>{dapplets.author}</span>
						</div>
					</div>

					<span className={styles.description}>{dapplets.description.substr(0, 60)}</span>
					<span className={styles.author}>{dapplets.author}</span>

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
				</div>

				<Button onClick={onSetInstallApp} install={install} className={styles.buttonDesktop}>
					{install ? 'Uninstall' : 'Install'}
				</Button>

				<Button
					onClick={onSetInstallApp}
					install={install}
					className={styles.buttonMobile}
					mobile
				>
					{install ? <CheckIcon /> : <DownloadIcon />}
				</Button>
			</div>

			{open && <ApplicationItemBottom dapplets={dapplets} onClick={onChangeOpened} />}
		</div>
	);
}

