import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let freqSen_canvasx = selectors.canvasWireBwModsigToMultiplier.offsetLeft;
let freqSen_canvasy = selectors.canvasWireBwModsigToMultiplier.offsetTop;
let freqSen_initial_mousex = 0;
let freqSen_initial_mousey = 0;
let freqSen_last_mousex = 0;
let freqSen_last_mousey = 0;
let freqSen_mousex = 0;
let freqSen_mousey = 0;
let freqSen_WireBwFreqSensistivityToMultiplier = false;

selectors.frequencySensistivityRight.onclick = function (e) {
	freqSen_initial_mousex = parseInt(e.pageX - freqSen_canvasx);
	freqSen_initial_mousey = parseInt(e.pageY - freqSen_canvasy);
	freqSen_WireBwFreqSensistivityToMultiplier = true;
	singleton.freqSen_isWireConnected = true;
};

selectors.multiplierBlockLeft.onclick = function (e) {
	freqSen_last_mousex = parseInt(e.pageX - freqSen_canvasx);
	freqSen_last_mousey = parseInt(e.pageY - freqSen_canvasy);
	freqSen_WireBwFreqSensistivityToMultiplier = false;
	if (singleton.freqSen_isWireConnected) {
		singleton.freqSen_isWireConnected = true;
	}
};

selectors.connectionWireBwFreqSenToMultiplier.onmousemove = function (e) {
	if (freqSen_WireBwFreqSensistivityToMultiplier) {
		freqSen_mousex = parseInt(e.pageX - freqSen_canvasx);
		freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
		singleton.freqSen_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToMultiplier.width,
			selectors.canvasWireBwModsigToMultiplier.height
		); //clear canvas
		singleton.freqSen_ctx.beginPath();
		singleton.freqSen_ctx.moveTo(freqSen_initial_mousex, freqSen_initial_mousey);
		singleton.freqSen_ctx.lineTo(freqSen_mousex, freqSen_mousey);
		singleton.freqSen_ctx.strokeStyle = "black";
		singleton.freqSen_ctx.lineWidth = 5;
		singleton.freqSen_ctx.lineJoin = singleton.freqSen_ctx.lineCap = "round";
		singleton.freqSen_ctx.stroke();
	} else if (singleton.freqSen_isMultiplierMoving && singleton.freqSen_isWireConnected) {
		freqSen_mousex = parseInt(e.pageX - 53 - freqSen_canvasx);
		freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
		freqSen_last_mousex = parseInt(e.pageX - 53 - freqSen_canvasx);
		freqSen_last_mousey = parseInt(e.pageY - freqSen_canvasy);
		singleton.freqSen_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToMultiplier.width,
			selectors.canvasWireBwModsigToMultiplier.height
		); //clear canvas
		singleton.freqSen_ctx.beginPath();
		singleton.freqSen_ctx.moveTo(freqSen_initial_mousex, freqSen_initial_mousey);
		singleton.freqSen_ctx.lineTo(freqSen_mousex, freqSen_mousey);
		singleton.freqSen_ctx.strokeStyle = "black";
		singleton.freqSen_ctx.lineWidth = 5;
		singleton.freqSen_ctx.lineJoin = singleton.freqSen_ctx.lineCap = "round";
		singleton.freqSen_ctx.stroke();
	} else if (singleton.freqSen_isFreqSensistivityMoving && singleton.freqSen_isWireConnected) {
		freqSen_mousex = parseInt(e.pageX + 53 - freqSen_canvasx);
		freqSen_mousey = parseInt(e.pageY - freqSen_canvasy);
		freqSen_initial_mousex = parseInt(e.pageX + 53 - freqSen_canvasx);
		freqSen_initial_mousey = parseInt(e.pageY - freqSen_canvasy);
		singleton.freqSen_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToMultiplier.width,
			selectors.canvasWireBwModsigToMultiplier.height
		); //clear canvas
		singleton.freqSen_ctx.beginPath();
		singleton.freqSen_ctx.moveTo(freqSen_mousex, freqSen_mousey);
		singleton.freqSen_ctx.lineTo(freqSen_last_mousex, freqSen_last_mousey);
		singleton.freqSen_ctx.strokeStyle = "black";
		singleton.freqSen_ctx.lineWidth = 5;
		singleton.freqSen_ctx.lineJoin = singleton.freqSen_ctx.lineCap = "round";
		singleton.freqSen_ctx.stroke();
	}
};
