// 1. Toggle expansion drop-down
function toggleCard(event, cardElement) {
  // If the card is hidden via filtering, ignore clicks
  if (cardElement.classList.contains('is-hidden')) return;
  
  cardElement.classList.toggle('is-expanded');
}

// 2. Filter system behavior
function filterProjects(selectedTag, buttonElement) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Switch the 'active' highlight state on the buttons
  buttons.forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  cards.forEach(card => {
    // Read the comma-separated strings inside data-tags attribute
    const tagsAttr = card.getAttribute('data-tags') || '';
    const tagsArray = tagsAttr.split(',');

    // Collapse any open cards when changing filters so layouts scale uniformly
    card.classList.remove('is-expanded');

    if (selectedTag === 'all' || tagsArray.includes(selectedTag)) {
      // Show matching cards
      card.classList.remove('is-hidden');
    } else {
      // Hide non-matching cards (triggers the CSS float-up behavior)
      card.classList.add('is-hidden');
    }
  });
}
