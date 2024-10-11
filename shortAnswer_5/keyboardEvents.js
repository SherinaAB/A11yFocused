document.addEventListener("DOMContentLoaded", () => {
    const myDiv = document.getElementById("myDiv");

    // const event = document.createEvent("keydown", {key: "Enter"});
    // myDiv.dispatchEvent(event);

    myDiv.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            alert("You pressed Enter!")
            myDiv.style.backgroundColor = "rgb(88,220,204)";
            myDiv.click();
            event.preventDefault();
        }
    });
});