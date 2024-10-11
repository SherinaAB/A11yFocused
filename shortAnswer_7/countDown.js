document.addEventListener("DOMContentLoaded", () => {
    function sumThenCountDown(num1, num2) {
        // Check if inputs are numbers, if not, output error message.
        if (isNaN(num1) || isNaN(num2)) {
            console.error("Both inputs must be numbers.");
            return;
        }
        // Print the sum and countdown)
        let sum = num1 + num2;
            // Print the sum
            console.log(sum);  

        if (sum < 0) {
            console.error("The sum of the numbers is negative.")
            return;
        }
        // Countdown from the sum
        for (let i = sum; i >= 0; i--) {
            // Wait 1 second before printing each number
            setTimeout(() => {
                console.log(i);
                if (i === 0) {
                    console.log("Countdown complete!");
                }
            }, (sum - i) * 1000);
        }
    }
    sumThenCountDown(5,5); 
});
