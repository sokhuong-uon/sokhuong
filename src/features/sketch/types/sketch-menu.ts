export type MenuItem = { label: string; path: string; badge?: string }

export type Menu = {
	label: string
	path: string
	items: MenuItem[]
}
