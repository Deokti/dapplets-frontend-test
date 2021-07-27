import React, { HTMLAttributes, DetailedHTMLProps } from "react";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setSettinsOpen: (open: boolean) => void;
	settingOpen: boolean;
}