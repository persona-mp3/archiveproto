const cardContainer = document.querySelector('.card-container');
const itemWidth = document.querySelector('figure');

function scrollLeft() {
    cardContainer.scrollBy({
        left: -itemWidth,
        behaviour: 'smooth'
    });
};

function scrollRight() {
    cardContainer.scrollBy({
        right: -itemWidth,
        behaviour: 'smooth'
    });
}

