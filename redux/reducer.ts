import { BiHeart, BiTrendingUp } from 'react-icons/bi';
import { FiCodesandbox, FiGrid, FiUsers } from 'react-icons/fi';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IData } from '../interfaces/redux.state';
import { setActiveMenu } from './actions';

const initialState: IData = {
	menu: [
		{ id: 0, name: 'All Dapplets', Icon: FiCodesandbox },
		{ id: 1, name: 'Editor’s Choice', Icon: BiHeart },
		{ id: 2, name: 'Essential Dapplets', Icon: FiGrid },
		{ id: 3, name: 'Social Networks', Icon: FiUsers },
		{ id: 4, name: 'Financial Dapplets', Icon: BiTrendingUp }
	],
	activeMenu: 0
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

		default: { return state; }
	}
};

