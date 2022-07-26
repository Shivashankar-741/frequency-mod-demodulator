import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const multiplierMouseUp = () => {
	singleton.isMultiplierPlaced = true;
	let multiplier = document.querySelector(".multiplier--block");

	multiplier.style.position = "absolute";
	multiplier.style.zIndex = 1000;

	selectors.multiplierBlockLeft.style.position = "absolute";
	selectors.multiplierBlockLeft.style.zIndex = 1000;
	selectors.multiplierBlockLeft.style.display = "block";

	selectors.multiplierBlockTop.style.position = "absolute";
	selectors.multiplierBlockTop.style.zIndex = 1000;
	selectors.multiplierBlockTop.style.display = "block";

	selectors.multiplierBlockBottom.style.position = "absolute";
	selectors.multiplierBlockBottom.style.zIndex = 1000;
	selectors.multiplierBlockBottom.style.display = "block";

	function onMouseMove(event) {
		multiplier.style.left = event.pageX - multiplier.offsetWidth / 2 + "px";
		multiplier.style.top = event.pageY - multiplier.offsetHeight / 2 + "px";

		selectors.multiplierBlockLeft.style.left = event.pageX - 53 - selectors.multiplierBlockLeft.offsetWidth / 2 + "px";
		selectors.multiplierBlockLeft.style.top = event.pageY + 1 - selectors.multiplierBlockLeft.offsetHeight / 2 + "px";
		selectors.multiplierBlockTop.style.left = event.pageX + 0 - selectors.multiplierBlockTop.offsetWidth / 2 + "px";
		selectors.multiplierBlockTop.style.top = event.pageY - 38 - selectors.multiplierBlockTop.offsetHeight / 2 + "px";
		selectors.multiplierBlockBottom.style.left =
			event.pageX + 0 - selectors.multiplierBlockBottom.offsetWidth / 2 + "px";
		selectors.multiplierBlockBottom.style.top =
			event.pageY + 38 - selectors.multiplierBlockBottom.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	multiplier.ondblclick = () => {
		singleton.freqSen_isMultiplierMoving = true;
		singleton.integrator_isMulitplierMoving = true;
		singleton.multiplier_isMultiplierMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	multiplier.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document.getElementsByClassName("simulation-area")[0].removeChild(document.querySelector(".multiplier--block"));
			selectors.multiplierBlockLeft.style.display = "none";
			selectors.multiplierBlockTop.style.display = "none";
			selectors.multiplierBlockBottom.style.display = "none";
			singleton.isMultiplierPlaced = false;
			singleton.multiplier_isWireConnected = false;
			//removing the wire
			singleton.integrator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwIntegratorToMultiplier.width,
				selectors.canvasWireBwIntegratorToMultiplier.height
			); //clear canvas
			singleton.freqSen_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwModsigToMultiplier.width,
				selectors.canvasWireBwModsigToMultiplier.height
			); //clear canvas
			singleton.multiplier_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwModulatorToDifferentiator.width,
				selectors.canvasWireBwModulatorToDifferentiator.height
			);
			//
			// selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected
			) {
				document.querySelector(".outputTitle").innerText = `Output of Multiplier`;

				// alert('output of integrator')
				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let eqn = `((${obj.frequencySensistivity} * ${obj.modulating.amplitude}/${obj.modulating.frequency}))`;
				let s = "y(x) = " + `${eqn}*(\\sin( 2 * \\pi * ${obj.modulating.frequency} * x))`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".result").innerHTML = `
        		<h1 class='fontStyle'>Frequency : ${obj.modulating.frequency} Hz</h1>
       		    <h1 class='fontStyle'>Amplitude : ${
								obj.frequencySensistivity * (obj.modulating.amplitude / obj.modulating.frequency)
							} V</h1>
      `;
				// selectors.model.value = "mode";
			} else {
				alert("Please connect the wires");
			}
			// selectors.model.value = "mode";
		}
		singleton.freqSen_isMultiplierMoving = false;
		singleton.integrator_isMulitplierMoving = false;
		singleton.multiplier_isMultiplierMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
