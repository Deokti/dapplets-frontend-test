import { MenuList } from "../../interfaces";

export interface SidePanelProps {
	className: string
	menu: MenuList
	activeMenu: number
	setActiveMenu: (activeMenu: number) => void;
}
