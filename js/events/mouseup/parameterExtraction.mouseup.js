import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const parameterExtractionMouseUp = () => {
	singleton.isParamExtractionPlaced = true;
	let parameterExtraction = document.querySelector(".parameterExtraction--block");

	parameterExtraction.style.position = "absolute";
	parameterExtraction.style.zIndex = 1000;

	selectors.parameterExtractionBlockLeft.style.position = "absolute";
	selectors.parameterExtractionBlockLeft.style.zIndex = "1000";
	selectors.parameterExtractionBlockLeft.style.display = "block";

	function onMouseMove(event) {
		parameterExtraction.style.left = event.pageX - parameterExtraction.offsetWidth / 2 + "px";
		parameterExtraction.style.top = event.pageY - parameterExtraction.offsetHeight / 2 + "px";

		selectors.parameterExtractionBlockLeft.style.left =
			event.pageX - 53 - selectors.parameterExtractionBlockLeft.offsetWidth / 2 + "px";
		selectors.parameterExtractionBlockLeft.style.top =
			event.pageY + 1 - selectors.parameterExtractionBlockLeft.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	parameterExtraction.ondblclick = () => {
		singleton.dcLimiter_parameterExtractionMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	parameterExtraction.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document
				.getElementsByClassName("simulation-area")[0]
				.removeChild(document.querySelector(".parameterExtraction--block"));
			selectors.parameterExtractionBlockLeft.style.display = "none";
			singleton.isParamExtractionPlaced = false;
			// removing wire
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
				singleton.dcLimiter_isWireConnected &&
				singleton.envelope_isWireConnected &&
				singleton.differentiator_isWireConnected &&
				singleton.modulator_isWireConnected &&
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected &&
				singleton.carrierSig_isWireConnected &&
				singleton.multiplier_isWireConnected
			) {
				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				$("#paraExtOutput").modal("show");
				let beta =
					(obj.frequencySensistivity * obj.modulating.amplitude) / obj.modulating.frequency;
				console.log(beta);
				let power = (obj.carrier.amplitude * obj.carrier.amplitude) / 2;
				let freqDeviation = obj.frequencySensistivity * obj.modulating.amplitude;
				let betaValue = freqDeviation / obj.modulating.frequency;
				if (beta > 1) {
					let bandWidth = 2 * (beta + 1) * obj.modulating.frequency;
					document.querySelector(".paramExtractResult").innerHTML = `
          <h1 class='fontStyle'>Frequency deviation : ${freqDeviation} Hz</h1>
          <h1 class='fontStyle'>	β : ${betaValue}(no unit)</h1>
          <h1 class='fontStyle'>Signal Type: Wide band frequency modulation</h1>
          <h1 class='fontStyle'>BandWidth: ${bandWidth} Hz</h1>
          <h1 class='fontStyle'>Power:${power} W</h1>
        `;
				} else {
					let bandWidth = 2 * obj.modulating.frequency;
					document.querySelector(".paramExtractResult").innerHTML = `
          <h1 class='fontStyle'>Frequency deviation : ${freqDeviation} Hz</h1>
          <h1 class='fontStyle'>	β : ${betaValue}(no unit)</h1>
          <h1 class='fontStyle'>Signal Type: Narrow band frequency modulation</h1>
          <h1 class='fontStyle'>BandWidth: ${bandWidth} Hz</h1>
          <h1 class='fontStyle'>Power:${power} W</h1>
        `;
				}
			} else {
				alert("please connect the wires");
			}
			selectors.model.value = "mode";
		}
		singleton.dcLimiter_parameterExtractionMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
