

const anchors1 = document.querySelectorAll('a[href*="#contact"]')

for (let anchor of anchors1) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const contact = anchor.getAttribute('href').substr(1)
    
    document.getElementById(contact).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const anchors2 = document.querySelectorAll('a[href*="#skills"]')

for (let anchor of anchors2) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const skills = anchor.getAttribute('href').substr(1)
    
    document.getElementById(skills).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const anchors3 = document.querySelectorAll('a[href*="#about"]')

for (let anchor of anchors3) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const about = anchor.getAttribute('href').substr(1)
    
    document.getElementById(about).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const anchors4 = document.querySelectorAll('a[href*="#home"]')

for (let anchor of anchors4) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const home = anchor.getAttribute('href').substr(1)
    
    document.getElementById(home).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const anchors5 = document.querySelectorAll('a[href*="#portfolio"]')

for (let anchor of anchors5) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const portfolio = anchor.getAttribute('href').substr(1)
    
    document.getElementById(portfolio).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
