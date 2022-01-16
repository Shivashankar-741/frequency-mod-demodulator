import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let modSig_canvasx = selectors.canvasWireBwModsigToIntegrator.offsetLeft;
let modSig_canvasy = selectors.canvasWireBwModsigToIntegrator.offsetTop;
let modSig_initial_mousex = 0;
let modSig_initial_mousey = 0;
let modSig_last_mousex = 0;
let modSig_last_mousey = 0;
let modSig_mousex = 0;
let modSig_mousey = 0;
let modSig_WireBwModulatingtoIntegrator = false;

selectors.modulatingSignalRight.onclick = function (e) {
	modSig_initial_mousex = parseInt(e.pageX - modSig_canvasx);
	modSig_initial_mousey = parseInt(e.pageY - modSig_canvasy);
	modSig_WireBwModulatingtoIntegrator = true;
	singleton.modSig_isWireConnected = true;
};

selectors.integratorBlockLeft.onclick = function (e) {
	modSig_last_mousex = parseInt(e.pageX - modSig_canvasx);
	modSig_last_mousey = parseInt(e.pageY - modSig_canvasy);
	modSig_WireBwModulatingtoIntegrator = false;
	if (singleton.modSig_isWireConnected) {
		singleton.modSig_isWireConnected = true;
	}
};

selectors.connectionWireBwModsigToIntegrator.onmousemove = function (e) {
	if (modSig_WireBwModulatingtoIntegrator) {
		modSig_mousex = parseInt(e.pageX - modSig_canvasx);
		modSig_mousey = parseInt(e.pageY - modSig_canvasy);
		singleton.modSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToIntegrator.width,
			selectors.canvasWireBwModsigToIntegrator.height
		); //clear canvas
		singleton.modSig_ctx.beginPath();
		singleton.modSig_ctx.moveTo(modSig_initial_mousex, modSig_initial_mousey);
		singleton.modSig_ctx.lineTo(modSig_mousex, modSig_mousey);
		singleton.modSig_ctx.strokeStyle = "black";
		singleton.modSig_ctx.lineWidth = 5;
		singleton.modSig_ctx.lineJoin = singleton.modSig_ctx.lineCap = "round";
		singleton.modSig_ctx.stroke();
	} else if (singleton.modSig_isIntegratorMoving && singleton.modSig_isWireConnected) {
		modSig_mousex = parseInt(e.pageX - 53 - modSig_canvasx);
		modSig_mousey = parseInt(e.pageY - modSig_canvasy);
		modSig_last_mousex = parseInt(e.pageX - 53 - modSig_canvasx);
		modSig_last_mousey = parseInt(e.pageY - modSig_canvasy);
		singleton.modSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToIntegrator.width,
			selectors.canvasWireBwModsigToIntegrator.height
		); //clear canvas
		singleton.modSig_ctx.beginPath();
		singleton.modSig_ctx.moveTo(modSig_initial_mousex, modSig_initial_mousey);
		singleton.modSig_ctx.lineTo(modSig_mousex, modSig_mousey);
		singleton.modSig_ctx.strokeStyle = "black";
		singleton.modSig_ctx.lineWidth = 5;
		singleton.modSig_ctx.lineJoin = singleton.modSig_ctx.lineCap = "round";
		singleton.modSig_ctx.stroke();
	} else if (singleton.modSig_isModulatingSignalMoving && singleton.modSig_isWireConnected) {
		modSig_mousex = parseInt(e.pageX + 53 - modSig_canvasx);
		modSig_mousey = parseInt(e.pageY - modSig_canvasy);
		modSig_initial_mousex = parseInt(e.pageX + 53 - modSig_canvasx);
		modSig_initial_mousey = parseInt(e.pageY - modSig_canvasy);
		singleton.modSig_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwModsigToIntegrator.width,
			selectors.canvasWireBwModsigToIntegrator.height
		); //clear canvas
		singleton.modSig_ctx.beginPath();
		singleton.modSig_ctx.moveTo(modSig_mousex, modSig_mousey);
		singleton.modSig_ctx.lineTo(modSig_last_mousex, modSig_last_mousey);
		singleton.modSig_ctx.strokeStyle = "black";
		singleton.modSig_ctx.lineWidth = 5;
		singleton.modSig_ctx.lineJoin = singleton.modSig_ctx.lineCap = "round";
		singleton.modSig_ctx.stroke();
	}
};
