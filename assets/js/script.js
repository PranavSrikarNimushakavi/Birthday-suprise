
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.add('active');
}

// Initialize the first page as active
pages[currentPage].classList.add('active');
