// This file contains the JavaScript code for the cycle store website. 
// It handles interactivity, such as form submissions, event listeners, and dynamic content updates.
document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', function() {
          document.getElementById('img-modal-img').src = this.src;
          document.getElementById('img-modal').style.display = 'flex';
        });
      });
      document.getElementById('img-modal-close').onclick = function() {
        document.getElementById('img-modal').style.display = 'none';
      };
      // Close modal on background click
      document.getElementById('img-modal').onclick = function(e) {
        if(e.target === this) this.style.display = 'none';
      };
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listener for a form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission logic here
            alert('Form submitted!');
        });
    }

    // Example: Add event listener for a button click
    const button = document.getElementById('load-products');
    if (button) {
        button.addEventListener('click', function() {
            // Logic to load products dynamically
            console.log('Loading products...');
        });
    }

    // Additional JavaScript code can be added here for more interactivity
});