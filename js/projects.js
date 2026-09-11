function toggleCard(event, cardElement) {
  if (cardElement.classList.contains('is-hidden')) return;
  
  cardElement.classList.toggle('is-expanded');
}

function filterProjects(selectedTag, buttonElement) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  cards.forEach(card => {
    const tagsAttr = card.getAttribute('data-tags') || '';
    const tagsArray = tagsAttr.split(',');

    card.classList.remove('is-expanded');

    if (selectedTag === 'all' || tagsArray.includes(selectedTag)) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
}
