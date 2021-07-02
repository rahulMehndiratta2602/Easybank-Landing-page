const header = document.querySelector(".header");
const burger = document.querySelector(".header-menu")
const overlay = document.querySelector(".overlay")
const burgerMenu= document.querySelector(".burger-menu")
const body = document.querySelector("body");
burger.addEventListener('click', function ()
{
    if (header.classList.contains('open'))
    {//Close Hamburger Menu
        header.classList.remove('open');
        overlay.classList.remove('fadein');
        overlay.classList.add('fadeout');
        burgerMenu.classList.remove('fadein8');
        burgerMenu.classList.add('fadeout8');
        body.classList.remove("no-scroll");
    }
    else
    {//Open Hamburger Menu
        overlay.classList.remove('fadeout');
        overlay.classList.add('fadein');
        header.classList.add('open');
        burgerMenu.classList.remove('fadeout8');
        burgerMenu.classList.add('fadein8');
        body.classList.add("no-scroll");
    }
})