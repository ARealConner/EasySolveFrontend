let inputBox;
let outputBox;

document.addEventListener("DOMContentLoaded", function() {
  inputBox = document.getElementById("inputBox");
  outputBox = document.getElementById("outputBox");

  inputBox.addEventListener("input", function() {
    const inputText = inputBox.value;

    // Call the backend API
    processInput(inputText);
  });
});

async function processInput(inputText) {
  for (let i = 0; i < 3; i++) {
    let ok = false;
    // Call the backend API
    sendProcessRequest(inputText)
      .then(data => {
        // Accessing individual elements:
        const processedInput = data['processedInput'];
        const processedOutput = data['processedOutput'];

        console.log("Processed Data:", data);
        console.log("inputText:", inputText);
        console.log("Processed Input:", processedInput);
        console.log("Processed Output:", processedOutput);

        inputBox.value = processedInput;
        outputBox.value = processedOutput;
        ok = true;
      })
      .catch(error => {
        console.error("Error:", error);
      });
    if (ok) {
      break;
    }
    console.log("Retrying..." + i);
    // wait for 1 second before trying again
    await new Promise(resolve => setTimeout(resolve, 10));
  }
}

async function sendProcessRequest(inputText) {
  const response = await fetch('https://solverservice-dfab67be627f.herokuapp.com/processInput', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: inputText }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to process input');
  }
}

// To use this function:
// const inputText = "\n";
// sendProcessRequest(inputText)
//   .then(data => {
//     // Update your frontend UI here
//     console.log("Processed Data:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });
