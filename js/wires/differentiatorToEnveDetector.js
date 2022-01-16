import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let differentiator_canvasx = selectors.canvasWireBwDifferentiatorTodcLimiter.offsetLeft;
let differentiator_canvasy = selectors.canvasWireBwDifferentiatorTodcLimiter.offsetTop;
let differentiator_initial_mousex = 0;
let differentiator_initial_mousey = 0;
let differentiator_last_mousex = 0;
let differentiator_last_mousey = 0;
let differentiator_mousex = 0;
let differentiator_mousey = 0;
let differentiator_WireBwDifferentiatorTodcLimiter = false;

selectors.differentiatorBlockRight.onclick = function (e) {
	differentiator_initial_mousex = parseInt(e.pageX - differentiator_canvasx);
	differentiator_initial_mousey = parseInt(e.pageY - differentiator_canvasy);
	differentiator_WireBwDifferentiatorTodcLimiter = true;
	singleton.differentiator_isWireConnected = true;
};

selectors.envelopeDetectorBlockLeft.onclick = function (e) {
	differentiator_last_mousex = parseInt(e.pageX - differentiator_canvasx);
	differentiator_last_mousey = parseInt(e.pageY - differentiator_canvasy);
	differentiator_WireBwDifferentiatorTodcLimiter = false;
	if (singleton.differentiator_isWireConnected) {
		singleton.differentiator_isWireConnected = true;
	}
};

selectors.check.onmousemove = function (e) {
	if (differentiator_WireBwDifferentiatorTodcLimiter) {
		differentiator_mousex = parseInt(e.pageX - differentiator_canvasx);
		differentiator_mousey = parseInt(e.pageY - differentiator_canvasy);
		singleton.differentiator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwDifferentiatorTodcLimiter.width,
			selectors.canvasWireBwDifferentiatorTodcLimiter.height
		); //clear canvas
		singleton.differentiator_ctx.beginPath();
		singleton.differentiator_ctx.moveTo(
			differentiator_initial_mousex,
			differentiator_initial_mousey
		);
		singleton.differentiator_ctx.lineTo(differentiator_mousex, differentiator_mousey);
		singleton.differentiator_ctx.strokeStyle = "black";
		singleton.differentiator_ctx.lineWidth = 5;
		singleton.differentiator_ctx.lineJoin = singleton.differentiator_ctx.lineCap = "round";
		singleton.differentiator_ctx.stroke();
	} else if (
		singleton.differentiator_isenvelopeDetectorMoving &&
		singleton.differentiator_isWireConnected
	) {
		differentiator_mousex = parseInt(e.pageX - 53 - differentiator_canvasx);
		differentiator_mousey = parseInt(e.pageY + 1 - differentiator_canvasy);
		differentiator_last_mousex = parseInt(e.pageX - 53 - differentiator_canvasx);
		differentiator_last_mousey = parseInt(e.pageY + 1 - differentiator_canvasy);
		singleton.differentiator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwDifferentiatorTodcLimiter.width,
			selectors.canvasWireBwDifferentiatorTodcLimiter.height
		); //clear canvas
		singleton.differentiator_ctx.beginPath();
		singleton.differentiator_ctx.moveTo(
			differentiator_initial_mousex,
			differentiator_initial_mousey
		);
		singleton.differentiator_ctx.lineTo(differentiator_mousex, differentiator_mousey);
		singleton.differentiator_ctx.strokeStyle = "black";
		singleton.differentiator_ctx.lineWidth = 5;
		singleton.differentiator_ctx.lineJoin = singleton.differentiator_ctx.lineCap = "round";
		singleton.differentiator_ctx.stroke();
	} else if (
		singleton.differentiator_isDifferentiatorMoving &&
		singleton.differentiator_isWireConnected
	) {
		differentiator_mousex = parseInt(e.pageX + 53 - differentiator_canvasx);
		differentiator_mousey = parseInt(e.pageY + 1 - differentiator_canvasy);
		differentiator_initial_mousex = parseInt(e.pageX + 53 - differentiator_canvasx);
		differentiator_initial_mousey = parseInt(e.pageY + 1 - differentiator_canvasy);
		singleton.differentiator_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwDifferentiatorTodcLimiter.width,
			selectors.canvasWireBwDifferentiatorTodcLimiter.height
		); //clear canvas
		singleton.differentiator_ctx.beginPath();
		singleton.differentiator_ctx.moveTo(differentiator_mousex, differentiator_mousey);
		singleton.differentiator_ctx.lineTo(differentiator_last_mousex, differentiator_last_mousey);
		singleton.differentiator_ctx.strokeStyle = "black";
		singleton.differentiator_ctx.lineWidth = 5;
		singleton.differentiator_ctx.lineJoin = singleton.differentiator_ctx.lineCap = "round";
		singleton.differentiator_ctx.stroke();
	}
};
