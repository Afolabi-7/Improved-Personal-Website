// Function to toggle section content and rotate icon
function toggleSection(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    
    // Toggle the display of the content
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.style.transform = "rotate(180deg)"; // Rotate icon
    } else {
        content.style.display = "none";
        icon.style.transform = "rotate(0deg)"; // Reset icon rotation
    }
}

// Add event listeners to trigger toggle for each section
document.getElementById("experience-icon").addEventListener("click", function() {
    toggleSection("experience-content", "experience-icon");
});

document.getElementById("expertise-icon").addEventListener("click", function() {
    toggleSection("expertise-content", "expertise-icon");
});

document.getElementById("education-icon").addEventListener("click", function() {
    toggleSection("education-content", "education-icon");
});
