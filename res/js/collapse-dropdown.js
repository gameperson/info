// Collapsible Sections and Dropdown Buttons
document.addEventListener('DOMContentLoaded', function() {
    // Collapsible Sections
    var collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    for (var i = 0; i < collapsibleHeaders.length; i++) {
        collapsibleHeaders[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Dropdown Toggles
    var dropdownToggles = document.getElementsByClassName("dropdown-toggle");
    for (var i = 0; i < dropdownToggles.length; i++) {
        dropdownToggles[i].addEventListener("click", function(event) {
            event.stopPropagation();
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    // Close dropdowns if clicked outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].style.display === "block") {
                    dropdowns[i].style.display = "none";
                }
            }
        }
    });
});