document.getElementById('inputBox').addEventListener('input', function() {
  let inputData = this.value;

  // Send the current input data to the backend server for processing
  fetch('http://localhost:8080/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: inputData })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the server responds with a processedInput and an output field
      // Update the input and output boxes with the data received from the server
      document.getElementById('inputBox').value = data.processedInput;
      document.getElementById('outputBox').value = data.output;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error.message);
    });
});
