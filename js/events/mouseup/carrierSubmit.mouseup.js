import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const carrierSubmitMouseUp = () => {
	if (!singleton.editCarrierSignal) {
		singleton.isCarrierSignalPlaced = true;
		let carrierSignal = document.querySelector(".carrier__signal--block");

		carrierSignal.style.position = "absolute";
		carrierSignal.style.zIndex = 1000;

		selectors.carrierSignalRight.style.position = "absolute";
		selectors.carrierSignalRight.style.zIndex = 1000;
		selectors.carrierSignalRight.style.display = "block";

		function onMouseMove(event) {
			carrierSignal.style.left = event.pageX - carrierSignal.offsetWidth / 2 + "px";
			carrierSignal.style.top = event.pageY - carrierSignal.offsetHeight / 2 + "px";

			selectors.carrierSignalRight.style.left = event.pageX + 53 - selectors.carrierSignalRight.offsetWidth / 2 + "px";
			selectors.carrierSignalRight.style.top = event.pageY + 1 - selectors.carrierSignalRight.offsetHeight / 2 + "px";
		}

		document.addEventListener("mousemove", onMouseMove);

		carrierSignal.ondblclick = () => {
			singleton.carrierSig_isCarrierSignalMoving = true;
			document.addEventListener("mousemove", onMouseMove);
		};

		carrierSignal.onclick = () => {
			showAllBlocks();

			if (selectors.model.value === "Delete") {
				document
					.getElementsByClassName("simulation-area")[0]
					.removeChild(document.querySelector(".carrier__signal--block"));
				selectors.carrierSignalRight.style.display = "none";
				singleton.isCarrierSignalPlaced = false;
				singleton.carrierSig_isWireConnected = false;
				//remove wire
				singleton.carrierSig_ctx.clearRect(
					0,
					0,
					selectors.canvasWireBwCarsigToModulator.width,
					selectors.canvasWireBwCarsigToModulator.height
				); //clear canvas
				selectors.model.value = "mode";
			} else if (selectors.model.value === "Edit") {
				singleton.clearCarrierSignal = true;
				singleton.editCarrierSignal = true;
				singleton.updateCarrierSignal = true;
				$("#carrierSignalModal").modal("show");
				selectors.model.value = "mode";
			} else if (selectors.model.value === "output") {
				document.querySelector(".outputTitle").innerText = `Output of carrier signal`;
				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let s = "y(x) = " + `(${obj.carrier.amplitude} * \\cos( 2 * \\pi * ${obj.carrier.frequency} * x))`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				selectors.model.value = "mode";
				document.querySelector(".result").innerHTML = `
            <h1 class='fontStyle'>Frequency : ${obj.carrier.frequency}Hz</h1>
            <h1 class='fontStyle'>Amplitute : ${obj.carrier.amplitude}V</h1>
          `;
			}
			singleton.carrierSig_isCarrierSignalMoving = false;
			document.removeEventListener("mousemove", onMouseMove);
		};
	}
};
