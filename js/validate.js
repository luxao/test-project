function isValid() {
  let userName = document.getElementById('name').value
  let surName = document.getElementById('surname').value
  let userEmail = document.getElementById('email').value
  let re = /^([A-Za-z0-9_\-\.]){3,}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  let messages = []
  if (userName === '' || userName == null) {
    messages.push('Prosím vyplňte položku s menom !')
    document.getElementById('error').innerText = messages.join(',')
    return false
  }
  if (userName !== '') {
    document.getElementById('error').innerText = null
    document.getElementById('name').style.backgroundColor = 'lightgreen'
    document.getElementById('name').style.border = '3px solid green'
    document.getElementById('name').style.opacity = '0.9'
  }
  if (surName === '' || surName == null) {
    messages.push('Prosím vyplňte položku s priezviskom !')
    document.getElementById('error2').innerText = messages.join(',')
    return false
  }
  if (surName !== '') {
    document.getElementById('error2').innerText = null
    document.getElementById('surname').style.backgroundColor = 'lightgreen'
    document.getElementById('surname').style.border = '3px solid green'
    document.getElementById('surname').style.opacity = '0.9'
  }
  if (!re.test(userEmail)) {
    messages.push('Zadajte validný email !')
    document.getElementById('error3').innerText = messages.join(',')
    return false
  }
  if (re.test(userEmail) === true) {
    document.getElementById('error3').innerText = null
    document.getElementById('email').style.border = '3px solid green'
    document.getElementById('email').style.opacity = '0.9'
  }
}
