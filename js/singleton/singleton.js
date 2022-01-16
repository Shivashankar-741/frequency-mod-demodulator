import * as selectors from "../domSelector/domSelector.js";

class Singleton {
	constructor() {
		if (Singleton.instance == null) {
			// BLOCKS
			this.isModulatingSignalPlaced = false;
			this.isCarrierSignalPlaced = false;
			this.isFreqSensistivityPlaced = false;
			this.isIntegratorPlaced = false;
			this.isMultiplierPlaced = false;
			this.isModulatorPlaced = false;
			this.isDifferentiatorPlaced = false;
			this.isEnvelopeDetectorPlaced = false;
			this.isDcLimiterPlaced = false;
			this.isParamExtractionPlaced = false;

			// WIRE START

			// wire from modulator signal to integrator
			this.modSig_ctx = selectors.canvasWireBwModsigToIntegrator.getContext("2d");

			this.modSig_isWireConnected = false;
			this.modSig_isModulatingSignalMoving = false;
			this.modSig_isIntegratorMoving = false;

			// wire from frequency sensistivity to multiplier
			this.freqSen_ctx = selectors.canvasWireBwModsigToMultiplier.getContext("2d");

			this.freqSen_isWireConnected = false;
			this.freqSen_isFreqSensistivityMoving = false;
			this.freqSen_isMultiplierMoving = false;

			// wire between carrierSignal to modulator
			this.carrierSig_ctx = selectors.canvasWireBwCarsigToModulator.getContext("2d");

			this.carrierSig_isWireConnected = false;
			this.carrierSig_isCarrierSignalMoving = false;
			this.carrierSig_isModulatorMoving = false;

			// wire between integrator to multiplier
			this.integrator_ctx = selectors.canvasWireBwIntegratorToMultiplier.getContext("2d");

			this.integrator_isWireConnected = false;
			this.integrator_isIntegratorMoving = false;
			this.integrator_isMulitplierMoving = false;

			// wire between multiplier to modulator
			this.multiplier_ctx = selectors.canvasWireBwMultiplierToModulator.getContext("2d");

			this.multiplier_isWireConnected = false;
			this.multiplier_isMultiplierMoving = false;
			this.multiplier_isModulatorMoving = false;

			//wire between modulator to diffeerentiator
			this.modulator_ctx = selectors.canvasWireBwModulatorToDifferentiator.getContext("2d");

			this.modulator_isWireConnected = false;
			this.modulator_isModulatorMoving = false;
			this.modulator_isDifferentiatorMoving = false;

			// wire between differentiator to envelopedetector
			this.differentiator_ctx = canvasWireBwDifferentiatorTodcLimiter.getContext("2d");

			this.differentiator_isWireConnected = false;
			this.differentiator_isDifferentiatorMoving = false;
			this.differentiator_isenvelopeDetectorMoving = false;

			//wire between envelopeDetector to dclimiter
			this.envelope_ctx = selectors.canvasWireBwenvelopeDetToParamExtract.getContext("2d");

			this.envelope_isWireConnected = false;
			this.envelope_isEnvelopeDetectorMoving = false;
			this.envelope_isDcLimiterMoving = false;

			//wire between dcLimiter to parameter extraction
			this.dcLimiter_ctx = selectors.canvasWireBwdcLimiterToEnvelopeDetector.getContext("2d");

			this.dcLimiter_isWireConnected = false;
			this.dcLimiter_isdcLimiterMoving = false;
			this.dcLimiter_parameterExtractionMoving = false;

			// WIRE END

			// EDIT SIGNAL
			this.editModulatingSignal = false;
			this.editCarrierSignal = false;
			this.editFreqSensistivity = false;

			// CLEAR SIGNAL
			this.clearModulatingSignal = false;
			this.clearCarrierSignal = false;

			// UPDATE SIGNAL
			this.updatedModulatingSignal = false;
			this.updateCarrierSignal = false;

			Singleton.instance = this;
		}
		return Singleton.instance;
	}

	methodsGoHere() {}
}

const singleton = new Singleton();

export default singleton;
