//unit 94
// animation border menu
const menuItems = document.querySelectorAll('.nav-menu li')

const span = document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);

menuItems.forEach((item) => {
    item.addEventListener('mouseenter', highlight)
})

function highlight() {
    const itemcoordinate = this.getBoundingClientRect()
    const { left, width, bottom } = itemcoordinate
    span.style.width = `${width}px`
    span.style.transform = `translate(${left}px,${bottom}px)`
}
//---------------------------------------------------------------------
//unit 96
//نمایش منوی دوره ها
const Courses = document.getElementById('courses');
const subNav = document.querySelector('.sub-nav')

Courses.addEventListener('mouseover', namaieshflex)
function namaieshflex() {
    subNav.style.display = 'flex'
}
subNav.addEventListener('mouseleave', namaieshnone)
function namaieshnone() {
    this.style.display = 'none'
}
//-----------------------------------------------------------------------
//unit 97
//فعال کردن پنجره پاپاپ
const popup = document.querySelector('.popup')
const singUpButton = document.querySelector('.header-button-link')

singUpButton.addEventListener('click', showModel)

function showModel() {
    popup.classList.add('active')
    //unit99
    overlay.classList.add('active')
    //unit99
    popup.style.opacity = '1'
    popup.style.display = 'block'
}
//uint 98
//غیر فعال کردن پنجره پاپاپ
const closepopup = document.querySelector('.fa-times')

closepopup.addEventListener('click', closeModal)

function closeModal() {
    popup.style.opacity = '0'
    popup.classList.remove('active')

    //unit99
    overlay.classList.remove('active')
    //unit99
}

//unit 99 خاموش کردن صفحه نمایش پس از زدن کلید ثبت 
const overlay = document.querySelector('.overlay')
overlay.addEventListener('click', closeModal)

//unit101
//
const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})
function checkInput() {
    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    debugger
    if (usernamevalue === '') {
        setErrorFor(username, 'نام کاربر حتما باید وارد شود')
    }
    if (passwordvalue === '') {
        setErrorFor(password, 'رمز عبور باید حتما وارد شود')
    }
    if (passwordvalue.length < 6) {
        setErrorFor(password, 'رمز عبور باید حداقل 6 کارکتر باشد')
    }
    else {
        setSuccessFor(password)
        setSuccessFor(username)
    }
}
function setErrorFor(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small')
    formcontrol.className = 'form-control error'
    small.innerText = message;
    return false
}
function setSuccessFor(input) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small')
    formcontrol.className = 'form-control success'
}
//----------------------------unit-101--------------------------

//---------unit-105&unit-106 Create HumburgerMenu---------------
const openHamMenu = document.getElementById('openMenu')
const closeHamMenu = document.getElementById('closeMenu')
const HamburgerMenu = document.getElementById('nav')
const globelHeader = document.querySelector('.global-header')
const container = document.querySelector('.container')

openHamMenu.addEventListener('click', openHamburgerMenu)
closeHamMenu.addEventListener('click', closeHamburgerMenu)

function openHamburgerMenu() {
    HamburgerMenu.classList.add('active');
    const width = window.getComputedStyle(HamburgerMenu).getPropertyValue('width');
    globelHeader.style.transform = `translate(${width},0)`;
    container.style.transform = `translate(${width},0)`;
    document.body.style.overflow = 'hidden';
    closeHamMenu.style.display = 'block';
    openHamMenu.style.display = 'none';
}
function closeHamburgerMenu() {
    HamburgerMenu.classList.remove('active');
    globelHeader.style.transform = `translate(0,0)`;
    container.style.transform = `translate(0,0)`;
    document.body.style.overflow = 'visible';
    openHamMenu.style.display = 'block';
    closeHamMenu.style.display = 'none';
}
//-----------unit-105 & unit-106  Finish -----------------







