import { showAllBlocks } from "../../blocksQuery/showBlocks.js";
import * as selectors from "../../domSelector/domSelector.js";
import singleton from "../../singleton/singleton.js";
import { obj } from "../../state/state.js";

export const frequencySensistivitySubmitMouseUp = () => {
    if (!singleton.editFreqSensistivity) {
        singleton.isFreqSensistivityPlaced = true;
        let frequencySensistivity = document.querySelector(".frequencySensistivity__signal--block");

        frequencySensistivity.style.position = "absolute";
        frequencySensistivity.style.zIndex = 1000;

        selectors.frequencySensistivityRight.style.position = "absolute";
        selectors.frequencySensistivityRight.style.zIndex = 1000;
        selectors.frequencySensistivityRight.style.display = "block";

        function onMouseMove(event) {
            frequencySensistivity.style.left = event.pageX - frequencySensistivity.offsetWidth / 2 + "px";
            frequencySensistivity.style.top = event.pageY - frequencySensistivity.offsetHeight / 2 + "px";

            selectors.frequencySensistivityRight.style.left =
                event.pageX + 53 - selectors.frequencySensistivityRight.offsetWidth / 2 + "px";
            selectors.frequencySensistivityRight.style.top =
                event.pageY + 1 - selectors.frequencySensistivityRight.offsetHeight / 2 + "px";
        }

        document.addEventListener("mousemove", onMouseMove);

        frequencySensistivity.ondblclick = () => {
            singleton.freqSen_isFreqSensistivityMoving = true;
            document.addEventListener("mousemove", onMouseMove);
        };

        frequencySensistivity.onclick = () => {
            showAllBlocks();

            if (selectors.model.value === "Delete") {
                document
                    .getElementsByClassName("simulation-area")[0]
                    .removeChild(document.querySelector(".frequencySensistivity__signal--block"));
                selectors.frequencySensistivityRight.style.display = "none";
                singleton.isFreqSensistivityPlaced = false;
                singleton.freqSen_isWireConnected = false;
                //removing the wire
                singleton.freqSen_ctx.clearRect(
                    0,
                    0,
                    selectors.canvasWireBwModsigToMultiplier.width,
                    selectors.canvasWireBwModsigToMultiplier.height
                ); //clear canvas
                //
                selectors.model.value = "mode";
            } else if (selectors.model.value === "Edit") {
                singleton.editFreqSensistivity = true;
                $("#exampleModal").modal("show");
                selectors.model.value = "mode";
            } else if (selectors.model.value === "output") {
                $("#freqSenOutput").modal("show");
                document.querySelector(".freqSenResult").innerHTML = `
            <h2 class='fontStyle'>Frequency Sensistivity : ${(2 * 3.14 * obj.frequencySensistivity).toFixed(
							2
						)} Hz/v</h4>
          `;
                selectors.model.value = "mode";
            }
            singleton.freqSen_isFreqSensistivityMoving = false;
            document.removeEventListener("mousemove", onMouseMove);
        };
    }
};