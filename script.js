// script.js

function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('main section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
