import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const modulatorMouseUp = () => {
	singleton.isModulatorPlaced = true;
	let modulator = document.querySelector(".modulator--block");

	modulator.style.position = "absolute";
	modulator.style.zIndex = 1000;

	selectors.modulatorBlockTop.style.position = "absolute";
	selectors.modulatorBlockTop.style.zIndex = 1000;
	selectors.modulatorBlockTop.style.display = "block";

	selectors.modulatorBlockRight.style.position = "absolute";
	selectors.modulatorBlockRight.style.zIndex = 1000;
	selectors.modulatorBlockRight.style.display = "block";

	selectors.modulatorBlockLeft.style.position = "absolute";
	selectors.modulatorBlockLeft.style.zIndex = 1000;
	selectors.modulatorBlockLeft.style.display = "block";

	function onMouseMove(event) {
		modulator.style.left = event.pageX - modulator.offsetWidth / 2 + "px";
		modulator.style.top = event.pageY - modulator.offsetHeight / 2 + "px";

		selectors.modulatorBlockTop.style.left = event.pageX + 0 - selectors.modulatorBlockTop.offsetWidth / 2 + "px";
		selectors.modulatorBlockTop.style.top = event.pageY - 38 - selectors.modulatorBlockTop.offsetHeight / 2 + "px";

		selectors.modulatorBlockLeft.style.left = event.pageX - 53 - selectors.modulatorBlockLeft.offsetWidth / 2 + "px";
		selectors.modulatorBlockLeft.style.top = event.pageY + 1 - selectors.modulatorBlockLeft.offsetHeight / 2 + "px";
		selectors.modulatorBlockRight.style.left = event.pageX + 53 - selectors.modulatorBlockRight.offsetWidth / 2 + "px";
		selectors.modulatorBlockRight.style.top = event.pageY + 1 - selectors.modulatorBlockRight.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	modulator.ondblclick = () => {
		singleton.carrierSig_isModulatorMoving = true;
		singleton.multiplier_isModulatorMoving = true;
		singleton.modulator_isModulatorMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	modulator.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document.getElementsByClassName("simulation-area")[0].removeChild(document.querySelector(".modulator--block"));
			selectors.modulatorBlockLeft.style.display = "none";
			selectors.modulatorBlockRight.style.display = "none";
			selectors.modulatorBlockTop.style.display = "none";
			singleton.isModulatorPlaced = false;
			singleton.modulator_isWireConnected = false;
			// removing wire
			singleton.carrierSig_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwCarsigToModulator.width,
				selectors.canvasWireBwCarsigToModulator.height
			); //clear canvas
			singleton.multiplier_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwMultiplierToModulator.width,
				selectors.canvasWireBwMultiplierToModulator.height
			); //clear canvas
			singleton.modulator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwModulatorToDifferentiator.width,
				selectors.canvasWireBwModulatorToDifferentiator.height
			); //clear canvas
			//
			// selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected &&
				singleton.carrierSig_isWireConnected &&
				singleton.multiplier_isWireConnected
			) {
				document.querySelector(".outputTitle").innerText = `Output of Modulator`;

				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let eqn = `(${obj.carrier.amplitude}* \\cos( 2 * \\pi * ${obj.carrier.frequency} * x+((${obj.frequencySensistivity}*${obj.modulating.amplitude}/${obj.modulating.frequency}))*(\\sin( 2 * \\pi * ${obj.modulating.frequency} * x))))`;
				let s = "y(x) = " + `${eqn}`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				// selectors.model.value = "mode";
				document.querySelector(".result").innerHTML = `
        <h1 class='fontStyle'>Amplitute : ${obj.carrier.amplitude} V</h1>
      `;
			} else {
				alert("Please connect the wires");
			}
			// selectors.model.value = "mode";
		}
		singleton.carrierSig_isModulatorMoving = false;
		singleton.multiplier_isModulatorMoving = false;
		singleton.modulator_isModulatorMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
