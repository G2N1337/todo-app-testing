import React, { useState } from 'react';

import { TaskInputComponent } from '@/components/task-card/task-input';
import { TaskListFooter } from '@/components/task-card/task-footer';
import { TaskList } from '@/components/task-card/list-of-tasks';
import { CardWrapperComponent } from '@/components/task-card/card-wrapper';

import { BodyWrapper, Headline } from '@/styles/general';

import { FilterValueType, TaskType } from '@/types/TaskType';

const TaskCard: React.FC = () => {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [filterValue, setFilterValue] = useState<FilterValueType>('all');

	const [currentInput, setCurrentInput] = useState<string>('');

	const handleEnter = () => {
		if (currentInput.trim()) {
			const newTask: TaskType = {
				id: tasks.length + 1,
				label: currentInput,
				done: false,
			};
			setTasks([...tasks, newTask]);
			setCurrentInput('');
		}
	};

	const toggleTaskDone = (id: number) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
		);
	};
	const clearCompleted = () => {
		setTasks((tasks) => tasks.filter((task) => !task.done));
	};

	const handleFilterChange = (newFilter: FilterValueType) => {
		setFilterValue(newFilter);
	};
	return (
		<BodyWrapper>
			<Headline color='rgb(230, 218, 217)'>todos</Headline>
			<CardWrapperComponent>
				<TaskInputComponent
					placeholder='▽   What needs to be done?'
					name='createTaskInput'
					value={currentInput}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setCurrentInput(e.target.value)
					}
					onEnter={handleEnter}
				/>
				<TaskList
					onToggleTask={toggleTaskDone}
					tasks={tasks}
					filterValue={filterValue}
				/>
				<TaskListFooter
					clearCompleted={clearCompleted}
					filterValue={filterValue}
					handleFilterChange={handleFilterChange}
					tasks={tasks}
				/>
			</CardWrapperComponent>
		</BodyWrapper>
	);
};
export default TaskCard;
