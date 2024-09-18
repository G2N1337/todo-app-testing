import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '@/components/task-card';

describe('TaskCard', () => {
	it('creates a task', () => {
		render(<TaskCard />);
		const input = screen.getByPlaceholderText(/What needs to be done?/i);
		fireEvent.change(input, { target: { value: 'New Task' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		expect(screen.getByText('New Task')).toBeInTheDocument();
	});
	it('makes the task done', () => {
		render(<TaskCard />);
		const input = screen.getByPlaceholderText(/What needs to be done?/i);
		fireEvent.change(input, { target: { value: 'New Task' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		const checkbox = screen.getByRole('checkbox');
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
	});
	it('deletes completed tasks', () => {
		render(<TaskCard />);
		const input = screen.getByPlaceholderText(/What needs to be done?/i);
		fireEvent.change(input, { target: { value: 'New Task Completed' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		fireEvent.change(input, { target: { value: 'New Task Uncompleted' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		const createdTaskCompleted = screen.getByText('New Task Completed');
		const parentDiv = createdTaskCompleted.parentElement;
		const checkbox = parentDiv?.querySelector('input[type=checkbox]');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		fireEvent.click(checkbox as HTMLInputElement);
		expect(checkbox).toBeChecked();
		const deleteButton = screen.getByText('Clear completed');
		expect(deleteButton).toBeInTheDocument();
		fireEvent.click(deleteButton);
		const taskList = document.getElementsByClassName('task-list')[0];
		expect(taskList.children.length).toBe(1);
	});
	it('displays filtered tasks correctly', () => {
		render(<TaskCard />);
		const input = screen.getByPlaceholderText(/What needs to be done?/i);
		fireEvent.change(input, { target: { value: 'New Task Completed' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		fireEvent.change(input, { target: { value: 'New Task Uncompleted' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		const createdTaskCompleted = screen.getByText('New Task Completed');
		const parentDiv = createdTaskCompleted.parentElement;
		const checkbox = parentDiv?.querySelector('input[type=checkbox]');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		fireEvent.click(checkbox as HTMLInputElement);
		expect(checkbox).toBeChecked();
		const activeButton = screen.getByText('Active');
		const completedButton = screen.getByText('Completed');
		fireEvent.click(activeButton);
		const taskListActive = document.getElementsByClassName('task-list')[0];
		expect(taskListActive.children.length).toBe(1);
		fireEvent.click(completedButton);
		const taskListCompleted = document.getElementsByClassName('task-list')[0];
		expect(taskListCompleted.children.length).toBe(1);
	});
});
