import React from 'react';

import { CardWrapper } from '@/styles/general';
import { ShadowLayer } from '@/styles/tasks';

type CardWrapperType = {
	children: React.ReactNode;
};

export const CardWrapperComponent: React.FC<CardWrapperType> = ({
	children,
}) => {
	return (
		<CardWrapper>
			{children}
			<ShadowLayer />
			<ShadowLayer
				style={{
					width: '99%',
					bottom: -6,
				}}
			/>
		</CardWrapper>
	);
};
