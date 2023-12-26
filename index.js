const alertBox = document.querySelector('.success-alert');
const input = document.querySelector('.input');
const emailCheck = document.querySelector('.email-check');
const confirmEmail = document.querySelector('.confirm-email')
const Item = document.getElementById('item1')
function handleDismiss() {
  alertBox.style.visibility = 'hidden';
}

function handleClick() {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    emailCheck.innerText = `This is great`;
    alertBox.style.visibility = 'visible';
    emailCheck.innerText = ``;
    input.style.backgroundColor = ''
    confirmEmail.innerText = input.value;

  } else {
    emailCheck.innerText = `Valid email required*`;
    input.style.backgroundColor = 'rgba(255, 81, 0, 0.459)'
    input.style.color = '#ff5100e0'
  }
  return
}

function setItem(){

  window.addEventListener('resize', () => {
    if(window.innerWidth <= 720 && window.innerWidth > 0){
      Item.innerHTML = `
        <img src='./assets/images/illustration-sign-up-mobile.svg'>
      `
    }
    if(window.innerWidth > 581 && window.innerWidth <= 1600){
      Item.innerHTML = `
        <img src='./assets/images/illustration-sign-up-desktop.svg'>
      `
    }
    return Item
    
  })
}
setItem()





//#ff5100e0
