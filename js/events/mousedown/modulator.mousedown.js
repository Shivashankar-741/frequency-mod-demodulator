import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const modulatorMouseDown = () => {
	if (!singleton.isModulatorPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/modulator.png");
		imgBlock.setAttribute("class", "modulator--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected modulator");
	}
};
