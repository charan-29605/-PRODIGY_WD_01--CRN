document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    // Change style on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#2c3e50'; 
        } else {
            navbar.style.backgroundColor = '#3498db'; 
    });
});
