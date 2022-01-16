import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const integratorMouseUp = () => {
	singleton.isIntegratorPlaced = true;
	let integrator = document.querySelector(".integrator--block");

	integrator.style.position = "absolute";
	integrator.style.zIndex = 1000;

	selectors.integratorBlockLeft.style.position = "absolute";
	selectors.integratorBlockLeft.style.zIndex = "1000";
	selectors.integratorBlockLeft.style.display = "block";

	selectors.integratorBlockBottom.style.position = "absolute";
	selectors.integratorBlockBottom.style.zIndex = "1000";
	selectors.integratorBlockBottom.style.display = "block";

	function onMouseMove(event) {
		integrator.style.left = event.pageX - integrator.offsetWidth / 2 + "px";
		integrator.style.top = event.pageY - integrator.offsetHeight / 2 + "px";
		selectors.integratorBlockLeft.style.left =
			event.pageX - 53 - selectors.integratorBlockLeft.offsetWidth / 2 + "px";
		selectors.integratorBlockLeft.style.top =
			event.pageY + 1 - selectors.integratorBlockLeft.offsetHeight / 2 + "px";
		selectors.integratorBlockBottom.style.left =
			event.pageX + 0 - selectors.integratorBlockBottom.offsetWidth / 2 + "px";
		selectors.integratorBlockBottom.style.top =
			event.pageY + 38 - selectors.integratorBlockBottom.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	integrator.ondblclick = () => {
		singleton.modSig_isIntegratorMoving = true;
		singleton.integrator_isIntegratorMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	integrator.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document
				.getElementsByClassName("simulation-area")[0]
				.removeChild(document.querySelector(".integrator--block"));
			selectors.integratorBlockLeft.style.display = "none";
			selectors.integratorBlockBottom.style.display = "none";
			singleton.isIntegratorPlaced = false;
			singleton.integrator_isWireConnected = false;
			// removing the wire
			singleton.modSig_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwModsigToIntegrator.width,
				selectors.canvasWireBwModsigToIntegrator.height
			); //clear canvas
			singleton.integrator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwIntegratorToMultiplier.width,
				selectors.canvasWireBwIntegratorToMultiplier.height
			); //clear canvas
			//
			selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (singleton.modSig_isWireConnected) {
				// alert('output of integrator')
				document.querySelector(".outputTitle").innerText = `Output of Integrator`;
				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let numerator = `(${obj.modulating.amplitude} * \\sin( 2 * \\pi * ${obj.modulating.frequency} * x))`;
				let denominator = `( 2 * \\pi * ${obj.modulating.frequency})`;
				let s = "y(x) = " + `${numerator}/${denominator}`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".result").innerHTML = `
        <h1 class='fontStyle'>frequency : ${obj.modulating.amplitude} Hz</h1>
        <h1 class='fontStyle'>amplitude : ${
					obj.modulating.amplitude / (2 * Math.PI * obj.modulating.frequency)
				} v</h1>
      `;
				selectors.model.value = "mode";
			} else {
				alert("Please connnect the wires");
			}
			selectors.model.value = "mode";
		}
		singleton.modSig_isIntegratorMoving = false;
		singleton.integrator_isIntegratorMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
