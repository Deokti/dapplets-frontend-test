import { ITag } from "../../interfaces";
import { IDapplets } from "../../interfaces/redux.state";

export interface DappletsProps {
	dapplets: IDapplets[];
	tags: ITag[]
}