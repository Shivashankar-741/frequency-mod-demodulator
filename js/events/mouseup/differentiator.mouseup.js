import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const differentiatorMouseUp = () => {
	singleton.isDifferentiatorPlaced = true;
	let differentiator = document.querySelector(".differentiator--block");

	differentiator.style.position = "absolute";
	differentiator.style.zIndex = 1000;

	selectors.differentiatorBlockLeft.style.position = "absolute";
	selectors.differentiatorBlockLeft.style.zIndex = "1000";
	selectors.differentiatorBlockLeft.style.display = "block";

	selectors.differentiatorBlockRight.style.position = "absolute";
	selectors.differentiatorBlockRight.style.zIndex = "1000";
	selectors.differentiatorBlockRight.style.display = "block";

	function onMouseMove(event) {
		differentiator.style.left = event.pageX - differentiator.offsetWidth / 2 + "px";
		differentiator.style.top = event.pageY - differentiator.offsetHeight / 2 + "px";

		selectors.differentiatorBlockLeft.style.left =
			event.pageX - 53 - selectors.differentiatorBlockLeft.offsetWidth / 2 + "px";
		selectors.differentiatorBlockLeft.style.top =
			event.pageY + 1 - selectors.differentiatorBlockLeft.offsetHeight / 2 + "px";
		selectors.differentiatorBlockRight.style.left =
			event.pageX + 53 - selectors.differentiatorBlockRight.offsetWidth / 2 + "px";
		selectors.differentiatorBlockRight.style.top =
			event.pageY + 1 - selectors.differentiatorBlockRight.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	differentiator.ondblclick = () => {
		selectors.modulator_isDifferentiatorMoving = true;
		singleton.differentiator_isDifferentiatorMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	differentiator.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document
				.getElementsByClassName("simulation-area")[0]
				.removeChild(document.querySelector(".differentiator--block"));
			selectors.differentiatorBlockLeft.style.display = "none";
			selectors.differentiatorBlockRight.style.display = "none";
			singleton.isDifferentiatorPlaced = false;
			singleton.differentiator_isWireConnected = false;
			// removing wire
			singleton.modulator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwModulatorToDifferentiator.width,
				selectors.canvasWireBwModulatorToDifferentiator.height
			); //clear canvas
			singleton.differentiator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwDifferentiatorTodcLimiter.width,
				selectors.canvasWireBwDifferentiatorTodcLimiter.height
			); //clear canvas
			//
			selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (
				singleton.modulator_isWireConnected &&
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected &&
				singleton.carrierSig_isWireConnected &&
				singleton.multiplier_isWireConnected
			) {
				document.querySelector(".outputTitle").innerText = `Output of Differentiator`;

				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let eqn = `${obj.carrier.amplitude}* 2 * \\pi * ${obj.carrier.frequency}(1+(${
					obj.frequencySensistivity
				}/${obj.carrier.frequency})*${obj.modulating.amplitude}* \\cos( 2 * \\pi * ${
					obj.modulating.frequency
				} * x))*\\sin(2 * \\pi * ${obj.carrier.frequency} * x+((${
					obj.frequencySensistivity * obj.modulating.amplitude
				})/${obj.modulating.frequency})* \\sin( 2 * \\pi * ${obj.modulating.frequency} * x)-180)`;
				let s = "y(x) = " + `${eqn}`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".result").innerHTML = `
        <h1 class='fontStyle'>modulating frequency : ${obj.modulating.frequency}</h1>
        <h1 class='fontStyle'>modulating amplitute : ${obj.modulating.amplitude}</h1>
        <h1 class='fontStyle'>carrier frequency : ${obj.carrier.frequency}</h1>
        <h1 class='fontStyle'>carrier amplitute : ${obj.carrier.amplitude}</h1>
        <h1 class='fontStyle'>frequency sensistivity: ${obj.frequencySensistivity}</h1>
      `;
				selectors.model.value = "mode";
			} else {
				alert("please connect the wires");
			}
			selectors.model.value = "mode";
		}
		singleton.modulator_isDifferentiatorMoving = false;
		singleton.differentiator_isDifferentiatorMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};

// ENVELOPEDETECTOR
selectors.envelopeDetector.onmousedown = () => {
	if (!singleton.isEnvelopeDetectorPlaced) {
		let imgBlock = document.createElement("img");
		imgBlock.setAttribute("src", "../blockImages/envelopeDetector.png");
		imgBlock.setAttribute("class", "envelopeDetector--block");
		selectors.simulationArea.appendChild(imgBlock);
	} else {
		alert("you have already selected envelope detector");
	}
};

