// setting solid background for navbar

$(document).ready(() => {
  $(window).scroll((event) => {
    if (window.pageXOffset > 600) {
      if (window.pageYOffset == 0) {
        $('.main_nav').css({ 'background-color': 'transparent' })
      }
      if (window.pageYOffset > 0) {
        $('.main_nav').css({ 'background-color': 'rgb(72, 77, 82)' })
      }
    }
  })
})

// back to top functions

let backToTop = $('<a>', {
  href: '#home',
  id: 'backToTop',
  class: 'back-to-top',
  html: '<i class="fa fa-caret-up fa-5x"></i>',
})

backToTop
  .hide()
  .appendTo('body')
  .on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
    window.location.hash = ''
  })

let win = $(window)
win.on('scroll', function () {
  if (win.scrollTop() >= 500) {
    backToTop.fadeIn()
  } else {
    backToTop.hide()
  }
})

// functionality for add or remove active class in navigation

const navItems = document.querySelectorAll('.main_nav_items li a')

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')

    if (current.length > 0) {
      current[0].className = current[0].className.replace('active', '')
    }
    this.className += ' active'
  })
}

// button on click scroll to next section
$(document).ready(function () {
  $('#learn').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#module1').offset().top,
      },
      1000
    )
  })
})

/* mobile settings */

const menu = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const navigation = document.getElementById('nav')
const mainNav = document.getElementById('home')

menu.addEventListener('click', () => {
  navigation.style.display = 'block'
  closeBtn.style.display = 'block'
  menu.style.display = 'none'

  mainNav.style.height = '12rem'
})

closeBtn.addEventListener('click', () => {
  navigation.style.display = 'none'
  closeBtn.style.display = 'none'
  menu.style.display = 'block'

  mainNav.style.height = '5rem'
})
