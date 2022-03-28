const menu1 = document.querySelector('.menu1'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    formed = document.querySelector('.formed')

menu1.addEventListener('click', () => {
    formed.style.transform = 'translateX(0)'
    formed.style.transition = '.5s'
    body.style.overflow = 'hidden'
})
menu.addEventListener('click', () => {
    formed.style.transform = 'translateX(-100%)'
    body.style.overflow = 'auto'
})





const color = document.querySelector('.color'),
    root = document.querySelector(':root'),
    header = document.querySelector('.header'),
    logo = document.querySelector('.logo_text'),
    navLink = document.querySelectorAll('.nav__link'),
    call = document.querySelector('.call'),
    title = document.querySelector('.title'),
    titleText = document.querySelector('.title_text'),
    product = document.querySelector('.product'),
    productTitle = document.querySelector('.product_title'),
    productLink = document.querySelectorAll('.product_link'),
    txt = document.querySelectorAll('.txt'),
    adres = document.querySelector('.adres'),
    telling = document.querySelectorAll('.telling'),
    veterLink = document.querySelectorAll('.veter_link'),
    veterIcons = document.querySelectorAll('.veter_icons'),
    phoning = document.querySelectorAll('.phoning'),
    spesItem = document.querySelectorAll('.spes_item'),
    link = document.querySelectorAll('.link'),
    mark = document.querySelectorAll('.mark')


color.addEventListener('click', function () {
    colorChange(this)

})

// spesItem.addEventListener('mouseover', ()=>{
//     if (color.innerHTML = 'yellow') {
//       mark.style.background = 'green'
//     }
//     })

function colorChange(color) {
    if (color.innerHTML == 'green') {
        color.innerHTML = 'yellow'
        header.style.background = 'green'
        color.style.background = 'green'
        logo.style.color = 'white'
        call.style.color = 'white'
        title.style.color = 'white'
        titleText.style.color = 'white'
        product.style.background = 'green'
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.color = 'white'
        }
        for (let i = 0; i < phoning.length; i++) {
            phoning[i].style.background = 'green'
        }
        for (let i = 0; i < productLink.length; i++) {
            productLink[i].style.background = 'green'
        }
        productTitle.style.color = 'white'
        adres.style.background = 'green'
        for (let i = 0; i < veterLink.length; i++) {
            veterLink[i].style.color = 'green'
        }
        for (let i = 0; i < telling.length; i++) {
            telling[i].style.background = 'green'
        }
        for (let i = 0; i < veterIcons.length; i++) {
            veterIcons[i].style.background = 'green'
        }

    } else if (color.innerHTML == 'yellow') {
        for (let i = 0; i < productLink.length; i++) {
            productLink[i].style.background = '#F4CB38'
        }
        for (let i = 0; i < veterLink.length; i++) {
            veterLink[i].style.color = '#F4CB38'
        }
        for (let i = 0; i < veterIcons.length; i++) {
            veterIcons[i].style.background = '#F4CB38'
        }
        for (let i = 0; i < telling.length; i++) {
            telling[i].style.background = '#F4CB38'
        }
        for (let i = 0; i < phoning.length; i++) {
            phoning[i].style.background = '#F4CB38'
        }
        adres.style.background = '#F5B939'
        color.innerHTML = 'green'
        header.style.background = 'linear-gradient(124.13deg, #F4CB38 10.97%, #F4A938 77.98%)'
        color.style.background = 'linear-gradient(124.13deg, #F4CB38 10.97%, #F4A938 77.98%)'
        logo.style.color = '#2D2D2D'
        call.style.color = 'white'
        title.style.color = '#2D2D2D'
        titleText.style.color = '#2D2D2D'
        product.style.background = '#F5F8FF'
        productTitle.style.color = '#2D2D2D'
    }
}



const dogInfo = document.querySelector('.dog_info'),
    item = document.querySelectorAll('.item'),
    firstJs = document.querySelector('.first_js'),
    secJs = document.querySelector('.sec_js'),
    thirdJs = document.querySelector('.third_js'),
    fourJs = document.querySelector('.four_js')

firstJs.style.transform = 'translateX(-1000px) translateY(-1000px)'
secJs.style.transform = 'translateX(-1000px) translateY(1000px)'
thirdJs.style.transform = 'translateX(1000px) translateY(-1000px)'
fourJs.style.transform = 'translateX(1000px) translateY(1000px)'

window.addEventListener('scroll', function scroll() {
    if (scrollY > dogInfo.offsetTop - dogInfo.clientHeight) {
        firstJs.style.transform = 'translateX(0px) translateY(0px)'
        secJs.style.transform = 'translateX(0px) translateY(0px)'
        thirdJs.style.transform = 'translateX(0px) translateY(0px)'
        fourJs.style.transform = 'translateX(0px) translateY(0px)'
        firstJs.style.transition = '1s'
        secJs.style.transition = '1s'
        thirdJs.style.transition = '1s'
        fourJs.style.transition = '1s'
        window.removeEventListener('scroll', scroll())
    }
})

