import { BiHeart, BiTrendingUp } from 'react-icons/bi';
import { FiCodesandbox, FiGrid, FiUsers } from 'react-icons/fi';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IData } from '../interfaces/redux.state';
import { setActiveMenu, setTags } from './actions';

const initialState: IData = {
	menu: [
		{ id: 0, name: 'All Dapplets', Icon: FiCodesandbox },
		{ id: 1, name: 'Editor’s Choice', Icon: BiHeart },
		{ id: 2, name: 'Essential Dapplets', Icon: FiGrid },
		{ id: 3, name: 'Social Networks', Icon: FiUsers },
		{ id: 4, name: 'Financial Dapplets', Icon: BiTrendingUp }
	],
	activeMenu: 0,
	myList: [
		{ id: 0, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
		{ id: 1, title: 'Best Financial dapplets by Jack', link: 'https://www.youtube.com/watch?v=BG3DIqg3dtY', author: 'Jack' },
		{ id: 2, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
	],
	tags: [],
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

		default: { return state; }
	}
};

