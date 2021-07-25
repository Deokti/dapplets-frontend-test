import { ArrowProps } from "./Arrow.props";
import ArrowRightIcon from '../Icons/ArrowRight.svg';
import ArrowLeftIcon from '../Icons/ArrowLeft.svg';

export function Arrow({ direction }: ArrowProps): React.ReactElement<ArrowProps> {
	return (
		<button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
			{direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
		</button>
	);
}