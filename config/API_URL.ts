export const API_URL = {
	tags: '/tags',
	dapplets: '/dapplets',
	getFile: (filename: string): string => {
		return 'https://dapplets-hiring-api.herokuapp.com/api/v1/files/' + filename
	}
};