selectors.envelopeDetector.onmouseup = () => {
	singleton.isEnvelopeDetectorPlaced = true;
	let envelopeDetector = document.querySelector(".envelopeDetector--block");

	envelopeDetector.style.position = "absolute";
	envelopeDetector.style.zIndex = 1000;

	selectors.envelopeDetectorBlockLeft.style.position = "absolute";
	selectors.envelopeDetectorBlockLeft.style.zIndex = "1000";
	selectors.envelopeDetectorBlockLeft.style.display = "block";

	selectors.envelopeDetectorBlockRight.style.position = "absolute";
	selectors.envelopeDetectorBlockRight.style.zIndex = "1000";
	selectors.envelopeDetectorBlockRight.style.display = "block";

	function onMouseMove(event) {
		envelopeDetector.style.left = event.pageX - envelopeDetector.offsetWidth / 2 + "px";
		envelopeDetector.style.top = event.pageY - envelopeDetector.offsetHeight / 2 + "px";

		selectors.envelopeDetectorBlockLeft.style.left =
			event.pageX - 53 - selectors.envelopeDetectorBlockLeft.offsetWidth / 2 + "px";
		selectors.envelopeDetectorBlockLeft.style.top =
			event.pageY + 1 - selectors.envelopeDetectorBlockLeft.offsetHeight / 2 + "px";
		selectors.envelopeDetectorBlockRight.style.left =
			event.pageX + 53 - selectors.envelopeDetectorBlockRight.offsetWidth / 2 + "px";
		selectors.envelopeDetectorBlockRight.style.top =
			event.pageY + 1 - selectors.envelopeDetectorBlockRight.offsetHeight / 2 + "px";
	}

	document.addEventListener("mousemove", onMouseMove);

	envelopeDetector.ondblclick = () => {
		singleton.differentiator_isenvelopeDetectorMoving = true;
		singleton.envelope_isEnvelopeDetectorMoving = true;
		document.addEventListener("mousemove", onMouseMove);
	};

	envelopeDetector.onclick = () => {
		showAllBlocks();

		if (selectors.model.value === "Delete") {
			document
				.getElementsByClassName("simulation-area")[0]
				.removeChild(document.querySelector(".envelopeDetector--block"));
			selectors.envelopeDetectorBlockLeft.style.display = "none";
			selectors.envelopeDetectorBlockRight.style.display = "none";
			singleton.isEnvelopeDetectorPlaced = false;
			singleton.envelope_isWireConnected = false;
			// removing wire
			singleton.differentiator_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwDifferentiatorTodcLimiter.width,
				selectors.canvasWireBwDifferentiatorTodcLimiter.height
			); //clear canvas
			singleton.envelope_ctx.clearRect(
				0,
				0,
				selectors.canvasWireBwenvelopeDetToParamExtract.width,
				selectors.canvasWireBwenvelopeDetToParamExtract.height
			); //clear canvas
			//
			selectors.model.value = "mode";
		} else if (selectors.model.value === "output") {
			if (
				singleton.differentiator_isWireConnected &&
				singleton.modulator_isWireConnected &&
				singleton.freqSen_isWireConnected &&
				singleton.integrator_isWireConnected &&
				singleton.modSig_isWireConnected &&
				singleton.carrierSig_isWireConnected &&
				singleton.multiplier_isWireConnected
			) {
				document.querySelector(".outputTitle").innerText = `Output of Envelope Detector`;

				if (document.getElementById("calculator").childNodes.length !== 0) {
					document.getElementById("calculator").removeChild(document.querySelector(".dcg-wrapper"));
				}
				let elt = document.getElementById("calculator");
				let calculator = Desmos.GraphingCalculator(elt);
				let eqn = `${obj.carrier.amplitude}* 2 * \\pi * ${obj.carrier.frequency}+((${obj.carrier.amplitude}* 2 * \\pi * ${obj.frequencySensistivity})*${obj.modulating.amplitude}*\\cos( 2 * \\pi * ${obj.modulating.frequency} * x))`;
				let s = "y(x) = " + `${eqn}`;
				calculator.setExpression({ id: "graph1", latex: s });
				$("#output").modal("show");
				document.querySelector(".result").innerHTML = `
        <h1 class='fontStyle'>amplitute : ${
					obj.carrier.amplitude * 2 * Math.PI * obj.frequencySensistivity
				}</h1>
      `;
			} else {
				alert("please connect the wires");
			}
			selectors.model.value = "mode";
		}
		singleton.differentiator_isenvelopeDetectorMoving = false;
		singleton.envelope_isEnvelopeDetectorMoving = false;
		document.removeEventListener("mousemove", onMouseMove);
	};
};
