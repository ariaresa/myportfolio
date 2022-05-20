const burger = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-toggle input');
const pilihan = document.querySelectorAll('.pilihan');
const strip1 = document.querySelector('.strip-1');
const strip2 = document.querySelector('.strip-2');
const line = document.querySelectorAll('.line');
const home = document.querySelector('.line-home');
const about = document.querySelector('.line-about');
const listFoto = document.querySelector('.img-about');
const pasFoto = document.querySelector('.img-about img');
const hobbies = document.querySelector('.line-hobbies');
const contact = document.querySelector('.line-contact');
const cntHeader = document.querySelector('.content-header');
const nama = document.querySelector('.name');
const cntMainAbout = document.querySelector('.content-main-about');
const cards = document.querySelectorAll('.card img');



$('.pilihan').on('click', function (e) {

    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    console.log(elemenTujuan.offset().top);

    $('*').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
})

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.content-header').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    })

    if (wScroll > $('.content-main-about').offset().top - 200) {

        $('.main-about, .img-about, .box-hobbies').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    }

    if (wScroll > $('.content-main-hobbies').offset().top - 200) {

        $('.main-hobbies, .img-interest').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    }

    if (wScroll > $('.content-main-dicoding').offset().top - 200) {

        $('.kursus-1, .kursus-2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    }

    if (wScroll > $('.content-main-contact').offset().top - 200) {

        $('.main-contact, .trademark').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    }
})

burger.addEventListener('click', function () {
    if (menu.checked === true) {
        $('.burger-content').css({
            'display': 'block',
            'animation': 'munculMenu 1s'
        })
    } else if (menu.checked === false) {
        $('.burger-content').css({
            'animation': 'tutupMenu 1s forwards'
        })
    }
})


pasFoto.addEventListener('mouseover', function () {
    listFoto.style.transform = 'translate(5px,10px)';
    listFoto.style.transition = '.5s';
    pasFoto.style.transform = 'translate(-30px,-30px)';
    pasFoto.style.transition = '.5s';
    pasFoto.style.opacity = 'unset';
})

pasFoto.addEventListener('mouseleave', function () {
    listFoto.style.transform = 'none';
    pasFoto.style.transform = 'none';
    pasFoto.style.opacity = '.7';
})

cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'translate(0,-10px)';
        card.style.transition = '.5s';
        card.style.opacity = 'unset';
    })

    card.addEventListener('mouseleave', function () {
        card.style.transform = 'none';
        card.style.opacity = '.7';
    })
})