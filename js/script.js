const fio = document.querySelector('.fio');
const number = document.querySelector('.number');

fio.addEventListener('focus', (e) => {
  fio.parentNode.style.borderColor = '#34A853';
  fio.parentNode.style.borderWidth = '3px';
  fio.parentNode.children[0].style.transform = 'translate(0, -15px)';
});
fio.addEventListener('blur', (e) => {
  if (fio.value.length === 0) {
    fio.parentNode.style.borderColor = '#d5e3f9';
    fio.parentNode.style.borderWidth = '1px';
    fio.parentNode.children[0].style.transform = 'translate(0, 0px)';
  }
});

number.addEventListener('focus', (e) => {
  number.parentNode.style.borderColor = '#34A853';
  number.parentNode.style.borderWidth = '3px';
  number.parentNode.children[0].style.transform = 'translate(0, -15px)';
});
number.addEventListener('blur', (e) => {
  if (number.value.length === 0) {
    number.parentNode.style.borderColor = '#d5e3f9';
    number.parentNode.style.borderWidth = '1px';
    number.parentNode.children[0].style.transform = 'translate(0, 0px)';
  }
});
