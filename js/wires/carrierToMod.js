import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let carrierSig_canvasx = selectors.canvasWireBwCarsigToModulator.offsetLeft;
let carrierSig_canvasy = selectors.canvasWireBwCarsigToModulator.offsetTop;
let carrierSig_initial_mousex = 0;
let carrierSig_initial_mousey = 0;
let carrierSig_last_mousex = 0;
let carrierSig_last_mousey = 0;
let carrierSig_mousex = 0;
let carrierSig_mousey = 0;
let carrierSig_WireBwCarSignaltoMultiplier = false;

selectors.carrierSignalRight.onclick = function (e) {
	carrierSig_initial_mousex = parseInt(e.pageX - carrierSig_canvasx);
	carrierSig_initial_mousey = parseInt(e.pageY - carrierSig_canvasy);
	carrierSig_WireBwCarSignaltoMultiplier = true;
	singleton.carrierSig_isWireConnected = true;
};

selectors.modulatorBlockLeft.onclick = function (e) {
	carrierSig_last_mousex = parseInt(e.pageX - carrierSig_canvasx);
	carrierSig_last_mousey = parseInt(e.pageY - carrierSig_canvasy);
	carrierSig_WireBwCarSignaltoMultiplier = false;
	if (singleton.carrierSig_isWireConnected) {
		singleton.carrierSig_isWireConnected = true;
	}
};

selectors.connectionWireBwCarsigToModulator.onmousemove = function (e) {
	if (carrierSig_WireBwCarSignaltoMultiplier) {
		carrierSig_mousex = parseInt(e.pageX - carrierSig_canvasx);
		carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
		singleton.carrierSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwCarsigToModulator.width,
			selectors.canvasWireBwCarsigToModulator.height
		); //clear canvas
		singleton.carrierSig_ctx.beginPath();
		singleton.carrierSig_ctx.moveTo(carrierSig_initial_mousex, carrierSig_initial_mousey);
		singleton.carrierSig_ctx.lineTo(carrierSig_mousex, carrierSig_mousey);
		singleton.carrierSig_ctx.strokeStyle = "black";
		singleton.carrierSig_ctx.lineWidth = 5;
		singleton.carrierSig_ctx.lineJoin = singleton.carrierSig_ctx.lineCap = "round";
		singleton.carrierSig_ctx.stroke();
	} else if (singleton.carrierSig_isModulatorMoving && singleton.carrierSig_isWireConnected) {
		carrierSig_mousex = parseInt(e.pageX - 53 - carrierSig_canvasx);
		carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
		carrierSig_last_mousex = parseInt(e.pageX - 53 - carrierSig_canvasx);
		carrierSig_last_mousey = parseInt(e.pageY - carrierSig_canvasy);
		singleton.carrierSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwCarsigToModulator.width,
			selectors.canvasWireBwCarsigToModulator.height
		); //clear canvas
		singleton.carrierSig_ctx.beginPath();
		singleton.carrierSig_ctx.moveTo(carrierSig_initial_mousex, carrierSig_initial_mousey);
		singleton.carrierSig_ctx.lineTo(carrierSig_mousex, carrierSig_mousey);
		singleton.carrierSig_ctx.strokeStyle = "black";
		singleton.carrierSig_ctx.lineWidth = 5;
		singleton.carrierSig_ctx.lineJoin = singleton.carrierSig_ctx.lineCap = "round";
		singleton.carrierSig_ctx.stroke();
	} else if (singleton.carrierSig_isCarrierSignalMoving && singleton.carrierSig_isWireConnected) {
		carrierSig_mousex = parseInt(e.pageX + 53 - carrierSig_canvasx);
		carrierSig_mousey = parseInt(e.pageY - carrierSig_canvasy);
		carrierSig_initial_mousex = parseInt(e.pageX + 53 - carrierSig_canvasx);
		carrierSig_initial_mousey = parseInt(e.pageY - carrierSig_canvasy);
		singleton.carrierSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwCarsigToModulator.width,
			selectors.canvasWireBwCarsigToModulator.height
		); //clear canvas
		singleton.carrierSig_ctx.beginPath();
		singleton.carrierSig_ctx.moveTo(carrierSig_mousex, carrierSig_mousey);
		singleton.carrierSig_ctx.lineTo(carrierSig_last_mousex, carrierSig_last_mousey);
		singleton.carrierSig_ctx.strokeStyle = "black";
		singleton.carrierSig_ctx.lineWidth = 5;
		singleton.carrierSig_ctx.lineJoin = singleton.carrierSig_ctx.lineCap = "round";
		singleton.carrierSig_ctx.stroke();
	}
};
