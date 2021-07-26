import React from "react";

export interface SearchProps {
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}