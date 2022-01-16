import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";

export const integratorMouseDown = () => {
	if (!singleton.isIntegratorPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../../../blockImages/integrator.png");
		imgBlock.setAttribute("class", "integrator--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("You have already selected integrator");
	}
};
