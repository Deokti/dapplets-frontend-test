/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _debounce(cb: any, ms: number): any {
	let timer: NodeJS.Timeout;

	return function (...args: any): void {
		const callback = () => cb(...args);
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
}