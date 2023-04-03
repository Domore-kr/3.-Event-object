const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', () => {
  dropdownList.className = dropdownList.classList.contains(
    'dropdown__list_active'
  )
    ? 'dropdown__list'
    : 'dropdown__list dropdown__list_active';
});

dropdownItem.forEach((link) => {
  link.onclick = () => {
    dropdownValue.textContent = link.textContent;
    dropdownList.className = 'dropdown__list';
    return false;
  };
});

dropdownItem.addEventListener('click', () => {
  dropdownValue.textContent = dropdownItem.textContent;
});
