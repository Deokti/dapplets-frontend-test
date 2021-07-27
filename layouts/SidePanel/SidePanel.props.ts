import { IMenu, ITag, List } from "../../interfaces";

export interface SidePanelProps {
	className: string
	menu: IMenu[]
	activeMenu: number
	menuOpen: boolean
	myList: List[]
	tags: ITag[]
	setActiveMenu: (activeMenu: number) => void;
	setMenuOpen: (open: boolean) => void;
}

export interface MobileMenuListProps {
	menu: IMenu[]
	activeMenu: number
	setActiveMenu: (activeMenu: number) => void;
}