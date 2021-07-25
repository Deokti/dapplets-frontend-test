import React, { HTMLAttributes, DetailedHTMLProps } from "react";
import { ITag } from "../../interfaces";

export interface SettingsPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags: ITag[]
	communityTags: ITag[]
}

export interface TagsProps {
	title: string;
	tags: ITag[]
	appearance?: 'my-tag' | 'community-tag'
}