import * as selectors from "../domSelector/domSelector.js";
import singleton from "../singleton/singleton.js";

let envelope_canvasx = selectors.canvasWireBwenvelopeDetToParamExtract.offsetLeft;
let envelope_canvasy = selectors.canvasWireBwenvelopeDetToParamExtract.offsetTop;
let envelope_initial_mousex = 0;
let envelope_initial_mousey = 0;
let envelope_last_mousex = 0;
let envelope_last_mousey = 0;
let envelope_mousex = 0;
let envelope_mousey = 0;
let envelope_WireBwEnvelopeToParameterExtraction = false;

selectors.envelopeDetectorBlockRight.onclick = function (e) {
	envelope_initial_mousex = parseInt(e.pageX - envelope_canvasx);
	envelope_initial_mousey = parseInt(e.pageY - envelope_canvasy);
	envelope_WireBwEnvelopeToParameterExtraction = true;
	singleton.envelope_isWireConnected = true;
};

selectors.dcLimitedCircuitBlockLeft.onclick = function (e) {
	envelope_last_mousex = parseInt(e.pageX - envelope_canvasx);
	envelope_last_mousey = parseInt(e.pageY - envelope_canvasy);
	envelope_WireBwEnvelopeToParameterExtraction = false;
	if (singleton.envelope_isWireConnected) {
		singleton.envelope_isWireConnected = true;
	}
};

selectors.connectionWireBwDifferentiatorTodcLimiter.onmousemove = function (e) {
	if (envelope_WireBwEnvelopeToParameterExtraction) {
		envelope_mousex = parseInt(e.pageX - envelope_canvasx);
		envelope_mousey = parseInt(e.pageY - envelope_canvasy);
		singleton.envelope_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwenvelopeDetToParamExtract.width,
			selectors.canvasWireBwenvelopeDetToParamExtract.height
		); //clear canvas
		singleton.envelope_ctx.beginPath();
		singleton.envelope_ctx.moveTo(envelope_initial_mousex, envelope_initial_mousey);
		singleton.envelope_ctx.lineTo(envelope_mousex, envelope_mousey);
		singleton.envelope_ctx.strokeStyle = "black";
		singleton.envelope_ctx.lineWidth = 5;
		singleton.envelope_ctx.lineJoin = singleton.envelope_ctx.lineCap = "round";
		singleton.envelope_ctx.stroke();
	} else if (singleton.envelope_isDcLimiterMoving && singleton.envelope_isWireConnected) {
		envelope_mousex = parseInt(e.pageX - 53 - envelope_canvasx);
		envelope_mousey = parseInt(e.pageY + 1 - envelope_canvasy);
		envelope_last_mousex = parseInt(e.pageX - 53 - envelope_canvasx);
		envelope_last_mousey = parseInt(e.pageY + 1 - envelope_canvasy);
		singleton.envelope_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwenvelopeDetToParamExtract.width,
			selectors.canvasWireBwenvelopeDetToParamExtract.height
		); //clear canvas
		singleton.envelope_ctx.beginPath();
		singleton.envelope_ctx.moveTo(envelope_initial_mousex, envelope_initial_mousey);
		singleton.envelope_ctx.lineTo(envelope_mousex, envelope_mousey);
		singleton.envelope_ctx.strokeStyle = "black";
		singleton.envelope_ctx.lineWidth = 5;
		singleton.envelope_ctx.lineJoin = singleton.envelope_ctx.lineCap = "round";
		singleton.envelope_ctx.stroke();
	} else if (singleton.envelope_isEnvelopeDetectorMoving && singleton.envelope_isWireConnected) {
		envelope_mousex = parseInt(e.pageX + 53 - envelope_canvasx);
		envelope_mousey = parseInt(e.pageY + 1 - envelope_canvasy);
		envelope_initial_mousex = parseInt(e.pageX + 53 - envelope_canvasx);
		envelope_initial_mousey = parseInt(e.pageY + 1 - envelope_canvasy);
		singleton.envelope_ctx.clearRect(
			0,
			0,
			selectors.canvasWireBwenvelopeDetToParamExtract.width,
			selectors.canvasWireBwenvelopeDetToParamExtract.height
		); //clear canvas
		singleton.envelope_ctx.beginPath();
		singleton.envelope_ctx.moveTo(envelope_mousex, envelope_mousey);
		singleton.envelope_ctx.lineTo(envelope_last_mousex, envelope_last_mousey);
		singleton.envelope_ctx.strokeStyle = "black";
		singleton.envelope_ctx.lineWidth = 5;
		singleton.envelope_ctx.lineJoin = singleton.envelope_ctx.lineCap = "round";
		singleton.envelope_ctx.stroke();
	}
};
