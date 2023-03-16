const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

if(menuBtn){
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active');
  document.querySelector('.menu__btn').classList.toggle('menu__btn--active');
  document.body.classList.toggle('noscroll');
})
  document.querySelector('.menu__list').addEventListener('click', (e) => {
  if(!e.target.classList.contains('menu__list-link')){
    menuList.classList.remove('menu__list--active');
    document.querySelector('.menu__btn').classList.remove('menu__btn--active');
    document.body.classList.remove('noscroll');
  }
 }
)}

const tabsBtn = document.querySelectorAll('.tabs__btn-item');
const tabsCards = document.querySelectorAll('.tabs__content-item');

tabsBtn.forEach(el => {
  el.addEventListener('click', showSelectCars);
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