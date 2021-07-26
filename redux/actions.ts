import { createAction } from "redux-actions";

export const setActiveMenu = createAction('SET_ACTIVE_MENU');
export const setTags = createAction('SET_TAGS');
export const setDapplets = createAction('SET_DAPPLERS');
export const createTag = createAction('CREATE_TAG');
export const createCommunityTag = createAction('CREATE_COMMUNITY_TAG');
export const setDrag = createAction('SET_DRAG');