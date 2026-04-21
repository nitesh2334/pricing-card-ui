const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from all
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add active to clicked
        button.classList.add("active");

        // Optional: console log
        console.log("Selected Plan:", button.parentElement.querySelector("h2").innerText);
    });
});