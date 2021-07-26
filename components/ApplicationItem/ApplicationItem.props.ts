import { ITag } from "../../interfaces";
import { IDapplets } from "../../interfaces/redux.state";

export interface ApplicationItemProps {
	dapplets?: IDapplets
	tags: ITag[];
}
