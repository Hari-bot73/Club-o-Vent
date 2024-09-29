// Get all sections
const sections = document.querySelectorAll('section');

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the section id from the link href
    const sectionId = link.getAttribute('href').substring(1);

    // Show the corresponding section
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block';

      }
    });
  });
});
/*
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
});

function myFunction() {
  alert("Button clicked!");
}

function function1() {
  console.log("About clicked!");
}

function function2() {
  console.log("Gallery clicked!");
}

function function3() {
  console.log("Register clicked!");
}*/
