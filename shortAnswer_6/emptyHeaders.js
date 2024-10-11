document.addEventListener("DOMContentLoaded", () => {
    console.log("emptyHeaders.js is running");
    const container = document.getElementById("container");
    // Function to create empty headers
    if (container) {
        const headers = [
            { tag:"h1", ariaLabel: "Main section: Role and Presentaions" },
            { tag:"h2", ariaLabel: "Role section: Role and Presentaions" },
            { tag:"h3", ariaLabel: "Presention section: Role and Presentaions" },
            { tag:"h4", ariaLabel: "open section: Role and Presentaions" },
            { tag:"h5", ariaLabel: "open section: Role and Presentaions" }
        ];

        // For each section, add the headers to the container
        headers.forEach((headerInfo) => {
            const header = document.createElement(headerInfo.tag);
            header.setAttribute("aria-label", headerInfo.ariaLabel);
            header.textContent = ' '; // Header intentionally empty
            container.appendChild(header);
        });
    } else {
        console.error("Container element not found.");
    }
});
