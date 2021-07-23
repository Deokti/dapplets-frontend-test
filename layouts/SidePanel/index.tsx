import React, { useContext } from 'react';
import { SidePanelProps } from './SidePanel.props';
import cn from 'classnames';
import styles from './SidePanel.module.scss';
import { Logo } from '../../components/Logo';
import ArrowLeft from '../../components/Icons/ArrowLeft.svg';
import { Tag } from '../../components/Tag';
import { TagsContext } from '../../context/tags/tags.context';
import { MenuContext, MenuContextProvider } from '../../context/menu/menu.context';
import { IMenu } from '../../interfaces';

function SidePanel({ className }: SidePanelProps): React.ReactElement<SidePanelProps> {
	const { tags } = useContext(TagsContext);
	const { menu, activeMenu, setActiveMenu } = useContext(MenuContext);

	console.log(setActiveMenu);


	return (
		<div className={cn(styles.panel, className)}>
			<header className={styles.header}>
				<Logo />
				<button className={styles.button}>
					<ArrowLeft />
				</button>
			</header>

			<ul className={styles.category}>
				{
					menu && menu.map(({ id, name, Icon }: IMenu): React.ReactElement => {
						return (
							<li key={id}
								className={cn(styles.categoryItem, {
									[styles.categoryActive]: id === activeMenu,
								})}
							>
								<div className={styles.categoryIcon}>
									<Icon size={24} />
								</div>
								<span className={styles.categoryName}>{name}</span>
							</li>
						);
					})
				}
			</ul>

			<div className={styles.tags}>
				<h3 className={styles.tagsTitle}>My tags</h3>
				<ul className={styles.tagsList}>
					{tags.map(({ id, name }) => {
						return (
							<li className={styles.tagsItem} key={id}>
								<Tag>{name}</Tag>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default SidePanel;