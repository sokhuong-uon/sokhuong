import { create } from 'zustand'

import { Theme } from '@/features/theme/utils/themes'

export type Radius = 0 | 0.3 | 0.5 | 0.75 | 1

type ThemeStore = {
	theme: Theme['name']
	setTheme: (theme: Theme['name']) => void

	radius: Radius
	setRadius: (radius: Radius) => void
}

export const useThemeStore = create<ThemeStore>()((set) => ({
	theme: 'zinc',
	setTheme: (theme) => set({ theme }),

	radius: 0,
	setRadius: (radius) => set({ radius }),
}))
