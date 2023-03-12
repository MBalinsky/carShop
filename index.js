const tabsBtn = document.querySelectorAll('.tabs__btn-item');
const tabsCards = document.querySelectorAll('.tabs__content-item');
console.log(tabsCards)

tabsBtn.forEach(el => {
  el.addEventListener('click', showSelectCars)
})

function showSelectCars(el){
  const targerTabs = el.target;
  const dataAttribute = targerTabs.dataset.tabs;
  tabsBtn.forEach(el => {
    el.classList.remove('tabs__btn-item--active');
  })
  targerTabs.classList.add('tabs__btn-item--active');

  tabsCards.forEach(el => {
    el.classList.remove('tabs__content-item--active');
  })
  document.querySelector(`#${dataAttribute}`).classList.add('tabs__content-item--active');
}