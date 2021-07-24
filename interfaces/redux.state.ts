import { List, MenuList, ITag } from "./index";

export interface IStore {
	data: IData
}

export interface IData {
	menu: MenuList;
	activeMenu: number;
	myList: List[]
	tags: ITag[]
}