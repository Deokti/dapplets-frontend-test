import React from 'react';
import { SidePanelProps } from './SidePanel.props';

export function SidePanel({ className, ...props }: SidePanelProps): React.ReactElement<SidePanelProps> {

	return (
		<div {...props} className={className}>

		</div>
	);
}