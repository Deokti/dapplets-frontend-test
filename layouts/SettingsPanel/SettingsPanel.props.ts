import { HTMLAttributes, DetailedHTMLProps } from "react";
import { ICreateTag, ITag } from "../../interfaces";

export interface SettingsPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags: ITag[]
	communityTags: ITag[]
	createTag: (value: ICreateTag) => void
	createCommunityTag: (value: ICreateTag) => void
	settingOpen: boolean;
	setSettinsOpen: (open: boolean) => void;
}

export interface TagsProps {
	title: string;
	tags: ITag[]
	appearance?: 'my-tag' | 'community-tag'
}