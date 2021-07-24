import { createStore, Store } from 'redux';
import { IState, rootReducer } from './reducer';
import { createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

// Объявляем makeStore, который будет передаваться в /pages/_app для получения данных
const makeStore = (context: Context) => createStore(rootReducer, composeWithDevTools());

// настроенная обёртка у которой будет вызываться withRedux для оборачивания _app
export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true });

