import React from 'react';
import { SettingsPanelProps } from './SettingsPanel.props';

export function SettingsPanel({ className, ...props }: SettingsPanelProps): React.ReactElement<SettingsPanelProps> {

	return (
		<div className={className} {...props}>
			SettingsPanel
		</div>
	);
}