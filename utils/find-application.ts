import { IDapplets } from "../interfaces/redux.state";

interface findApplicationReturn {
	application: IDapplets;
	index: number
}

export function findApplication(id: string, dapplets: IDapplets[]): findApplicationReturn {
	const application = dapplets.filter((c) => `${c.id}` === id)[0];
	return {
		application,
		index: dapplets.indexOf(application),
	};
}