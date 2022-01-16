import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const modulatingSubmitMouseDown = () => {
	if (
		!parseInt(selectors.modulatingFrequency.value) > 0 ||
		!parseInt(selectors.modulatingAmplitute.value) > 0
	) {
		alert("frequency or amplitude should be greater than zero");
	} else if (!singleton.isModulatingSignalPlaced) {
		obj.modulating.frequency = parseInt(selectors.modulatingFrequency.value);
		obj.modulating.amplitude = parseInt(selectors.modulatingAmplitute.value);
		console.log(obj);
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/modulatingSignal.png");
		imgBlock.setAttribute("class", "modulating__signal--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else if (singleton.editModulatingSignal) {
		if (
			selectors.modulatingFrequency.value < obj.carrier.frequency &&
			selectors.modulatingAmplitute.value < obj.carrier.amplitude
		) {
			obj.modulating.frequency = parseInt(selectors.modulatingFrequency.value);
			obj.modulating.amplitude = parseInt(selectors.modulatingAmplitute.value);
			singleton.editModulatingSignal = true;
			console.log(obj);
		} else {
			alert(
				"updating modulating frequency and amplitude should be less than actual carrier frequency and amplitute"
			);
		}
	} else {
		alert("You have already selected modulating signal");
	}
};
