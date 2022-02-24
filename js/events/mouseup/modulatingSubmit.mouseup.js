import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const modulatingSubmitMouseUp = () => {
	if (!singleton.editModulatingSignal) {
		singleton.isModulatingSignalPlaced = true;
		let modulatingSignal = document.querySelector(".modulating__signal--block");

		modulatingSignal.style.position = "absolute";
		modulatingSignal.style.zIndex = 1000;

		selectors.modulatingSignalRight.style.position = "absolute";
		selectors.modulatingSignalRight.style.zIndex = 1000;
		selectors.modulatingSignalRight.style.display = "block";

		function onMouseMove(event) {
			modulatingSignal.style.left = event.pageX - modulatingSignal.offsetWidth / 2 + "px";
			modulatingSignal.style.top = event.pageY - modulatingSignal.offsetHeight / 2 + "px";

			selectors.modulatingSignalRight.style.left =
				event.pageX + 53 - selectors.modulatingSignalRight.offsetWidth / 2 + "px";
			selectors.modulatingSignalRight.style.top =
				event.pageY + 1 - selectors.modulatingSignalRight.offsetHeight / 2 + "px";
		}

		document.addEventListener("mousemove", onMouseMove);

		modulatingSignal.ondblclick = () => {
			singleton.modSig_isModulatingSignalMoving = true;
			document.addEventListener("mousemove", onMouseMove);
		};

		modulatingSignal.onclick = () => {
			showAllBlocks();

			if (selectors.model.value === "Delete") {
				document
					.getElementsByClassName("simulation-area")[0]
					.removeChild(document.querySelector(".modulating__signal--block"));
				selectors.modulatingSignalRight.style.display = "none";
				singleton.isModulatingSignalPlaced = false;
				singleton.modSig_isWireConnected = false;
				// removing the wire
				singleton.modSig_ctx.clearRect(
					0,
					0,
					selectors.canvasWireBwModsigToIntegrator.width,
					selectors.canvasWireBwModsigToIntegrator.height
				); //clear canvas
				//
				selectors.model.value = "mode";
			} else if (selectors.model.value === "Edit") {
				singleton.clearModulatingSignal = true;
				singleton.editModulatingSignal = true;
				singleton.updatedModulatingSignal = true;
				$("#modulatingSignalModal").modal("show");
				selectors.model.value = "mode";
			} else if (selectors.model.value === "output") {
				document.querySelector(".outputTitle").innerText = `Output of modulating signal`;
				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				// Output graph
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let s = "y(x) = " + `(${obj.modulating.amplitude} * \\cos( 2 * \\pi * ${obj.modulating.frequency} * x))`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".dcg-expressionlist").style.display = "none";

				document.querySelector(".result").innerHTML = `
          <h1 class='fontStyle'>Frequency  : ${obj.modulating.frequency} Hz</h1>
          <h1 class='fontStyle'>Amplitute  : ${obj.modulating.amplitude} V</h1>
        `;
				selectors.model.value = "mode";
			}
			singleton.modSig_isModulatingSignalMoving = false;
			document.removeEventListener("mousemove", onMouseMove);
		};
	}
};
