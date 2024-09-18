import { TaskInput } from '@/styles/tasks';
import React from 'react';

type TaskInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	onEnter?: () => void;
};

export const TaskInputComponent: React.FC<TaskInputProps> = ({
	onEnter,
	...props
}) => {
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && onEnter) {
			onEnter();
		}
	};

	return <TaskInput {...props} onKeyDown={handleKeyDown} />;
};
