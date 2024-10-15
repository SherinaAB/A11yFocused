document.addEventListener("DOMContentLoaded", () => {
    // Find all headers
    function assignRole() {
        const headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        // Loop thru each header, if it's empty, assign role as "presentation"
        headers.forEach((header) => {
        // Check if header is empty
            if (header.textContent.trim() ===  "") {
                // Assign role as "presentation" to the header
                header.setAttribute("role", "presentation");
            };
        });
    }; 
    assignRole();  // Call function
});