import React, { useMemo } from 'react';

import { ThinText, UnstyledButton, Center } from '@/styles/general';

import { TaskListFooter as FooterStyle } from '@/styles/tasks';

import { FilterValueType, TaskType } from '@/types/TaskType';

type TaskListFooter = {
	tasks: TaskType[];
	filterValue: FilterValueType;
	handleFilterChange: (filterValue: FilterValueType) => void;
	clearCompleted: () => void;
};

export const TaskListFooter: React.FC<TaskListFooter> = ({
	tasks,
	filterValue,
	handleFilterChange,
	clearCompleted,
}) => {
	const tasksLeft = useMemo(() => {
		return tasks.length;
	}, [tasks]);
	return (
		<FooterStyle>
			<ThinText>
				{tasksLeft} item{tasksLeft > 1 ? 's' : ''} left
			</ThinText>
			<Center direction='row'>
				<UnstyledButton
					showBorder={filterValue === 'all'}
					onClick={() => handleFilterChange('all')}
				>
					All
				</UnstyledButton>
				<UnstyledButton
					showBorder={filterValue === 'not done'}
					onClick={() => handleFilterChange('not done')}
				>
					Active
				</UnstyledButton>
				<UnstyledButton
					showBorder={filterValue === 'done'}
					onClick={() => handleFilterChange('done')}
				>
					Completed
				</UnstyledButton>
			</Center>
			<UnstyledButton onClick={clearCompleted}>Clear completed</UnstyledButton>
		</FooterStyle>
	);
};
