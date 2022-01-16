import * as selectors from "../domSelector/domSelector.js";

selectors.downloadGraph.addEventListener("click", function () {
	console.log("check graph here");
	html2canvas(document.getElementById("calculator")).then((canvas) => {
		let url = canvas.toDataURL("image/png");
		let nindown = document.getElementById("ninjadown");
		nindown.href = url;
		nindown.click();
	});
});
