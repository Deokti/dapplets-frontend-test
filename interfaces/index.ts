import { IconType } from "react-icons";

export interface IMenu {
	id: number;
	name: string;
	Icon: IconType
}

export type MenuList = Array<IMenu>;

export interface ITag {
	id: string
	name: string
}

export interface List {
	id: number;
	title: string
	link: string
	author: string
}
