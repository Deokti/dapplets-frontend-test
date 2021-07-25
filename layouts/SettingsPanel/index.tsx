import React from 'react';
import cn from 'classnames';
import { SettingsPanelProps, TagsProps } from './SettingsPanel.props';
import styles from './SettingsPanel.module.scss';
import { Arrow } from '../../components/Arrow';
import { Input } from '../../components/Input';
import { connect } from 'react-redux';
import { IData } from '../../interfaces/redux.state';
import { Tag } from '../../components/Tag';
import { workingOn } from './working-on';
import WorkingStateIcon from '../../components/Icons/WorkingState.svg';

function SettingsPanel({ className, tags, communityTags }: SettingsPanelProps): React.ReactElement<SettingsPanelProps> {

	return (
		<div className={cn(styles.wrapper, className)}>
			<Arrow direction="right" />

			<div className={styles.setting}>
				<h4 className={styles.title}>Dapplet Settings</h4>

				<Input title="Create new list" placeholder="List Name" />
				<Input title="New tag" placeholder="Tag name" className={styles.inputMargin} />

				<Tags title="My tags" tags={tags} />
				<Tags title="Community tags" tags={communityTags} appearance="community-tag" />

				<span className={styles.line} />

				<div className={styles.working}>
					<h4 className={cn(styles.title, styles.tagTitle)}>Working on</h4>

					<ul className={styles.workingList}>
						{
							workingOn.map((item) => {
								return (
									<li key={item.id} className={styles.workingItem}>
										<WorkingStateIcon />
										<span className={styles.workingTitle}>{item.title}</span>
									</li>
								);
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
}


function Tags({ tags, title, appearance = 'my-tag' }: TagsProps): React.ReactElement<TagsProps> {
	return (
		<div className={styles.tags}>
			<h4 className={cn(styles.title, styles.tagTitle)}>{title}</h4>

			<ul className={styles.tagsList}>
				{
					tags && tags.map((tag) => (
						<li key={tag.id + tag.name} className={styles.tagsItem}>
							<Tag appearance={appearance}>{tag.name}</Tag>
						</li>
					))
				}
			</ul>
		</div>
	);
}

const mapStateToProps = ({ tags, communityTags }: IData) => ({ tags, communityTags });

export default connect(mapStateToProps)(SettingsPanel);