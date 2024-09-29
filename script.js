document.querySelectorAll('.social-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add social link click handling here
    });
  });
  
  // Add event listener to footer links
  document.querySelectorAll('.footer a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add footer link click handling here
    });
  });
// Add event listener to social links
document.querySelectorAll('.social-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Add social link click handling here
  });
});

// Add event listener to footer links
document.querySelectorAll('.footer a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Add footer link click handling here
  });
});


const counters = document.querySelectorAll('.count');
const speed = 140;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = Number(counter.getAttribute('data-target'));
      const updateCounter = () => {
        const count = Number(counter.innerText);
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 20); // Adjust speed here
        } else {
          counter.innerText = target+'+';
        }
      };
      updateCounter();
      observer.unobserve(counter); // Stop observing after animation completes
    }
  });
}, {
  threshold: 0.5 // Adjust this if needed (50% of the element must be visible)
});

// Start observing the counters
counters.forEach(counter => {
  observer.observe(counter);
});

  