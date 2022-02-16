export const obj = {
	modulating: {
		frequency: 0,
		amplitude: 0,
	},
	carrier: {
		frequency: 0,
		amplitude: 0,
	},
	frequencySensistivity: 0,
};

export const blockElements = [
	"modulating signal",
	"carrier signal",
	"frequency sensistivity",
	"integrator",
	"multiplier",
	"modulator",
	"differentiator",
	"envelope detector",
	"dc limited circuit",
	"parameter extraction",
];

const tutorialData = {
	NBFM: [
		{ AM: 5, FM: 750, AC: 20, FC: 1000 },
		{ AM: 10, FM: 500, AC: 15, FC: 1000 },
		{ AM: 10, FM: 1500, AC: 15, FC: 2000 },
		{ AM: 12, FM: 1000, AC: 10, FC: 2500 },
		{ AM: 15, FM: 2000, AC: 12, FC: 5000 },
	],
	WBFM: [
		{ AM: 5, FM: 500, AC: 10, FC: 1000 },
		{ AM: 8, FM: 250, AC: 15, FC: 750 },
		{ AM: 10, FM: 500, AC: 15, FC: 1500 },
		{ AM: 10, FM: 750, AC: 15, FC: 2000 },
		{ AM: 15, FM: 750, AC: 20, FC: 5000 },
	],
};
