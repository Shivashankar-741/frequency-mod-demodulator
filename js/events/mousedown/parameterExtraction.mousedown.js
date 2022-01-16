import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const parameterExtractionMouseDown = () => {
	if (!singleton.isParamExtractionPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/parameterExtraction.png");
		imgBlock.setAttribute("class", "parameterExtraction--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected paramter extraction");
	}
};
