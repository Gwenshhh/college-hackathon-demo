function getSupport() {
    let text = document.getElementById("userInput").value.trim();
    let output = document.getElementById("output");

    if (text === "") {
        output.innerText = "Please share something so we can support you.";
        return;
    }

    let response = "";

    if (text.toLowerCase().includes("stress") ||
        text.toLowerCase().includes("anxious") ||
        text.toLowerCase().includes("pressure")) {

        response = "It's okay to feel stressed. Take a deep breath. You're not alone, and your feelings are valid.";

    } else if (text.toLowerCase().includes("fear") ||
               text.toLowerCase().includes("judged")) {

        response = "You are in a safe space here. There is no judgment. Expressing yourself is a strong first step.";

    } else {
        response = "Thank you for sharing. It's important to acknowledge your feelings. Take care of yourself.";
    }

    output.innerText = response;
}