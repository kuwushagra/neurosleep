function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function openModal() {
    const modal = document.getElementById("modal");
    const text = document.getElementById("ai-text");

    modal.classList.remove("hidden");
    text.textContent = "";

    const messages = [
        "Analyzing sleep pattern...",
        "Detected: 3AM overthinking habit.",
        "Emotional stability: questionable.",
        "Life choices: mildly concerning.",
        "Verdict: Buy NeuroSleep immediately."
    ];

    let i = 0;
    let j = 0;

    function type() {
        if (i >= messages.length) return;

        if (j < messages[i].length) {
            text.textContent += messages[i][j];
            j++;
            setTimeout(type, 25);
        } else {
            text.textContent += "\n";
            i++;
            j = 0;
            setTimeout(type, 500);
        }
    }

    type();
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

function fakeCheckout() {
    window.location.href = "order.html";
}