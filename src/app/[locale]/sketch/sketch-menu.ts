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
		],
	},
	{
		label: '3D graphic',
		path: '/sketch/3d-graphic',
		items: [
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
] satisfies Menu[]
