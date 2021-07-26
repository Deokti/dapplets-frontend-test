import { ITag } from "../../interfaces";
import { IDapplets } from "../../interfaces/redux.state";

export interface ApplicationItemProps {
	dapplets?: IDapplets
	tags: ITag[];
	findApplication: (id: string) => {
		application: IDapplets;
		index: number;
	};
	moveApplication: (id: string, atIndex: number) => void;
}
