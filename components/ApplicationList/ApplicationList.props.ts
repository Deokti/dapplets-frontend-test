import { ITag } from "../../interfaces";
import { IDapplets } from "../../interfaces/redux.state";

export interface ApplicationListProps {
	dapplets: IDapplets[];
	tags: ITag[]
}