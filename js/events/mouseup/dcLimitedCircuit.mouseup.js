import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const dcLimitedCircuitMouseUp = () => {
	singleton.isDcLimiterPlaced = true;
	let dcLimitedCircuit = document.querySelector(".dcLimitedCircuit--block");

	dcLimitedCircuit.style.position = "absolute";
	dcLimitedCircuit.style.zIndex = 1000;

	selectors.dcLimitedCircuitBlockLeft.style.position = "absolute";
	selectors.dcLimitedCircuitBlockLeft.style.zIndex = "1000";
	selectors.dcLimitedCircuitBlockLeft.style.display = "block";

	selectors.dcLimitedCircuitBlockRight.style.position = "absolute";
	selectors.dcLimitedCircuitBlockRight.style.zIndex = "1000";
	selectors.dcLimitedCircuitBlockRight.style.display = "block";

	function onMouseMove(event) {
		dcLimitedCircuit.style.left = event.pageX - dcLimitedCircuit.offsetWidth / 2 + "px";
		dcLimitedCircuit.style.top = event.pageY - dcLimitedCircuit.offsetHeight / 2 + "px";

		selectors.dcLimitedCircuitBlockLeft.style.left =
			event.pageX - 53 - selectors.dcLimitedCircuitBlockLeft.offsetWidth / 2 + "px";
		selectors.dcLimitedCircuitBlockLeft.style.top =
			event.pageY + 1 - selectors.dcLimitedCircuitBlockLeft.offsetHeight / 2 + "px";
		selectors.dcLimitedCircuitBlockRight.style.left =
			event.pageX + 53 - selectors.dcLimitedCircuitBlockRight.offsetWidth / 2 + "px";
		selectors.dcLimitedCircuitBlockRight.style.top =
			event.pageY + 1 - selectors.dcLimitedCircuitBlockRight.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	dcLimitedCircuit.ondblclick = () => {
		singleton.dcLimiter_isdcLimiterMoving = true;
		singleton.envelope_isDcLimiterMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	dcLimitedCircuit.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document
				.getElementsByClassName("simulation-area")[0]
				.removeChild(document.querySelector(".dcLimitedCircuit--block"));
			selectors.dcLimitedCircuitBlockLeft.style.display = "none";
			selectors.dcLimitedCircuitBlockRight.style.display = "none";
			singleton.isDcLimiterPlaced = false;
			singleton.dcLimiter_isWireConnected = false;
			// removing wire
			singleton.envelope_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwenvelopeDetToParamExtract.width,
				selectors.canvasWireBwenvelopeDetToParamExtract.height
			); //clear canvas
			singleton.dcLimiter_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwdcLimiterToEnvelopeDetector.width,
				selectors.canvasWireBwdcLimiterToEnvelopeDetector.height
			); //clear canvas
			//
			selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (
				singleton.envelope_isWireConnected &&
				singleton.differentiator_isWireConnected &&
				singleton.modulator_isWireConnected &&
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected &&
				singleton.carrierSig_isWireConnected &&
				singleton.multiplier_isWireConnected
			) {
				document.querySelector(".outputTitle").innerText = `Output of DC Limiter Circuit`;

				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let envDetectorEqn = `${obj.carrier.amplitude}* 2 * \\pi * ${obj.carrier.frequency}+((${obj.carrier.amplitude}* 2 * \\pi * ${obj.frequencySensistivity})*${obj.modulating.amplitude}*\\cos( 2 * \\pi * ${obj.modulating.frequency} * x))`;
				// let eqn = `(${obj.carrier.amplitude}* 2 * \\pi * ${obj.frequencySensistivity})*${obj.modulating.amplitude}*\\cos( 2 * \\pi * ${obj.modulating.frequency} * x)`
				let eqn = `(${envDetectorEqn}-(${obj.carrier.amplitude}* 2 * \\pi * ${obj.carrier.frequency}))/(${obj.carrier.amplitude}* 2 * \\pi * ${obj.frequencySensistivity})`;
				console.log(eqn);
				let s = "y(x) = " + `${eqn}`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".result").innerHTML = `
        <h1 class='fontStyle'>frequency : ${obj.modulating.frequency} Hz</h1>
        <h1 class='fontStyle'>amplitude : ${obj.modulating.amplitude} V</h1>
      `;
			} else {
				alert("Please connect the wires");
			}
			selectors.model.value = "mode";
		}
		singleton.dcLimiter_isdcLimiterMoving = false;
		singleton.envelope_isDcLimiterMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
