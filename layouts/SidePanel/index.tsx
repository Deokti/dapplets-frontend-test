import React from 'react';
import { SidePanelProps } from './SidePanel.props';
import cn from 'classnames';
import styles from './SidePanel.module.scss';
import { Logo } from '../../components/Logo';
import ArrowLeft from '../../components/Icons/ArrowLeft.svg';
import { Tag } from '../../components/Tag';
import { IMenu } from '../../interfaces';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { setActiveMenu } from '../../redux/actions';
import { menuIcons } from '../../redux/reducer';

function SidePanel({ menu, className, activeMenu, myList, tags, setActiveMenu }: SidePanelProps): React.ReactElement<SidePanelProps> {

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
					menu && menu.map(({ id, name }: IMenu): React.ReactElement => {
						return (
							<li key={id}
								className={cn(styles.categoryItem, {
									[styles.categoryActive]: id === activeMenu,
								})}
								onClick={() => setActiveMenu(id)}
							>
								<div className={styles.categoryIcon}>
									{menuIcons[id]}
								</div>
								<span className={styles.categoryName}>{name}</span>
							</li>
						);
					})
				}
			</ul>

			<div className={styles.list}>
				<h3 className={styles.listTitle}>My lists</h3>

				<ul className={styles.listItems}>
					{myList.map(({ id, title, link, author }) => {
						return (
							<li key={id} className={styles.listItem}>
								<span className={styles.listItemName}>{title}</span>
								<a href={link} className={styles.listItemLink}> (<span>{author}</span>)</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={styles.list}>
				<h3 className={styles.listTitle}>My tags</h3>
				<ul className={cn(styles.listItems, styles.tagItems)}>
					{tags && tags.map(({ id, name }) => {
						return (
							<li className={cn(styles.listItem, styles.tagsItem)} key={id}>
								<Tag>{name}</Tag>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

const mapStateToProps = ({ menu, myList, activeMenu, tags }: IData) => ({ menu, activeMenu, myList, tags });

export default connect(mapStateToProps, { setActiveMenu })(SidePanel);