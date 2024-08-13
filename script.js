
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".category-btn");
    const recipes = document.querySelectorAll(".recipes");
    const welcomeSection = document.getElementById("welcome");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = button.getAttribute("data-category");

            // Hide welcome section
            welcomeSection.style.display = "none";

            // Show selected recipes and hide others
            recipes.forEach(section => {
                if (section.id === category) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });

    // Show welcome section initially
    welcomeSection.style.display = "block";
});
