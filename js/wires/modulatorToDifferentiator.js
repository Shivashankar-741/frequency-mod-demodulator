import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let modulator_canvasx = selectors.canvasWireBwModulatorToDifferentiator.offsetLeft;
let modulator_canvasy = selectors.canvasWireBwModulatorToDifferentiator.offsetTop;
let modulator_initial_mousex = 0;
let modulator_initial_mousey = 0;
let modulator_last_mousex = 0;
let modulator_last_mousey = 0;
let modulator_mousex = 0;
let modulator_mousey = 0;
let modulator_WireBwModulatorToDifferentiator = false;

selectors.modulatorBlockRight.onclick = function (e) {
	modulator_initial_mousex = parseInt(e.pageX - modulator_canvasx);
	modulator_initial_mousey = parseInt(e.pageY - modulator_canvasy);
	modulator_WireBwModulatorToDifferentiator = true;
	singleton.modulator_isWireConnected = true;
};

selectors.differentiatorBlockLeft.onclick = function (e) {
	modulator_last_mousex = parseInt(e.pageX - modulator_canvasx);
	modulator_last_mousey = parseInt(e.pageY - modulator_canvasy);
	modulator_WireBwModulatorToDifferentiator = false;
	if (singleton.modulator_isWireConnected) {
		singleton.modulator_isWireConnected = true;
	}
};

selectors.connectionWireBwModulatorToDifferentiator.onmousemove = function (e) {
	// console.log('dfd');
	if (modulator_WireBwModulatorToDifferentiator) {
		modulator_mousex = parseInt(e.pageX - modulator_canvasx);
		modulator_mousey = parseInt(e.pageY - modulator_canvasy);
		singleton.modulator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModulatorToDifferentiator.width,
			selectors.canvasWireBwModulatorToDifferentiator.height
		); //clear canvas
		singleton.modulator_ctx.beginPath();
		singleton.modulator_ctx.moveTo(modulator_initial_mousex, modulator_initial_mousey);
		singleton.modulator_ctx.lineTo(modulator_mousex, modulator_mousey);
		singleton.modulator_ctx.strokeStyle = "black";
		singleton.modulator_ctx.lineWidth = 5;
		singleton.modulator_ctx.lineJoin = singleton.modulator_ctx.lineCap = "round";
		singleton.modulator_ctx.stroke();
	} else if (selectors.modulator_isDifferentiatorMoving && singleton.modulator_isWireConnected) {
		modulator_mousex = parseInt(e.pageX - 53 - modulator_canvasx);
		modulator_mousey = parseInt(e.pageY + 1 - modulator_canvasy);
		modulator_last_mousex = parseInt(e.pageX - 53 - modulator_canvasx);
		modulator_last_mousey = parseInt(e.pageY + 1 - modulator_canvasy);
		singleton.modulator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModulatorToDifferentiator.width,
			selectors.canvasWireBwModulatorToDifferentiator.height
		); //clear canvas
		singleton.modulator_ctx.beginPath();
		singleton.modulator_ctx.moveTo(modulator_initial_mousex, modulator_initial_mousey);
		singleton.modulator_ctx.lineTo(modulator_mousex, modulator_mousey);
		singleton.modulator_ctx.strokeStyle = "black";
		singleton.modulator_ctx.lineWidth = 5;
		singleton.modulator_ctx.lineJoin = singleton.modulator_ctx.lineCap = "round";
		singleton.modulator_ctx.stroke();
	} else if (singleton.modulator_isModulatorMoving && singleton.modulator_isWireConnected) {
		modulator_mousex = parseInt(e.pageX + 53 - modulator_canvasx);
		modulator_mousey = parseInt(e.pageY + 1 - modulator_canvasy);
		modulator_initial_mousex = parseInt(e.pageX + 53 - modulator_canvasx);
		modulator_initial_mousey = parseInt(e.pageY + 1 - modulator_canvasy);
		singleton.modulator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModulatorToDifferentiator.width,
			selectors.canvasWireBwModulatorToDifferentiator.height
		); //clear canvas
		singleton.modulator_ctx.beginPath();
		singleton.modulator_ctx.moveTo(modulator_mousex, modulator_mousey);
		singleton.modulator_ctx.lineTo(modulator_last_mousex, modulator_last_mousey);
		singleton.modulator_ctx.strokeStyle = "black";
		singleton.modulator_ctx.lineWidth = 5;
		singleton.modulator_ctx.lineJoin = singleton.modulator_ctx.lineCap = "round";
		singleton.modulator_ctx.stroke();
	}
};
