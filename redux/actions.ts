import { createAction } from "redux-actions";

export const setActiveMenu = createAction('SET_ACTIVE_MENU');
export const setTags = createAction('SET_TAGS');
export const setDapplets = createAction('SET_DAPPLERS');
export const createTag = createAction('CREATE_TAG');
export const createCommunityTag = createAction('CREATE_COMMUNITY_TAG');
export const setDrag = createAction('SET_DRAG');

// Номер записи с которой нужно получить ответ от /dapplets
export const setRequestStartNumber = createAction('SET_REQUEST_START_NUMBER');

// Нужен для того, чтобы показывать или убирать 
export const setLoading = createAction('SET_LOADING');

export const setMenuOpen = createAction('SET_OPEN_MENU');
export const setSettinsOpen = createAction('SET_SETTING_MENU');
