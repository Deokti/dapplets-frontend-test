import { ITag } from "../../interfaces";
import { IDapplets } from "../../interfaces/redux.state";

export interface DappletsItemProps {
	dapplets?: IDapplets
	tags: ITag[];
}
