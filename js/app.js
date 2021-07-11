// DOMS
const $langsCountry = document.querySelector('.langs-country');
const $langsCountrySelectBox = document.querySelector(
  '.langs-country__select-box'
);
const $nav = document.querySelector('.nav__depth1');
const $bookingSelect = document.querySelector('.main__tab-btn');
const $bonus = document.querySelector('.bonus');
const $occupant = document.querySelector('.occupant');

// dimmed popup open/closed
const dimmed = target => {
  if (
    !(
      target.classList.contains('btn--question') ||
      target.classList.contains('btn--closed')
    )
  ) {
    return;
  }
  const $dimmedBox = target.classList.contains('btn--question')
    ? target.nextElementSibling
    : target.parentElement.parentElement;

  $dimmedBox.style.display = target.classList.contains('btn--question')
    ? 'block'
    : 'none';
};

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

// 일반/보너스 예매 선택
$bookingSelect.onclick = ({ target }) => {
  if (target.classList.contains('active') || target === $bookingSelect) return;

  const $sibling =
    target === $bookingSelect.firstElementChild
      ? target.nextElementSibling
      : target.previousElementSibling;

  target.classList.add('active');
  $sibling.classList.remove('active');

  $bonus.style.display =
    target === $bookingSelect.lastElementChild ? 'block' : 'none';
};

// 보너스 선택
$bonus.onclick = ({ target }) => {
  if (target.classList.contains('icon--radio')) return;
  const $input = target.parentElement.firstElementChild;
  $occupant.style.display = $input.checked ? 'block' : 'none';

  dimmed(target);
};
