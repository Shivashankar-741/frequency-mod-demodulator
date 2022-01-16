import * as selectors from "../domSelector/domSelector.js";

selectors.removeGraph.onclick = () => {
	document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
	document.querySelector(".result").innerHTML = "";
};
