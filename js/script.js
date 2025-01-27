document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap Carousel
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            ride: 'carousel',
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Handle Buy Now button clicks
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This feature is not implemented yet. Stay tuned!');
        });
    });

    // Close navbar on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            });
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    
    // If search term is empty, return early
    if (!query) {
      alert('Please enter a search term.');
      return;
    }

    // Find all the elements you want to search (e.g., paragraphs, divs with content)
    const contentItems = document.querySelectorAll('.searchable-content');
    
    // Loop through each item and hide/show based on the search term
    contentItems.forEach(item => {
      if (item.textContent.toLowerCase().includes(query)) {
        item.style.display = ''; // Show the content
      } else {
        item.style.display = 'none'; // Hide the content
      }
    });
  });

});
