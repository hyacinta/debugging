// data
const passenger = {
  adult: 1,
  child: 0,
  baby: 0
};

// DOMS
const $langsCountry = document.querySelector('.langs-country');
const $langsCountrySelectBox = document.querySelector(
  '.langs-country__select-box'
);
const $nav = document.querySelector('.nav__depth1');
const $bookingSelect = document.querySelector('.main__tab-btn');
const $bonus = document.querySelector('.bonus');
const $occupant = document.querySelector('.occupant');
const $journey = document.querySelector('.journey');
const $seat = document.querySelector('.seat');
const $passenger = document.querySelector('.passenger');
const $passengerCount = document.querySelector('.passenger__count');

// dimmed popup open/closed
const dimmed = (target, btnCategory) => {
  if (
    !(
      target.classList.contains(btnCategory) ||
      target.classList.contains('btn--closed')
    )
  ) {
    return;
  }
  const $dimmedBox = target.classList.contains(btnCategory)
    ? target.nextElementSibling
    : target.parentElement.parentElement;

  $dimmedBox.style.display = target.classList.contains(btnCategory)
    ? 'block'
    : 'none';
};

// description box open/closed
const description = (target, zone) => {
  if (target.classList.contains('icon--checkbox')) return;
  if (target.parentElement.classList.contains(zone)) {
    const $desctiptionBox = target.parentElement.nextElementSibling;
    const $input = target.parentElement.firstElementChild;
    $desctiptionBox.style.display = $input.checked ? 'block' : 'none';
  }
};

// passenger 계산된 값 input 반영
const passengerInput = passenger => {
  const passengerAgeList = [
    $passengerCount.querySelectorAll('li')[0],
    $passengerCount.querySelectorAll('li')[1],
    $passengerCount.querySelectorAll('li')[2]
  ];

  passengerAgeList.forEach(li => {
    const $input = li.querySelector('input');
    const $btnIncrease = li.querySelector('.increase');
    const $btnDecrease = li.querySelector('.decrease');
    const inputId = $input.id;
    $input.value = passenger[`${inputId}`];
    $btnIncrease.disabled = passenger[`${inputId}`] === 9 ? 'disabled' : '';
    $btnDecrease.disabled = passenger[`${inputId}`] ? '' : 'disabled';
  });
};

const increase = number => ++number;
const decrease = number => --number;

window.onload = () => {
  passengerInput(passenger);
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

  dimmed(target, 'btn--question');
};

// 구간 선택
$journey.onclick = ({ target }) => {
  description(target, 'peripheral-date__check');
  dimmed(target, 'btn--question');
};

// 좌석 선택
$seat.onclick = ({ target }) => {
  description(target, 'mileage-upgrade__check');
};

$passenger.onclick = ({ target }) => {
  dimmed(target, 'btn--question');
  dimmed(target, 'btn__calculator');
  if (
    !(
      target.classList.contains('btn--question') ||
      target.classList.contains('btn__calculator')
    )
  ) {
    return;
  }
};

$passengerCount.onclick = ({ target }) => {
  const key = target.parentElement.firstElementChild.id;

  const number = target.classList.contains('increase')
    ? increase(passenger[`${key}`])
    : decrease(passenger[`${key}`]);

  passenger[`${key}`] = number;

  passengerInput(passenger);

  if (!(key === 'child' || key === 'baby')) return;

  const $passengerDesBox = $passenger.querySelector('.passenger__precaution');
  $passengerDesBox.style.display = passenger[`${key}`] ? 'block' : 'none';
};
