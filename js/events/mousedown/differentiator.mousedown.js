import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const differentiatorMouseDown = () => {
	if (!singleton.isDifferentiatorPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/differentiator.png");
		imgBlock.setAttribute("class", "differentiator--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected differentiator");
	}
};
