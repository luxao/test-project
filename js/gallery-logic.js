let gallery
let modalGallery
let currentId
let positionId
let order = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

document.addEventListener('DOMContentLoaded', () => {
  const galleryWrap = document.getElementById('gallery-wrapper')

  const modalWrap = document.getElementById('fade-gallery')

  fetch('data_gallery/images.json')
    .then((resp) => resp.json())
    .then((json) => {
      let getPhotos = getCookie('order')
      let str = []
      if (getPhotos) {
        str = getPhotos
        order = JSON.parse(str)
      }

      order
        .filter((item) => json.photos[item])
        .forEach((item, index) => {
          gallery = document.createElement('img')
          gallery.setAttribute('src', 'images/' + json.photos[item].src)
          gallery.setAttribute('id', json.photos[item].id)
          gallery.classList = 'thumbnail'
          galleryWrap.appendChild(gallery)

          gallery.addEventListener('click', function () {
            document.getElementById('fade').style.display = 'flex'
            modalGallery = document.createElement('img')
            modalGallery.setAttribute('src', 'images/' + json.photos[item].src)
            currentId = json.photos[item].id
            for (let i = 0; i < order.length; i++) {
              if (order[i] === currentId) {
                positionId = i
              }
            }
            modalGallery.setAttribute('id', json.photos[item].id)
            document.getElementById('title-img').innerText =
              json.photos[item].title
            document.getElementById('description-img').innerText =
              json.photos[item].description
            modalWrap.appendChild(modalGallery)
          })

          document
            .getElementById('x-ko')
            .addEventListener('click', function () {
              document.getElementById('fade').style.display = 'none'
              modalWrap.removeChild(modalGallery)
            })
          window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
              document.getElementById('fade').style.display = 'none'
              modalWrap.removeChild(modalGallery)
            }
          })

          $(galleryWrap).sortable({
            update: function (event, ui) {
              order = $(this).sortable('toArray')
              setCookie('order', JSON.stringify(order), 2)
            },
          })
        })

      document
        .getElementById('right-arrow')
        .addEventListener('click', function () {
          ++positionId
          if (positionId === 11) {
            positionId = 0
          }
          slideClick(positionId)
        })

      document
        .getElementById('left-arrow')
        .addEventListener('click', function () {
          --positionId
          if (positionId === -1) {
            positionId = 10
          }
          slideClick(positionId)
        })

      function slideClick(Ide) {
        modalGallery.setAttribute(
          'src',
          'images/' + json.photos[order[Ide]].src
        )
        modalGallery.setAttribute('id', json.photos[order[Ide]].id)
        document.getElementById('title-img').innerText =
          json.photos[order[Ide]].title
        document.getElementById('description-img').innerText =
          json.photos[order[Ide]].description
        modalWrap.appendChild(modalGallery)
      }
    })
})

function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
