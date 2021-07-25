import { List, ITag, IMenu } from "./index";

export interface IStore {
	data: IData
}

export interface IData {
	menu: IMenu[];
	activeMenu: number;
	myList: List[]
	tags: ITag[]
	dapplets: IDapplets[]
	communityTags: ITag[]
}

export interface IDapplets {
	id: string;
	icon: string;
	title: string;
	author: string;
	rating: number;
	address: string;
	released: string;
	downloads: number;
	description: string;
	text_1: string;
	text_2: string;
	text_3: string;
	text_4: string;
	text_5: string;
	text_6: string;
	text_7: string;
	text_8: string;
	text_9: string;
	tags: string[];
}