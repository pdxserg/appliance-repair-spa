// src/data/fitnessServices.ts
import { ServiceItem } from '../types';

export const fitnessServices: ServiceItem[] = [
	{
		id: 'treadmill',
		name: 'Treadmill Repair',
		description: 'Professional treadmill repair services. We fix motor issues, belt problems, console errors, and more.',
		icon: 'treadmill',
	},
	{
		id: 'bike',
		name: 'Exercise Bike Repair',
		description: 'Expert repair for all types of exercise bikes. We fix resistance issues, console problems, and mechanical failures.',
		icon: 'bike',
	},
	{
		id: 'elliptical',
		name: 'Elliptical Repair',
		description: 'Comprehensive elliptical machine repair. We fix resistance problems, noise issues, console errors, and more.',
		icon: 'elliptical',
	},
	{
		id: 'strength',
		name: 'Gym Equipment Services',
		description: 'Professional repair for weight machines, cable systems, and other gym training equipment.',
		icon: 'dumbbell',
	},
];