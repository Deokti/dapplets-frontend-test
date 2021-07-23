import { MenuList, TagsList } from "./index";

export interface DataAction {
	type: string;
	payload: number & MenuList & TagsList
}
