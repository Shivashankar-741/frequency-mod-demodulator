import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let integrator_canvasx = selectors.canvasWireBwIntegratorToMultiplier.offsetLeft;
let integrator_canvasy = selectors.canvasWireBwIntegratorToMultiplier.offsetTop;
let integrator_initial_mousex = 0;
let integrator_initial_mousey = 0;
let integrator_last_mousex = 0;
let integrator_last_mousey = 0;
let integrator_mousex = 0;
let integrator_mousey = 0;
let integrator_WireBwIntegratorToMultiplier = false;

selectors.integratorBlockBottom.onclick = function (e) {
	integrator_initial_mousex = parseInt(e.pageX - integrator_canvasx);
	integrator_initial_mousey = parseInt(e.pageY - integrator_canvasy);
	integrator_WireBwIntegratorToMultiplier = true;
	singleton.integrator_isWireConnected = true;
};

selectors.multiplierBlockTop.onclick = function (e) {
	integrator_last_mousex = parseInt(e.pageX - integrator_canvasx);
	integrator_last_mousey = parseInt(e.pageY - integrator_canvasy);
	integrator_WireBwIntegratorToMultiplier = false;
	if (singleton.integrator_isWireConnected) {
		singleton.integrator_isWireConnected = true;
	}
};

selectors.connectionWireBwIntegratorToMultiplier.onmousemove = function (e) {
	if (integrator_WireBwIntegratorToMultiplier) {
		integrator_mousex = parseInt(e.pageX - integrator_canvasx);
		integrator_mousey = parseInt(e.pageY - integrator_canvasy);
		singleton.integrator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwIntegratorToMultiplier.width,
			selectors.canvasWireBwIntegratorToMultiplier.height
		); //clear canvas
		singleton.integrator_ctx.beginPath();
		singleton.integrator_ctx.moveTo(integrator_initial_mousex, integrator_initial_mousey);
		singleton.integrator_ctx.lineTo(integrator_mousex, integrator_mousey);
		singleton.integrator_ctx.strokeStyle = "black";
		singleton.integrator_ctx.lineWidth = 5;
		singleton.integrator_ctx.lineJoin = singleton.integrator_ctx.lineCap = "round";
		singleton.integrator_ctx.stroke();
	} else if (singleton.integrator_isMulitplierMoving && singleton.integrator_isWireConnected) {
		integrator_mousex = parseInt(e.pageX + 0 - integrator_canvasx);
		integrator_mousey = parseInt(e.pageY - 38 - integrator_canvasy);
		integrator_last_mousex = parseInt(e.pageX + 0 - integrator_canvasx);
		integrator_last_mousey = parseInt(e.pageY - 38 - integrator_canvasy);
		singleton.integrator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwIntegratorToMultiplier.width,
			selectors.canvasWireBwIntegratorToMultiplier.height
		); //clear canvas
		singleton.integrator_ctx.beginPath();
		singleton.integrator_ctx.moveTo(integrator_initial_mousex, integrator_initial_mousey);
		singleton.integrator_ctx.lineTo(integrator_mousex, integrator_mousey);
		singleton.integrator_ctx.strokeStyle = "black";
		singleton.integrator_ctx.lineWidth = 5;
		singleton.integrator_ctx.lineJoin = singleton.integrator_ctx.lineCap = "round";
		singleton.integrator_ctx.stroke();
	} else if (singleton.integrator_isIntegratorMoving && singleton.integrator_isWireConnected) {
		integrator_mousex = parseInt(e.pageX + 0 - integrator_canvasx);
		integrator_mousey = parseInt(e.pageY + 38 - integrator_canvasy);
		integrator_initial_mousex = parseInt(e.pageX + 0 - integrator_canvasx);
		integrator_initial_mousey = parseInt(e.pageY + 38 - integrator_canvasy);
		singleton.integrator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwIntegratorToMultiplier.width,
			selectors.canvasWireBwIntegratorToMultiplier.height
		); //clear canvas
		singleton.integrator_ctx.beginPath();
		singleton.integrator_ctx.moveTo(integrator_mousex, integrator_mousey);
		singleton.integrator_ctx.lineTo(integrator_last_mousex, integrator_last_mousey);
		singleton.integrator_ctx.strokeStyle = "black";
		singleton.integrator_ctx.lineWidth = 5;
		singleton.integrator_ctx.lineJoin = singleton.integrator_ctx.lineCap = "round";
		singleton.integrator_ctx.stroke();
	}
};
