const signinbtn = document.getElementById('signinbtn');
const container = document.querySelector('.container');

signinbtn.addEventListener('click', () => {
    container.classList.add('active');
});
const mainDropdown = document.getElementById('main-dropdown');
const subDropdown = document.getElementById('sub-dropdown');

// Add an event listener to the main dropdown
mainDropdown.addEventListener('change', () => {
  // Check if the selected option is the one that should show the sub-dropdown
  if (mainDropdown.value === 'option2') {
    // Show the sub-dropdown
    subDropdown.style.display = 'block';
  } else {
    // Hide the sub-dropdown
    subDropdown.style.display = 'none';
  }
});