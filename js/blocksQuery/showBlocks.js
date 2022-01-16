import { blockElements } from "../state/state.js";

// SHOW ALL BLOCKS

export function showAllBlocks() {
	for (let i = 0; i < blockElements.length; i++) {
		let blockStr = blockElements[i].split(" ");
		if (blockStr.length >= 2) {
			for (let i = 1; i < blockStr.length; i++) {
				blockStr[i] = `${blockStr[i][0]?.toLocaleUpperCase()}${blockStr[i]?.slice(1)}`;
			}
		}
		blockStr = blockStr.join("");
		document.querySelector(`#${blockStr}`).style.display = "block";
	}
}
