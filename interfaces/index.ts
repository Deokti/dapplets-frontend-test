import { IconType } from "react-icons";

export interface IMenu {
	id: number;
	name: string;
	Icon: IconType
}

export type MenuList = Array<IMenu>;

export interface ITags {
	id: string
	name: string
}

export type TagsList = Array<ITags>;