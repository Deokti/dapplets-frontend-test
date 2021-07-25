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
import { DappletsItemProps } from './DappletsItem.props';


export function DappletsItem({ dapplets, tags }: DappletsItemProps): React.ReactElement<DappletsItemProps> {
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

	return (
		<div className={cn(styles.wrapper, {
			[styles.opened]: open === true,
			[styles.closed]: open === false,
		})}
		>
			<div className={styles.top}>
				<button className={styles.dragAndDrop}>
					<DragAndDropIcon />
				</button>

				<div className={styles.topContent} onClick={onChangeOpened}>
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
				</div>

				<Button onClick={onSetInstallApp} install={install}>
					{install ? 'Uninstall' : 'Install'}
				</Button>
			</div>

			{open && <DappletsItemBottom dapplets={dapplets} onClick={onChangeOpened} />}
		</div>
	);
}

function DappletsItemBottom({ dapplets, onClick }: { dapplets: IDapplets, onClick: () => void }): React.ReactElement {
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
