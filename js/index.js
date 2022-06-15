import * as selectors from "./domSelector/domSelector.js";
import { obj, tutorialData } from "./state/state.js";
import { modulatingSubmitMouseDown } from "./events/mousedown/modulatingSubmit.mousedown.js";
import { modulatingSubmitMouseUp } from "./events/mouseup/modulatingSubmit.mouseup.js";
import { carrierSubmitMouseDown } from "./events/mousedown/carrierSubmit.mousedown.js";
import { carrierSubmitMouseUp } from "./events/mouseup/carrierSubmit.mouseup.js";
import { frequencySensistivitySubmitMouseDown } from "./events/mousedown/frequencySensistivitySubmit.mousedown.js";
import { frequencySensistivitySubmitMouseUp } from "./events/mouseup/frequencySensistivitySubmit.mouseup.js";
import { integratorMouseDown } from "./events/mousedown/integrator.mousedown.js";
import { integratorMouseUp } from "./events/mouseup/integrator.mouseup.js";
import { multiplierMouseDown } from "./events/mousedown/multiplier.mousedown.js";
import { modulatorMouseDown } from "./events/mousedown/modulator.mousedown.js";
import { modulatorMouseUp } from "./events/mouseup/modulator.mouseup.js";
import { differentiatorMouseDown } from "./events/mousedown/differentiator.mousedown.js";
import { differentiatorMouseUp } from "./events/mouseup/differentiator.mouseup.js";
import { dcLimitedCircuitMouseDown } from "./events/mousedown/dcLimitedCircuit.mousedown.js";
import { dcLimitedCircuitMouseUp } from "./events/mouseup/dcLimitedCircuit.mouseup.js";
import { parameterExtractionMouseDown } from "./events/mousedown/parameterExtraction.mousedown.js";
import { parameterExtractionMouseUp } from "./events/mouseup/parameterExtraction.mouseup.js";
import { multiplierMouseUp } from "./events/mouseup/multiplier.mouseup.js";

// clear input dropdown when clear and outside click
selectors.modSig_close.onclick = function() {
    selectors.modulatingAmplitute.value = obj.modulating.amplitude;
    selectors.modulatingFrequency.value = obj.modulating.frequency;
};

const tutBtn = document.querySelector("#modulatingSubmit_tutorial");

tutBtn.addEventListener("click", () => {
    console.log("btn has triggered");
    let value = $("input[name='options']:checked").val();
    let tutorialDatas = tutorialData[value];
    let randomNum = Math.floor(Math.random() * tutorialDatas.length);
    let randomData = tutorialDatas[randomNum];
    console.log(randomData);
    obj["modulating"]["frequency"] = randomData["FM"];
    obj["modulating"]["amplitude"] = randomData["AM"];
    obj["carrier"]["frequency"] = randomData["FC"];
    obj["carrier"]["amplitude"] = randomData["AC"];
    obj["frequencySensistivity"] = randomData["KF"];
});

//clear signal

// update signal

//wire between modulating signal and integrator

// wire between frequencySensistivity to multiplier

// wire between carrierSignal to modulator

// wire between integrator to multiplier

// Wire between multiplier to modulator

// wire between modulator to differentiator

// wire between differentiator to envelopedetector

// wire between envelopeDetector to dclimiter

// wire between dcLimiter to parameter extraction

// wire end

selectors.modulatingSubmit.onmousedown = () => {
    modulatingSubmitMouseDown();
};

selectors.modulatingSubmit.onmouseup = () => {
    modulatingSubmitMouseUp();
};

selectors.carrierSubmit.onmousedown = () => {
    carrierSubmitMouseDown();
};

selectors.carrierSubmit.onmouseup = () => {
    carrierSubmitMouseUp();
};

selectors.frequencySensistivitySubmit.onmousedown = () => {
    frequencySensistivitySubmitMouseDown();
};

selectors.frequencySensistivitySubmit.onmouseup = () => {
    frequencySensistivitySubmitMouseUp();
};

// INTEGRATOR
selectors.integrator.onmousedown = () => {
    integratorMouseDown();
};

selectors.integrator.onmouseup = () => {
    integratorMouseUp();
};

// MULTIPLIER
selectors.multiplier.onmousedown = () => {
    multiplierMouseDown();
};

selectors.multiplier.onmouseup = () => {
    multiplierMouseUp();
};

// MODULATOR
selectors.modulator.onmousedown = () => {
    modulatorMouseDown();
};

selectors.modulator.onmouseup = () => {
    modulatorMouseUp();
};

// DIFFERENTIATOR
selectors.differentiator.onmousedown = () => {
    differentiatorMouseDown();
};

selectors.differentiator.onmouseup = () => {
    differentiatorMouseUp();
};

// DCLIMITEDCIRCUIT
selectors.dcLimitedCircuit.onmousedown = () => {
    dcLimitedCircuitMouseDown();
};

selectors.dcLimitedCircuit.onmouseup = () => {
    dcLimitedCircuitMouseUp();
};

// PARAMETEREXTRACTION
selectors.parameterExtraction.onmousedown = () => {
    parameterExtractionMouseDown();
};

selectors.parameterExtraction.onmouseup = () => {
    parameterExtractionMouseUp();
};

// console.log(
// 	(document.querySelector(".btn-tutorial").className =
// 		document.querySelector(".btn-tutorial").className + " btn-disable")
// );

// console.log(document.querySelector(".btn-tutorial"));