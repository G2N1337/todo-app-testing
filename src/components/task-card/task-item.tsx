import React from 'react';

import { Task, TaskInputCheckbox, TaskLabel } from '@/styles/tasks';

import { TaskType } from '@/types/TaskType';

type TaskItemProps = {
	task: TaskType;
	onToggleCheck: (id: number) => void;
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleCheck }) => {
	return (
		<Task onClick={() => onToggleCheck(task.id)}>
			<TaskInputCheckbox checked={task.done} type='checkbox' />
			<TaskLabel done={task.done}>{task.label}</TaskLabel>
		</Task>
	);
};
