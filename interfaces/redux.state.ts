import { MenuList } from "./index";

export interface IStore {
	data: IData
}

export interface IData {
	menu: MenuList,
	activeMenu: number,
}