const display = document.getElementById("display");

        function clearDisplay() {
            display.value = "";
        }

        function appendToDisplay(value) {
            display.value += value;
        }

        function calculateResult() {
            try {
                const result = eval(display.value);
                display.value = result;
            } catch (error) {
                display.value = "Error";
            }
        }

        // Keyboard input handling
        document.addEventListener("keydown", (event) => {
            const key = event.key;
            if (/[0-9+\-*/]|Enter|Escape|Backspace/.test(key)) {
                event.preventDefault(); // Prevent default behavior of keys
                if (key === "Enter") {
                    calculateResult(); // Calculate and display the result when Enter is pressed
                    display.value = display.value.replace(/\n/g, ''); // Remove any Enter characters
                } else if (key === "Backspace") {
                    // Handle Backspace by removing the last character from the display
                    display.value = display.value.slice(0, -1);
                    return; // Don't append Backspace to the display
                } else {
                    appendToDisplay(key); // Append other valid keys to the display
                }
            }
        });