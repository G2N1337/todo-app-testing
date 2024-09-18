export type TaskType = {
	id: number
	label: string;
	done: boolean;
}

export type FilterValueType = 'all' | 'done' | 'not done'