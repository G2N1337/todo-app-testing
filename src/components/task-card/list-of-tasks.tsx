import React, { useMemo } from 'react';

import { TaskItem } from '@/components/task-card/task-item';

import { List, TaskPlaceholder } from '@/styles/tasks';

import { FilterValueType, TaskType } from '@/types/TaskType';

type TaskListComponent = {
	tasks: TaskType[];
	onToggleTask: (id: number) => void;
	filterValue: FilterValueType;
};

export const TaskList: React.FC<TaskListComponent> = ({
	tasks,
	onToggleTask,
	filterValue,
}) => {
	const filteredTasks = useMemo(() => {
		return tasks.filter((task) => {
			switch (filterValue) {
				case 'all':
					return true;
				case 'done':
					return task.done;
				case 'not done':
					return !task.done;
				default:
					return true;
			}
		});
	}, [filterValue, tasks]);
	if (tasks.length === 0) {
		return (
			<List>
				<TaskPlaceholder>Create a Task</TaskPlaceholder>
			</List>
		);
	}
	return (
		<List className='task-list'>
			{filteredTasks.length > 0 ? (
				filteredTasks.map((task) => (
					<TaskItem onToggleCheck={onToggleTask} key={task.id} task={task} />
				))
			) : (
				<TaskPlaceholder>
					No tasks in this category, please change filters
				</TaskPlaceholder>
			)}
		</List>
	);
};
