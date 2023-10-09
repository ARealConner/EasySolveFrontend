import {formatText} from "./text-formatter.js";
// import { formatText } from "../../dist/js/text-formatter";

let inputBox: HTMLElement | null;
let outputBox: HTMLElement | null;

document.addEventListener("DOMContentLoaded", function () {
    inputBox = document.getElementById("input-box");
    outputBox = document.getElementById("output-box");

    if (inputBox) {
        inputBox.addEventListener("input", function () {
            if (inputBox && outputBox) {
                const inputText = inputBox.innerText.replaceAll("_", "Underscore");

                // Call the backend API
                processInput(inputText)
                    .then(() => console.log("Input processed successfully"))
                    .catch((error) => console.error("Processing input failed: " + error));
            }
        });
    } else {
        console.error("Element with id 'inputBox' not found");
    }
});

async function processInput(inputText: String) {
    const sleep = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
    for (let i = 0; i < 3; i++) {
        let ok = false;
        // Call the backend API
        sendProcessRequest(inputText)
            .then((data) => {
                // Accessing individual elements:
                const processedInput = data["processedInput"];
                const processedOutput = data["processedOutput"];

                console.log("Processed Data:", data);
                console.log("inputText:", inputText);
                console.log("Processed Input:", processedInput);
                console.log("Processed Output:", processedOutput);

                if (inputBox && outputBox) {
                    inputBox.innerHTML = formatText(processedInput);
                    outputBox.innerHTML = formatText(processedOutput);
                }
                ok = true;
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        // wait for 1 second before trying again
        await sleep(1000);
        if (ok) {
            break;
        }
        console.log("Retrying..." + i);
    }
}

async function sendProcessRequest(inputText: String) {
    const response = await fetch("https://solverservice-dfab67be627f.herokuapp.com/api/processInput", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputText }),
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Failed to process input");
    }
}
