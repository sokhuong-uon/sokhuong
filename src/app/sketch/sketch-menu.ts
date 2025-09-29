import { Menu } from '@/features/sketch/types/sketch-menu'

export const menu = [
	{
		label: 'Form',
		path: '/sketch/form',
		items: [
			{
				label: 'Multi-step',
				path: '/sketch/form/multi-step',
				badge: 'New',
			},
			{
				label: 'Multi-page',
				path: '/sketch/form/multi-page',
			},
		],
	},
	{
		label: 'Editor',
		path: '/sketch/editor',
		items: [
			{
				label: 'Tiptap',
				path: '/sketch/editor/tiptap',
			},
			{
				label: 'Lexical',
				path: '/sketch/editor/lexical',
			},
			{
				label: '3D',
				path: '/sketch/editor/3d',
			},
		],
	},
	{
		label: '3D graphic',
		path: '/sketch/3d-graphic',
		items: [
			{
				label: 'Laptop model',
				path: '/sketch/3d-graphic/laptop-model',
			},
			{
				label: 'Panorama to cubemap',
				path: '/sketch/3d-graphic/panorama-to-cubemap',
			},
			{
				label: 'Shape drawer',
				path: '/sketch/3d-graphic/shape-drawer',
			},
		],
	},
	{
		label: 'Basic Frontend',
		path: '/sketch/basic',
		items: [
			{
				label: 'Counter Button',
				path: '/sketch/basic/counter',
			},
		],
	},
] satisfies Menu[]
