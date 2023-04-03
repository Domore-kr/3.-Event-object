const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((e) => {
  let index = tab.indexOf(e);
  e.addEventListener('click', () => {
    tab.forEach((j) => {
      (j.className = 'tab'),
        tabContent.forEach((f) => {
          f.className = 'tab__content';
        });
    }),
      (e.className = 'tab tab_active');
    tabContent[index].className = 'tab__content tab__content_active';
  });
});
