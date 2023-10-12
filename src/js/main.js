const element = document.getElementById('button')
const menu = document.getElementById('menu')

if (element) {
  element.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
}

// Валидация формы
const form = document.getElementById('myForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const telephone = document.getElementById('telephone').value
  const email = document.getElementById('email').value
  const checkbox = document.getElementById('check')

  const phoneNumberPattern = /^\d+$/

  if (telephone.trim() === '' || email.trim() === '' || !checkbox.checked) {
    alert(
      'Пожалуйста, заполните все поля и согласитесь с политикой конфиденциальности.'
    )
  } else if (!phoneNumberPattern.test(telephone)) {
    alert('Номер телефона может содержать только цифры')
  } else {
    alert('Форма отправлена!')
    form.reset()
  }
})
