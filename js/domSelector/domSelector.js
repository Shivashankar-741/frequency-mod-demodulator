// Blocks
export let modulatingFrequency = document.querySelector("#modulatingFrequency");
export let modulatingAmplitute = document.querySelector("#modulatingAmplitute");
export let modulatingSubmit = document.querySelector("#modulatingSubmit");
export let carrierFrequency = document.querySelector("#carrierFrequency");
export let carrierAmplitute = document.querySelector("#carrierAmplitute");
export let frequencySensistivitySubmit = document.querySelector("#frequencySensistivitySubmit");
export let carrierSubmit = document.querySelector("#carrierSubmit");
export let simulationArea = document.querySelector(".simulation-area");
export let frequencySensistivityInput = document.querySelector("#frequencySensitivityInput");

export let integrator = document.querySelector("#integrator");
export let multiplier = document.querySelector("#multiplier");
export let modulator = document.querySelector("#modulator");
export let differentiator = document.querySelector("#differentiator");
export let envelopeDetector = document.querySelector("#envelopeDetector");
export let dcLimitedCircuit = document.querySelector("#dcLimitedCircuit");
export let parameterExtraction = document.querySelector("#parameterExtraction");

export let modulatingSignalRight = document.querySelector(".modulatingSignal--block__right");
export let carrierSignalRight = document.querySelector(".carrierSignal--block__right");
export let frequencySensistivityRight = document.querySelector(".frequencySensistivity--block__right");
export let integratorBlockLeft = document.querySelector(".integrator--block__left");
export let integratorBlockBottom = document.querySelector(".integrator--block__bottom");
export let multiplierBlockTop = document.querySelector(".multiplier--block__top");
export let multiplierBlockLeft = document.querySelector(".multiplier--block__left");
export let multiplierBlockBottom = document.querySelector(".multiplier--block__bottom");
export let modulatorBlockTop = document.querySelector(".modulator--block__top");
export let modulatorBlockLeft = document.querySelector(".modulator--block__left");
export let modulatorBlockRight = document.querySelector(".modulator--block__right");
export let differentiatorBlockLeft = document.querySelector(".differentiator--block__left");
export let differentiatorBlockRight = document.querySelector(".differentiator--block__right");
export let dcLimitedCircuitBlockLeft = document.querySelector(".dcLimitedCircuit--block__left");
export let dcLimitedCircuitBlockRight = document.querySelector(".dcLimitedCircuit--block__right");
export let envelopeDetectorBlockLeft = document.querySelector(".envelopeDetector--block__left");
export let envelopeDetectorBlockRight = document.querySelector(".envelopeDetector--block__right");
export let parameterExtractionBlockLeft = document.querySelector(".parameterExtraction--block__left");

export let searchBlock = document.getElementById("searchBlock");
export let resetBlocks = document.querySelector(".reset__blocks");

export let model = document.querySelector("#selectMode");
export let modSig_close = document.querySelector("#modulatingSignal_close");

// Graphs
export let downloadGraph = document.querySelector("#downloadGraph");
export let removeGraph = document.getElementById("removeGraph");

// Wires
export let connectionWireBwModsigToIntegrator = document.querySelector(".connectionWireBwModsigToIntegrator");
export let connectionWireBwFreqSenToMultiplier = document.querySelector(".connectionWireBwFreqSenToMultiplier");
export let connectionWireBwCarsigToModulator = document.querySelector(".connectionWireBwCarsigToModulator");
export let connectionWireBwIntegratorToMultiplier = document.querySelector(".connectionWireBwIntegratorToMultiplier");
export let connectionWireBwMultiplierToModulator = document.querySelector(".connectionWireBwMultiplierToModulator");
export let connectionWireBwModulatorToDifferentiator = document.querySelector(
    ".connectionWireBwModulatorToDifferentiator"
);
export let connectionWireBwDifferentiatorTodcLimiter = document.querySelector(
    ".connectionWireBwDifferentiatorTodcLimiter"
);
export let check = document.querySelector(".check");
export let check2 = document.querySelector(".check2");

// canva
export let canvasWireBwModsigToIntegrator = document.getElementById("canvasWireBwModsigToIntegrator");
export let canvasWireBwModsigToMultiplier = document.getElementById("canvasWireBwModsigToMultiplier");
export let canvasWireBwCarsigToModulator = document.getElementById("canvasWireBwCarsigToModulator");
export let canvasWireBwIntegratorToMultiplier = document.getElementById("canvasWireBwIntegratorToMultiplier");
export let canvasWireBwMultiplierToModulator = document.getElementById("canvasWireBwMultiplierToModulator");
export let canvasWireBwModulatorToDifferentiator = document.getElementById("canvasWireBwModulatorToDifferentiator");
export let canvasWireBwDifferentiatorTodcLimiter = document.getElementById("canvasWireBwDifferentiatorTodcLimiter");
export let canvasWireBwenvelopeDetToParamExtract = document.getElementById("canvasWireBwenvelopeDetToParamExtract");
export let canvasWireBwdcLimiterToEnvelopeDetector = document.getElementById("canvasWireBwdcLimiterToEnvelopeDetector");

// Assessment submit btn
export let assesmentSubmitBtn = document.querySelector("#assesmentSubmitBtn");
export let paraExtClostBtn = document.querySelector("#paraExtClostBtn");