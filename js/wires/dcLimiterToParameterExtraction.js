import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let dcLimiter_canvasx = selectors.canvasWireBwdcLimiterToEnvelopeDetector.offsetLeft;
let dcLimiter_canvasy = selectors.canvasWireBwdcLimiterToEnvelopeDetector.offsetTop;
let dcLimiter_initial_mousex = 0;
let dcLimiter_initial_mousey = 0;
let dcLimiter_last_mousex = 0;
let dcLimiter_last_mousey = 0;
let dcLimiter_mousex = 0;
let dcLimiter_mousey = 0;
let dcLimiter_WireBwdcLimiterToEnvelopeDetector = false;

selectors.dcLimitedCircuitBlockRight.onclick = function (e) {
	dcLimiter_initial_mousex = parseInt(e.pageX - dcLimiter_canvasx);
	dcLimiter_initial_mousey = parseInt(e.pageY - dcLimiter_canvasy);
	dcLimiter_WireBwdcLimiterToEnvelopeDetector = true;
	singleton.dcLimiter_isWireConnected = true;
};

selectors.parameterExtractionBlockLeft.onclick = function (e) {
	dcLimiter_last_mousex = parseInt(e.pageX - dcLimiter_canvasx);
	dcLimiter_last_mousey = parseInt(e.pageY - dcLimiter_canvasy);
	dcLimiter_WireBwdcLimiterToEnvelopeDetector = false;
	if (singleton.dcLimiter_isWireConnected) {
		singleton.dcLimiter_isWireConnected = true;
		alert("Tutorial button has activated!");
		document.querySelector(".btn-tutorial").className = "btn btn-secondary ml-2 btn-tutorial";
	}
};

selectors.check2.onmousemove = function (e) {
	if (dcLimiter_WireBwdcLimiterToEnvelopeDetector) {
		dcLimiter_mousex = parseInt(e.pageX - dcLimiter_canvasx);
		dcLimiter_mousey = parseInt(e.pageY - dcLimiter_canvasy);
		singleton.dcLimiter_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.width,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.height
		); //clear canvas
		singleton.dcLimiter_ctx.beginPath();
		singleton.dcLimiter_ctx.moveTo(dcLimiter_initial_mousex, dcLimiter_initial_mousey);
		singleton.dcLimiter_ctx.lineTo(dcLimiter_mousex, dcLimiter_mousey);
		singleton.dcLimiter_ctx.strokeStyle = "black";
		singleton.dcLimiter_ctx.lineWidth = 5;
		singleton.dcLimiter_ctx.lineJoin = singleton.dcLimiter_ctx.lineCap = "round";
		singleton.dcLimiter_ctx.stroke();
	} else if (singleton.dcLimiter_parameterExtractionMoving && singleton.dcLimiter_isWireConnected) {
		dcLimiter_mousex = parseInt(e.pageX - 53 - dcLimiter_canvasx);
		dcLimiter_mousey = parseInt(e.pageY + 1 - dcLimiter_canvasy);
		dcLimiter_last_mousex = parseInt(e.pageX - 53 - dcLimiter_canvasx);
		dcLimiter_last_mousey = parseInt(e.pageY + 1 - dcLimiter_canvasy);
		singleton.dcLimiter_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.width,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.height
		); //clear canvas
		singleton.dcLimiter_ctx.beginPath();
		singleton.dcLimiter_ctx.moveTo(dcLimiter_initial_mousex, dcLimiter_initial_mousey);
		singleton.dcLimiter_ctx.lineTo(dcLimiter_mousex, dcLimiter_mousey);
		singleton.dcLimiter_ctx.strokeStyle = "black";
		singleton.dcLimiter_ctx.lineWidth = 5;
		singleton.dcLimiter_ctx.lineJoin = singleton.dcLimiter_ctx.lineCap = "round";
		singleton.dcLimiter_ctx.stroke();
	} else if (singleton.dcLimiter_isdcLimiterMoving && singleton.dcLimiter_isWireConnected) {
		dcLimiter_mousex = parseInt(e.pageX + 53 - dcLimiter_canvasx);
		dcLimiter_mousey = parseInt(e.pageY + 1 - dcLimiter_canvasy);
		dcLimiter_initial_mousex = parseInt(e.pageX + 53 - dcLimiter_canvasx);
		dcLimiter_initial_mousey = parseInt(e.pageY + 1 - dcLimiter_canvasy);
		singleton.dcLimiter_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.width,
			selectors.canvasWireBwdcLimiterToEnvelopeDetector.height
		); //clear canvas
		singleton.dcLimiter_ctx.beginPath();
		singleton.dcLimiter_ctx.moveTo(dcLimiter_mousex, dcLimiter_mousey);
		singleton.dcLimiter_ctx.lineTo(dcLimiter_last_mousex, dcLimiter_last_mousey);
		singleton.dcLimiter_ctx.strokeStyle = "black";
		singleton.dcLimiter_ctx.lineWidth = 5;
		singleton.dcLimiter_ctx.lineJoin = singleton.dcLimiter_ctx.lineCap = "round";
		singleton.dcLimiter_ctx.stroke();
	}
};
