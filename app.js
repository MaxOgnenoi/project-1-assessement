document.addEventListener('DOMContentLoaded', function() {
    // Set initial values
    let count = 0;
  
    // Get DOM elements
    const valueDisplay = document.getElementById('valueDisplay');
    const input = document.getElementById('inputValue');
    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
  
    // Update count display
    valueDisplay.textContent = count;
  
    // Event listener for increment button click
    plusButton.addEventListener('click', function() {
      count += parseInt(input.value);
      valueDisplay.textContent = count;
      if (count < 0) {
        valueDisplay.classList.add('red');
      } else {
        valueDisplay.classList.remove('red');
      }
    });
  
    // Event listener for decrement button click
    minusButton.addEventListener('click', function() {
      count -= parseInt(input.value);
      valueDisplay.textContent = count;
      if (count < 0) {
        valueDisplay.classList.add('red');
      } else {
        valueDisplay.classList.remove('red');
      }
    });
});
