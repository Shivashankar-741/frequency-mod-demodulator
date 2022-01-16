import singleton from "../singleton/singleton.js";
import { obj } from "../state/state.js";
import * as selectors from "../domSelector/domSelector.js";

window.onclick = function (e) {
	// || parentNode === 'workspace'
	let parentNode = e.target.parentNode.className;
	if (singleton.clearModulatingSignal && parentNode === "simulation-area") {
		selectors.modulatingAmplitute.value = obj.modulating.amplitude;
		selectors.modulatingFrequency.value = obj.modulating.frequency;
		singleton.clearModulatingSignal = false;
	}

	if (singleton.clearCarrierSignal && parentNode === "simulation-area") {
		selectors.carrierAmplitute.value = obj.carrier.amplitude;
		selectors.carrierFrequency.value = obj.carrier.frequency;
		singleton.clearCarrierSignal = false;
	}
};
