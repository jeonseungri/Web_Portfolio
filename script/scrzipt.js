const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_cards .card');

const filterCards = (e) => {
  console.log('Filter button clicked:', e.target.dataset.name);
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');

  // iterate over each filterable card
  filterableCards.forEach((card) => {
    console.log('Card:', card.dataset.name);
    // check if the card matches the selected filter or "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === 'all'
    ) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
};

// add click event listener to each filter button
filterButtons.forEach((button) =>
  button.addEventListener('click', filterCards)
);
