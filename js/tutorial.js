document.addEventListener("DOMContentLoaded", function () {
  // Get all iframes
  var iframes = document.querySelectorAll("iframe[data-example]");

  var delay = 0; // Initialize delay counter

  iframes.forEach(function (iframe) {
    iframe.addEventListener("load", function () {
      // Increment delay for each iframe
      delay += 1000;

      setTimeout(function () {
        // Get the example text from the data attribute and replace escaped newlines
        var exampleText = iframe
          .getAttribute("data-example")
          .replace(/\\n/g, "\n");

        // Get the textarea inside the iframe
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        var inputBox = innerDoc.getElementById("inputBox");

        // Set the example text
        if (inputBox) {
          inputBox.value = exampleText;

          // Manually dispatch 'input' event
          var event = new Event("input", {
            bubbles: true,
            cancelable: true,
          });
          inputBox.dispatchEvent(event);
        }
      }, delay); // Execute with incremented delay
    });
  });
});
