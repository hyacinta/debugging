// DOMS
const $langsCountry = document.querySelector('.langs-country');
const $langsCountrySelectBox = document.querySelector(
  '.langs-country__select-box'
);
// EVENT
$langsCountry.onclick = ({ target }) => {
  if (
    !(
      target.matches('.btn--closed') ||
      target.matches('.langs-country__btn-open')
    )
  )
    return;
  $langsCountrySelectBox.style.display = target.matches(
    '.langs-country > .langs-country__btn-open'
  )
    ? 'block'
    : 'none';
};
