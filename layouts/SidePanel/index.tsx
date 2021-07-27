import React, { useState } from 'react';
import { SidePanelProps } from './SidePanel.props';
import cn from 'classnames';
import styles from './SidePanel.module.scss';
import { Logo } from '../../components/Logo';
import { Tag } from '../../components/Tag';
import { IMenu } from '../../interfaces';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { setActiveMenu, setMenuOpen } from '../../redux/actions';
import { menuIcons } from '../../redux/reducer';
import { Arrow } from '../../components/Arrow';

function SidePanel({ menu, className, activeMenu, myList, tags, setActiveMenu, menuOpen, setMenuOpen }: SidePanelProps): React.ReactElement<SidePanelProps> {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);

	function onChangeMobileMenu() {
		setMobileMenu(i => !i);
	}

	function onClickMenuItem(id: number) {
		setActiveMenu(id);
		setMobileMenu(false);
	}

	function onMenuOpen() {
		setMenuOpen(!menuOpen);
	}

	return (
		<div className={cn(styles.panel, {
			[styles.menuOpen]: menuOpen === false
		}, className)}>
			<header className={styles.header}>
				<Logo />
				<div className={styles.arrow} onClick={onMenuOpen} title={menuOpen ? 'Close Menu' : 'Open Menu'}>
					<Arrow direction="left" />
				</div>
				<span className={styles.mobileMenu} onClick={onChangeMobileMenu}>
					<span />
				</span>
			</header>

			<ul className={cn(styles.category, {
				[styles.mobileOpen]: mobileMenu
			})}>
				{
					menu && menu.map(({ id, name }: IMenu): React.ReactElement => {

						return (
							<li key={id}
								className={cn(styles.categoryItem, {
									[styles.categoryActive]: id === activeMenu,
								})}
								onClick={() => onClickMenuItem(id)}
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
								<a href={link} className={styles.listItemLink} target="_blank"> (<span>{author}</span>)</a>
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

const mapStateToProps = ({ menu, myList, activeMenu, tags, menuOpen }: IData) => ({ menu, activeMenu, myList, tags, menuOpen });

export default connect(mapStateToProps, { setActiveMenu, setMenuOpen })(SidePanel);