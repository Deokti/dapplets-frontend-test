import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	placeholder: string;
	value?: string;
	className?: string;
	name?: string
	onClick?: () => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}