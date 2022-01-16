import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let multiplier_canvasx = selectors.canvasWireBwMultiplierToModulator.offsetLeft;
let multiplier_canvasy = selectors.canvasWireBwMultiplierToModulator.offsetTop;
let multiplier_initial_mousex = 0;
let multiplier_initial_mousey = 0;
let multiplier_last_mousex = 0;
let multiplier_last_mousey = 0;
let multiplier_mousex = 0;
let multiplier_mousey = 0;
let multiplier_WireBwMultiplierToModulator = false;

selectors.multiplierBlockBottom.onclick = function (e) {
	multiplier_initial_mousex = parseInt(e.pageX - multiplier_canvasx);
	multiplier_initial_mousey = parseInt(e.pageY - multiplier_canvasy);
	multiplier_WireBwMultiplierToModulator = true;
	singleton.multiplier_isWireConnected = true;
};

selectors.modulatorBlockTop.onclick = function (e) {
	multiplier_last_mousex = parseInt(e.pageX - multiplier_canvasx);
	multiplier_last_mousey = parseInt(e.pageY - multiplier_canvasy);
	multiplier_WireBwMultiplierToModulator = false;
	if (singleton.multiplier_isWireConnected) {
		singleton.multiplier_isWireConnected = true;
	}
};

selectors.connectionWireBwMultiplierToModulator.onmousemove = function (e) {
	if (multiplier_WireBwMultiplierToModulator) {
		multiplier_mousex = parseInt(e.pageX - multiplier_canvasx);
		multiplier_mousey = parseInt(e.pageY - multiplier_canvasy);
		singleton.multiplier_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwMultiplierToModulator.width,
			selectors.canvasWireBwMultiplierToModulator.height
		); //clear canvas
		singleton.multiplier_ctx.beginPath();
		singleton.multiplier_ctx.moveTo(multiplier_initial_mousex, multiplier_initial_mousey);
		singleton.multiplier_ctx.lineTo(multiplier_mousex, multiplier_mousey);
		singleton.multiplier_ctx.strokeStyle = "black";
		singleton.multiplier_ctx.lineWidth = 5;
		singleton.multiplier_ctx.lineJoin = singleton.multiplier_ctx.lineCap = "round";
		singleton.multiplier_ctx.stroke();
	} else if (singleton.multiplier_isModulatorMoving && singleton.multiplier_isWireConnected) {
		multiplier_mousex = parseInt(e.pageX + 0 - multiplier_canvasx);
		multiplier_mousey = parseInt(e.pageY - 38 - multiplier_canvasy);
		multiplier_last_mousex = parseInt(e.pageX + 0 - multiplier_canvasx);
		multiplier_last_mousey = parseInt(e.pageY - 38 - multiplier_canvasy);
		singleton.multiplier_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwMultiplierToModulator.width,
			selectors.canvasWireBwMultiplierToModulator.height
		); //clear canvas
		singleton.multiplier_ctx.beginPath();
		singleton.multiplier_ctx.moveTo(multiplier_initial_mousex, multiplier_initial_mousey);
		singleton.multiplier_ctx.lineTo(multiplier_mousex, multiplier_mousey);
		singleton.multiplier_ctx.strokeStyle = "black";
		singleton.multiplier_ctx.lineWidth = 5;
		singleton.multiplier_ctx.lineJoin = singleton.multiplier_ctx.lineCap = "round";
		singleton.multiplier_ctx.stroke();
	} else if (singleton.multiplier_isMultiplierMoving && singleton.multiplier_isWireConnected) {
		multiplier_mousex = parseInt(e.pageX + 0 - multiplier_canvasx);
		multiplier_mousey = parseInt(e.pageY + 38 - multiplier_canvasy);
		multiplier_initial_mousex = parseInt(e.pageX + 0 - multiplier_canvasx);
		multiplier_initial_mousey = parseInt(e.pageY + 38 - multiplier_canvasy);
		singleton.multiplier_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwMultiplierToModulator.width,
			selectors.canvasWireBwMultiplierToModulator.height
		); //clear canvas
		singleton.multiplier_ctx.beginPath();
		singleton.multiplier_ctx.moveTo(multiplier_mousex, multiplier_mousey);
		singleton.multiplier_ctx.lineTo(multiplier_last_mousex, multiplier_last_mousey);
		singleton.multiplier_ctx.strokeStyle = "black";
		singleton.multiplier_ctx.lineWidth = 5;
		singleton.multiplier_ctx.lineJoin = singleton.multiplier_ctx.lineCap = "round";
		singleton.multiplier_ctx.stroke();
	}
};
