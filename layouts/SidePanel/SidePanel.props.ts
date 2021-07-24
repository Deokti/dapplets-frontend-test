import { ITag, List, MenuList } from "../../interfaces";

export interface SidePanelProps {
	className: string
	menu: MenuList
	activeMenu: number
	myList: List[]
	setActiveMenu: (activeMenu: number) => void;
}
