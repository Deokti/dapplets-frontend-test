import React, { useContext } from 'react';
import { SidePanelProps } from './SidePanel.props';
import cn from 'classnames';
import styles from './SidePanel.module.scss';
import { Logo } from '../../components/Logo';
import ArrowLeft from '../../components/Icons/ArrowLeft.svg';
import { Tag } from '../../components/Tag';
import { TagsContext } from '../../context/tags/tags.context';
import { IMenu } from '../../interfaces';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { setActiveMenu } from '../../redux/actions';

function SidePanel({ menu, className, activeMenu, setActiveMenu }: SidePanelProps): React.ReactElement<SidePanelProps> {
	const { tags } = useContext(TagsContext);

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
								onClick={() => setActiveMenu(id)}
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

const mapStateToProps = ({ menu, activeMenu }: IData) => ({ menu, activeMenu });

export default connect(mapStateToProps, { setActiveMenu })(SidePanel);