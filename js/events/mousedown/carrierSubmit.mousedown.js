import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const carrierSubmitMouseDown = () => {
	if (
		!parseInt(selectors.carrierFrequency.value) > 0 ||
		!parseInt(selectors.carrierAmplitute.value) > 0
	) {
		console.log("debugger");
		alert("frequency or amplitude should be greater than zero");
	} else if (!singleton.isCarrierSignalPlaced) {
		if (
			selectors.carrierFrequency.value > obj.modulating.frequency &&
			selectors.carrierAmplitute.value > obj.modulating.amplitude
		) {
			obj.carrier.frequency = parseInt(selectors.carrierFrequency.value);
			obj.carrier.amplitude = parseInt(selectors.carrierAmplitute.value);

			let imgBlock = document.createElement("img");
			imgBlock.setAttribute("src", "../../../blockImages/carrierSignal.png");
			imgBlock.setAttribute("class", "carrier__signal--block");
			selectors.simulationArea.appendChild(imgBlock);
		} else {
			alert(
				"carrier frequency and amplitude should be greater than modulating frequency and amplitude"
			);
		}
	} else if (singleton.editCarrierSignal) {
		if (
			selectors.carrierFrequency.value > obj.modulating.frequency &&
			selectors.carrierAmplitute.value > obj.modulating.amplitude
		) {
			obj.carrier.frequency = parseInt(selectors.carrierFrequency.value);
			obj.carrier.amplitude = parseInt(selectors.carrierAmplitute.value);
			singleton.editCarrierSignal = true;
			console.log(obj);
		} else {
			alert(
				"updating carrier frequency and amplitude should be greater than modulating frequency and amplitude"
			);
		}
	} else {
		alert("you have already selected carrier signal");
	}
};
