// DOMS
const $langsCountry = document.querySelector('.langs-country');
const $langsCountrySelectBox = document.querySelector(
  '.langs-country__select-box'
);
const $navDepth1 = document.querySelector('.nav__depth1');
const $peripheralDate = document.querySelector('.peripheral-date');
const $mileageUpgrade = document.querySelector('.mileage-upgrade');
const $bonus = document.querySelector('.bonus');
const $journey = document.querySelector('.journey');
const $passenger = document.querySelector('.passenger');
const $btnCalculator = document.querySelector('.btn__calculator');
// EVENT
$langsCountry.onclick = ({ target }) => {
  if (
    !(
      target.matches('.btn--closed') ||
      target.matches('.langs-country__btn-open')
    )
  ) {
    return;
  }
  $langsCountrySelectBox.style.display = target.matches(
    '.langs-country > .langs-country__btn-open'
  )
    ? 'block'
    : 'none';
};

// nav open & close
$navDepth1.onclick = ({ target }) => {
  if (!(target.matches('.nav__btn') || target.matches('.btn--closed'))) return;
  target.matches('.nav__btn')
    ? (target.nextElementSibling.style.display = 'flex')
    : (target.parentElement.style.display = 'none'); // 리팩토링 대상.. 어떤식으로 하는게 좋을까???
};

$peripheralDate.onchange = ({ target }) => {
  target.parentElement.nextElementSibling.classList.toggle('active');
};

$mileageUpgrade.onchange = ({ target }) => {
  target.parentElement.nextElementSibling.classList.toggle('active');
};
$bonus.onclick = ({ target }) => {
  if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
    return;
  }
  target.matches('.btn--question')
    ? (target.nextElementSibling.style.display = 'block')
    : (target.parentElement.parentElement.style.display = 'none');
};

$journey.onclick = ({ target }) => {
  if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
    return;
  }
  target.matches('.btn--question')
    ? (target.nextElementSibling.style.display = 'block')
    : (target.parentElement.parentElement.style.display = 'none');
};

$passenger.onclick = ({ target }) => {
  if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
    return;
  }
  target.matches('.btn--question')
    ? (target.nextElementSibling.style.display = 'block')
    : (target.parentElement.parentElement.style.display = 'none');
  console.log(target);
};

$btnCalculator.onclick = ({ target }) => {
  target.nextElementSibling.nextElementSibling.style.display = 'block';
};
