import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const dcLimitedCircuitMouseDown = () => {
	if (!singleton.isDcLimiterPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/d.png");
		imgBlock.setAttribute("class", "dcLimitedCircuit--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected dc limiter");
	}
};
