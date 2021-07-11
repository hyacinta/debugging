// DOMS
const $langsCountry = document.querySelector('.langs-country');
const $langsCountrySelectBox = document.querySelector(
  '.langs-country__select-box'
);
const $nav = document.querySelector('.nav__depth1');

// EVENT

// 지역/언어 선택창 open & closed
$langsCountry.onclick = ({ target }) => {
  if (
    !(
      target.matches('.langs-country__btn-open') ||
      target.matches('.btn--closed')
    )
  ) {
    return;
  }
  $langsCountrySelectBox.style.display = target.matches(
    '.langs-country__btn-open'
  )
    ? 'block'
    : 'none';
};

// nav open & close
$nav.onclick = ({ target }) => {
  if (!(target.matches('.nav__btn') || target.matches('.btn--closed'))) return;
  const $subMenuBox = target.matches('.nav__btn')
    ? target.nextElementSibling
    : target.parentElement;

  $subMenuBox.style.display = target.matches('.nav__btn') ? 'flex' : 'none';
};
