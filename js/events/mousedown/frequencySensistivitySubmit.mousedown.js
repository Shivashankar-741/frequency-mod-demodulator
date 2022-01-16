import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const frequencySensistivitySubmitMouseDown = () => {
	if (!singleton.isFreqSensistivityPlaced) {
		obj.frequencySensistivity = parseInt(selectors.frequencySensistivityInput.value);
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/frequencySensistivity.png");
		imgBlock.setAttribute("class", "frequencySensistivity__signal--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else if (singleton.editFreqSensistivity) {
		obj.frequencySensistivity = parseInt(selectors.frequencySensistivityInput.value);
		console.log(obj);
	} else {
		alert("You have already selected frequency sensistivity");
	}
};
