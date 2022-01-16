import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";
import { obj } from "../state/state.js";

selectors.modulatingSubmit.onclick = () => {
	if (singleton.updatedModulatingSignal) {
		if (obj.modulating.frequency > 0 && obj.modulating.amplitude > 0) {
			alert("you have updated the modulating signal");
			singleton.updatedModulatingSignal = false;
		} else {
			alert("The frequency or amplitude should be greater than zero");
		}
	}
};

selectors.carrierSubmit.onclick = () => {
	if (singleton.updateCarrierSignal) {
		if (obj.carrier.frequency > 0 && obj.carrier.amplitude > 0) {
			alert("you have updated the modulating signal");
			singleton.updateCarrierSignal = false;
		} else {
			alert("The frequency or amplitude should be greater than zero");
		}
	}
};
