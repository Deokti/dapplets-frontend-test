import { createContext, useState } from "react";
import { MenuList } from "../../interfaces";
import { FiCodesandbox, FiGrid, FiUsers } from 'react-icons/fi';
import { BiHeart, BiTrendingUp } from 'react-icons/bi';

export interface IMenuContext {
	menu: MenuList;
	activeMenu: number;
	setActiveMenu?: (seleted: number) => void;
}

export const MenuContext = createContext<IMenuContext>({
	menu: [
		{ id: 0, name: 'All Dapplets', Icon: FiCodesandbox },
		{ id: 1, name: 'Editor’s Choice', Icon: BiHeart },
		{ id: 2, name: 'Essential Dapplets', Icon: FiGrid },
		{ id: 3, name: 'Social Networks', Icon: FiUsers },
		{ id: 4, name: 'Financial Dapplets', Icon: BiTrendingUp }
	],
	activeMenu: 0,
});

export const MenuContextProvider = ({ children, menu, activeMenu }: IMenuContext & { children: React.ReactNode }): React.ReactElement => {
	const [active, setActive] = useState(activeMenu);

	function setActiveMenu(selectred: number) {
		setActive(selectred);
	}

	return (
		<MenuContext.Provider value={{ menu, activeMenu: active, setActiveMenu }}>
			{children}
		</MenuContext.Provider>
	);
};