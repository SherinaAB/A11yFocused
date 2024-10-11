document.addEventListener("DOMContentLoaded", () => {
    // Find all headers
    function assignRole() {
        headers.forEach((assignRole) => {
        // Applying condition, if header length is 0, assign role as "presentation"
            const headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
            // Loop thru each header, if it's empty, assign role as "presentation"
                if (headers.textContent.trim().length === 0) {
                  headers.setAttribute('role', 'presentation');    
                };
        });
    }; 
});