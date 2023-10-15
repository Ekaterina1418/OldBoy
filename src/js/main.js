const form = document.getElementById('myForm')
const element = document.getElementById('button')
const menu = document.getElementById('menu')
const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const checkbox = document.getElementById('check')
const errorPhone = document.getElementById('error-phone')
const errorEmail = document.getElementById('error-email')
const errorCheck = document.getElementById('error-check')
const popup = document.querySelector('.popup')

if (element) {
  element.addEventListener('click', () => {
    element.classList.toggle('menu__button--close')
    menu.classList.toggle('active')
  })
}

// Валидация формы
function validateEmailOnInput() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const emailValue = email.value.trim()
  if (!emailPattern.test(emailValue) || email.value === '') {
    errorEmail.style.display = 'block'
    errorEmail.textContent = 'Пожалуйста, введите корректный email.'
  } else {
    errorEmail.textContent = ''
    errorEmail.style.display = 'none'
  }
}

function validateTelephoneOnInput() {
  const phoneNumberPattern = /^\d+$/

  const phoneValue = telephone.value.trim()
  if (!phoneNumberPattern.test(phoneValue) || telephone.value === '') {
    errorPhone.style.display = 'block'
    errorPhone.textContent = 'Номер телефона может содержать только цифры'
  } else {
    errorPhone.textContent = ''
    errorPhone.style.display = 'none'
  }
}

email.addEventListener('input', validateEmailOnInput)
telephone.addEventListener('input', validateTelephoneOnInput)

form.addEventListener('submit', function (event) {
  event.preventDefault()

  validateTelephoneOnInput()
  validateEmailOnInput()
  if (!checkbox.checked) {
    errorCheck.style.display = 'block'
    errorCheck.textContent =
      'Необходимо согласие с политикой конфиденциальности.'
  } else {
    popup.style.display = 'flex'
    form.reset()
  }
})

function closePopup() {
  popup.style.display = 'none'
}
popup.addEventListener('click', function (event) {
  if (event.target) {
    closePopup()
  }
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closePopup()
  }
})
