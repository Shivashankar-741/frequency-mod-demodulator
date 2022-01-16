import * as selectors from "../domSelector/domSelector.js";
import { blockElements } from "../state/state.js";
import { showAllBlocks } from "./showBlocks.js";

// FILTER BLOCKS

selectors.searchBlock.addEventListener("change", function (e) {
	console.log(e.target.value);
	let searchElement;
	let str = e.target.value;
	for (let i = 0; i < blockElements.length; i++) {
		if (blockElements[i].includes(str)) {
			searchElement = i;
			break;
		} else if (i === 9) {
			alert("Please search correct block element name");
			break;
		}
	}
	selectors.searchBlock.value = "";

	if (searchElement !== undefined) {
		for (let i = 0; i < blockElements.length; i++) {
			if (i !== searchElement) {
				let blockStr = blockElements[i].split(" ");
				if (blockStr.length >= 2) {
					for (let i = 1; i < blockStr.length; i++) {
						blockStr[i] = `${blockStr[i][0]?.toLocaleUpperCase()}${blockStr[i]?.slice(1)}`;
					}
				}
				blockStr = blockStr.join("");
				document.querySelector(`#${blockStr}`).style.display = "none";
			}
		}

		setTimeout(() => showAllBlocks(), 5000);
	}
});
