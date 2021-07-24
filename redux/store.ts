import { createStore, Store } from 'redux';
import { rootReducer } from './reducer';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IData } from '../interfaces/redux.state';

// Объявляем makeStore, который будет передаваться в /pages/_app для получения данных
const makeStore = () => createStore(rootReducer, composeWithDevTools());

// настроенная обёртка у которой будет вызываться withRedux для оборачивания _app
export const wrapper = createWrapper<Store<IData>>(makeStore, { debug: true });

