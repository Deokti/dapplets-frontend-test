export function scrollStatus(ref: React.MutableRefObject<HTMLElement>): number {
	const { current } = ref;
	const sizeElement = current.getBoundingClientRect().bottom;
	const scroll = sizeElement - (window.innerHeight);
	return Math.floor(scroll);
}