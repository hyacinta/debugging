// // DOMS
// const $langsCountry = document.querySelector('.langs-country');
// const $langsCountrySelectBox = document.querySelector(
//   '.langs-country__select-box'
// );
// const $navDepth1 = document.querySelector('.nav__depth1');
// const $peripheralDate = document.querySelector('.peripheral-date');
// const $mileageUpgrade = document.querySelector('.mileage-upgrade');
// const $bonus = document.querySelector('.bonus');
// const $journey = document.querySelector('.journey');
// const $passenger = document.querySelector('.passenger');
// const $btnCalculator = document.querySelector('.btn__calculator');
// const $passengerAdult = document.querySelector('.passenger__adult');
// const $inputAdult = document.querySelector('#adult');
// const $passengerChild = document.querySelector('.passenger__child');
// const $inputChild = document.querySelector('#child');
// const $passengerBaby = document.querySelector('.passenger__baby');
// const $inputBaby = document.querySelector('#baby');

// // EVENT
// $langsCountry.onclick = ({ target }) => {
//   if (
//     !(
//       target.matches('.btn--closed') ||
//       target.matches('.langs-country__btn-open')
//     )
//   ) {
//     return;
//   }
//   $langsCountrySelectBox.style.display = target.matches(
//     '.langs-country > .langs-country__btn-open'
//   )
//     ? 'block'
//     : 'none';
// };

// // nav open & close
// $navDepth1.onclick = ({ target }) => {
//   if (!(target.matches('.nav__btn') || target.matches('.btn--closed'))) return;
//   target.matches('.nav__btn')
//     ? (target.nextElementSibling.style.display = 'flex')
//     : (target.parentElement.style.display = 'none'); // 리팩토링 대상.. 어떤식으로 하는게 좋을까???
// };

// $peripheralDate.onchange = ({ target }) => {
//   target.parentElement.nextElementSibling.classList.toggle('active');
// };

// $mileageUpgrade.onchange = ({ target }) => {
//   target.parentElement.nextElementSibling.classList.toggle('active');
// };
// $bonus.onclick = ({ target }) => {
//   if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
//     return;
//   }
//   target.matches('.btn--question')
//     ? (target.nextElementSibling.style.display = 'block')
//     : (target.parentElement.parentElement.style.display = 'none');
// };

// $journey.onclick = ({ target }) => {
//   if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
//     return;
//   }
//   target.matches('.btn--question')
//     ? (target.nextElementSibling.style.display = 'block')
//     : (target.parentElement.parentElement.style.display = 'none');
// };

// $passenger.onclick = ({ target }) => {
//   if (!(target.matches('.btn--question') || target.matches('.btn--closed'))) {
//     return;
//   }
//   target.matches('.btn--question')
//     ? (target.nextElementSibling.style.display = 'block')
//     : (target.parentElement.parentElement.style.display = 'none');
//   console.log(target);
// };

// $btnCalculator.onclick = ({ target }) => {
//   target.nextElementSibling.nextElementSibling.style.display = 'block';
// };

// // 인원 체크
// const countAdult = () => {
//   let adult = 0;
//   return {
//     increase() {
//       return ++adult;
//     },
//     decrease() {
//       return --adult;
//     }
//   };
// };
// const countChild = () => {
//   let child = 0;
//   return {
//     increase() {
//       return ++child;
//     },
//     decrease() {
//       return --child;
//     }
//   };
// };
// const countBaby = () => {
//   let baby = 0;
//   return {
//     increase() {
//       return ++baby;
//     },
//     decrease() {
//       return --baby;
//     }
//   };
// };

// $passengerAdult.onclick = ({ target }) => {
//   if (!target.matches('button')) return;
//   $inputAdult.value = target.classList.contains('increase')
//     ? countAdult.increase
//     : countAdult.decrease;
// };
