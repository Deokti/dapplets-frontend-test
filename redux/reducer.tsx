import { BiHeart, BiTrendingUp } from 'react-icons/bi';
import { FiCodesandbox, FiGrid, FiUsers } from 'react-icons/fi';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IData } from '../interfaces/redux.state';
import { setActiveMenu, setDapplets, setTags } from './actions';

export const menuIcons = {
	0: <FiCodesandbox size={24} />,
	1: <BiHeart size={24} />,
	2: <FiGrid size={24} />,
	3: <FiUsers size={24} />,
	4: <BiTrendingUp size={24} />,
};

const initialState: IData = {
	menu: [
		{ id: 0, name: 'All Dapplets' },
		{ id: 1, name: 'Editor’s Choice' },
		{ id: 2, name: 'Essential Dapplets' },
		{ id: 3, name: 'Social Networks' },
		{ id: 4, name: 'Financial Dapplets' }
	],
	activeMenu: 0,
	myList: [
		{ id: 0, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
		{ id: 1, title: 'Best Financial dapplets by Jack', link: 'https://www.youtube.com/watch?v=BG3DIqg3dtY', author: 'Jack' },
		{ id: 2, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
	],
	tags: [],
	communityTags: [
		{ id: '0', name: 'Social' },
		{ id: '1', name: 'Top 100' },
		{ id: '2', name: 'Testing' },
		{ id: '3', name: 'Favourites' },
	],
	dapplets: [],
};

// create your reducer
export const rootReducer = (state: IData = initialState, action: AnyAction): IData => {
	switch (action.type) {
		case HYDRATE:
			// Attention! This will overwrite client state! Real apps should use proper reconciliation.
			return { ...state, ...action.payload };

		case setActiveMenu.toString(): {
			return {
				...state,
				activeMenu: action.payload
			};
		}

		case setTags.toString(): {
			return {
				...state,
				tags: action.payload
			};
		}

		case setDapplets.toString(): {
			return {
				...state,
				dapplets: action.payload
			};
		}

		default: { return state; }
	}
};

