export const themes = [
	{
		name: "zinc",
		label: "Zinc",
		activeColor: {
			light: "240 5.9% 10%",
			dark: "240 5.9% 10%",
		},
	},
	{
		name: "rose",
		label: "Rose",
		activeColor: {
			light: "346.8 77.2% 49.8%",
			dark: "346.8 77.2% 49.8%",
		},
	},
	{
		name: "orange",
		label: "Orange",
		activeColor: {
			light: "24.6 95% 53.1%",
			dark: "20.5 90.2% 48.2%",
		},
	},
	{
		name: "green",
		label: "Green",
		activeColor: {
			light: "142.1 76.2% 36.3%",
			dark: "142.1 70.6% 45.3%",
		},
	},
	{
		name: "blue",
		label: "Blue",
		activeColor: {
			light: "221.2 83.2% 53.3%",
			dark: "217.2 91.2% 59.8%",
		},
	},
	{
		name: "yellow",
		label: "Yellow",
		activeColor: {
			light: "47.9 95.8% 53.1%",
			dark: "47.9 95.8% 53.1%",
		},
	},
	{
		name: "violet",
		label: "Violet",
		activeColor: {
			light: "262.1 83.3% 57.8%",
			dark: "263.4 70% 50.4%",
		},
	},
] as const;

export type Theme = (typeof themes)[number];
