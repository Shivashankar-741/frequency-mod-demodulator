import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const multiplierMouseDown = () => {
	if (!singleton.isMultiplierPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/multiplier.png");
		imgBlock.setAttribute("class", "multiplier--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected multiplier");
	}
};
