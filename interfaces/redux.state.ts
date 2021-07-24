import { List, ITag, IMenu } from "./index";

export interface IStore {
	data: IData
}

export interface IData {
	menu: IMenu[];
	activeMenu: number;
	myList: List[]
	tags: ITag[]
}