import { IMenu, ITag, List } from "../../interfaces";

export interface SidePanelProps {
	className: string
	menu: IMenu[]
	activeMenu: number
	myList: List[]
	tags: ITag[]
	setActiveMenu: (activeMenu: number) => void;
}