// product start

const productInfo = document.querySelector('.product_info'),
    prfirstJs = document.querySelector('.prfirst_js'),
    prsecJs = document.querySelector('.prsec_js'),
    prthirdJs = document.querySelector('.prthird_js'),
    prfourJs = document.querySelector('.prfour_js')

prfirstJs.style.transform = 'translateX(-1000px) translateY(-1000px)'
prsecJs.style.transform = 'translateX(-1000px) translateY(1000px)'
prthirdJs.style.transform = 'translateX(1000px) translateY(-1000px)'
prfourJs.style.transform = 'translateX(1000px) translateY(1000px)'

window.addEventListener('scroll', function scroll() {
    if (scrollY > productInfo.offsetTop - productInfo.clientHeight) {
        prfirstJs.style.transform = 'translateX(0px) translateY(0px)'
        prsecJs.style.transform = 'translateX(0px) translateY(0px)'
        prthirdJs.style.transform = 'translateX(0px) translateY(0px)'
        prfourJs.style.transform = 'translateX(0px) translateY(0px)'
        prfirstJs.style.transition = '1s'
        prsecJs.style.transition = '1s'
        prthirdJs.style.transition = '1s'
        prfourJs.style.transition = '1s'
        window.removeEventListener('scroll', scroll())
    }
})

// spes start
const spesInfo = document.querySelector('.spes_info'),
    spfirstJs = document.querySelector('.spfirst_js'),
    spsecJs = document.querySelector('.spsec_js'),
    spthirdJs = document.querySelector('.spthird_js'),
    spfourJs = document.querySelector('.spfour_js')

spfirstJs.style.transform = 'translateX(-1800px)'
spsecJs.style.transform = 'translateX(-1100px)'
spthirdJs.style.transform = 'translateX(1800px)'
spfourJs.style.transform = 'translateX(1100px)'

window.addEventListener('scroll', function scroll() {
    if (scrollY > spesInfo.offsetTop - spesInfo.clientHeight) {
        spfirstJs.style.transform = 'translateX(0px)'
        spsecJs.style.transform = 'translateX(0px)'
        spthirdJs.style.transform = 'translateX(0px)'
        spfourJs.style.transform = 'translateX(0px)'
        spfirstJs.style.transition = '1.2s'
        spsecJs.style.transition = '1.2s'
        spthirdJs.style.transition = '1.2s'
        spfourJs.style.transition = '1.2s'
        window.removeEventListener('scroll', scroll())
    }
})

// veter start
const veterInfo = document.querySelector('.veter_info'),
    vtfirstJs = document.querySelector('.vtfirst_js'),
    vtsecJs = document.querySelector('.vtsec_js'),
    vtthirdJs = document.querySelector('.vtthird_js'),
    vtfourJs = document.querySelector('.vtfour_js')

vtfirstJs.style.transform = 'translateX(-2000px)'
vtsecJs.style.transform = 'translateX(-1550px)'
vtthirdJs.style.transform = 'translateX(2000px)'
vtfourJs.style.transform = 'translateX(1550px)'

window.addEventListener('scroll', function scroll() {
    if (scrollY > veterInfo.offsetTop - veterInfo.clientHeight * 2) {
        vtfirstJs.style.transform = 'translateX(0px)'
        vtsecJs.style.transform = 'translateX(0px)'
        vtthirdJs.style.transform = 'translateX(0px)'
        vtfourJs.style.transform = 'translateX(0px)'
        vtfirstJs.style.transition = '1s'
        vtsecJs.style.transition = '1s'
        vtthirdJs.style.transition = '1s'
        vtfourJs.style.transition = '1s'
        window.removeEventListener('scroll', scroll())
    }
})


const shop = document.querySelector('.shop'),
    register = document.querySelector('.register'),
    registerWindow = document.querySelector('.register_window'),
    registerButton = document.querySelector('.register_button')

shop.addEventListener('click', () => {
    body.style.overflow = 'hidden'
    register.style = 'display:flex'
    setTimeout(() => {
        register.style.opacity = '1'
        registerWindow.style.top = '0'
    }, 500);
    registerButton.addEventListener('click', () => {
        location.reload()
    })
})

const firstRegister = document.querySelector('.first_register'),
    registeredAlready = document.querySelector('.registered_already'),
    registeredAkk = document.querySelector('.registered_akk')

registeredAkk.addEventListener('click', () => {
    firstRegister.style = 'display:none'
    registeredAlready.style = 'display:flex'
})