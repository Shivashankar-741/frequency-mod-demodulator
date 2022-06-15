import * as selectors from "../domSelector/domSelector.js";

let correctAnswers = ["C", "A", "D", "B", "A", "D"];

let options = ["A", "B", "C", "D"];

let userAnswers = [];

console.log("file got connected");

selectors.assesmentSubmitBtn.onclick = () => {
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j < options.length; j++) {
            if (document.getElementById(`question-${i}-answers-${options[j]}`).checked) {
                userAnswers.push(document.getElementById(`question-${i}-answers-${options[j]}`).value);
            }
        }
        //O(4n) => O(n)
    }
    console.log("userAnswers: ", userAnswers);
    $("#formativeAssessmentResult").modal("show");
    document.querySelector(".formAssessResult").innerHTML = `
        <h1 class='qnAns'> ${
					userAnswers[0] === correctAnswers[0]
						? "<span class='green'>1. Correct<span/>"
						: "<span class='red'>1. Incorrect Answer</span>, <span class='green'>answer is NBFM</span>"
				}</h1>
        <h1 class='qnAns'> ${
					userAnswers[1] === correctAnswers[1]
						? "<span class='green'>2. Correct</span>"
						: "2. <span class='red'>Incorrect Answer</span>, <span class='green'>answer is 600 Hz</span>"
				}</h1>
        <h1 class='qnAns'> ${
					userAnswers[2] === correctAnswers[2]
						? "3. <span class='green'>Correct</span>"
						: "3. <span class='red'>Incorrect Answer,</span> <span class='green'>answer is Carrier frequency</span>"
				}</h1>
        <h1 class='qnAns'> ${
					userAnswers[3] === correctAnswers[3]
						? "<span class='green'>4. Correct</span>"
						: "4.<span class='red'> Incorrect Answer,</span> <span class='green'>answer is Frequency of the carrier signal is varied with respect to modulating signal</span>"
				}</h1>
        <h1 class='qnAns'> ${
					userAnswers[4] === correctAnswers[4]
						? "<span class='green'>5. Correct</span>"
						: "<span class='red'>5. Incorrect Answer,</span> <span class='green'>answer is Differentiator & Integrator</span>"
				}</h1>
        <h1 class='qnAns'> ${
					userAnswers[5] === correctAnswers[5]
						? "<span class='green'>6. Correct</span>"
						: "<span class='red'>6. Incorrect Answer,</span> <span class='green'>answer is Greater than modulating signal</span>"
				}</h1>
      `;
};

selectors.paraExtClostBtn.onclick = () => {
    console.log("im triggering here");
    $("#formativeAssessment").modal("show");
};