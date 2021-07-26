import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	install?: boolean;
	children: React.ReactNode;
	appearance?: 'install' | 'default'
	mobile?: boolean
}