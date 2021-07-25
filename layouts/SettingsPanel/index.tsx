import React, { useState } from 'react';
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
import { createCommunityTag, createTag } from '../../redux/actions';
import { ICreateTag } from '../../interfaces';

interface IValue {
	myTag: string;
	communityTag: string;
}

function SettingsPanel({ className, tags, communityTags, createTag, createCommunityTag }: SettingsPanelProps): React.ReactElement<SettingsPanelProps> {
	const [value, setValue] = useState<IValue>({
		myTag: '',
		communityTag: ''
	});

	function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = event.currentTarget;
		setValue((state) => ({ ...state, [name]: value }));
	}

	function newTag(name: string): ICreateTag {
		return {
			id: Date.now().toString(),
			name,
		};
	}

	function onCreateMyTag() {
		if (value.myTag.length < 3) return false;

		createTag(newTag(value.myTag));
		setValue((state) => ({ ...state, myTag: '' }));
	}

	function onCreateCommunityTag() {
		if (value.communityTag.length < 3) return false;

		createCommunityTag(newTag(value.communityTag));
		setValue((state) => ({ ...state, communityTag: '' }));
	}

	return (
		<div className={cn(styles.wrapper, className)}>
			<Arrow direction="right" />

			<div className={styles.setting}>
				<h4 className={styles.title}>Dapplet Settings</h4>

				<Input
					title="New tag"
					placeholder="Tag name"
					name="myTag"
					onClick={onCreateMyTag}
					onChange={onChange}
					value={value.myTag}
				/>

				<Input
					title="New community tag"
					placeholder="Tag name"
					className={styles.inputMargin}
					onChange={onChange}
					onClick={onCreateCommunityTag}
					name="communityTag"
					value={value.communityTag}
				/>

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

export default connect(mapStateToProps, { createTag, createCommunityTag })(SettingsPanel);