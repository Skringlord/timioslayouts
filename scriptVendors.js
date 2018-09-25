const menuItemOne = document.querySelector('.content-menu-one'),
    menuItemTwo = document.querySelector('.content-menu-two'),
    menuItemThree = document.querySelector('.content-menu-three'),
    menuContentOne = document.querySelector('.vendors-content'),
    menuContentTwo = document.querySelector('.vendors-content2'),
    menuContentThree = document.querySelector('.vendors-content3');

menuItemOne.addEventListener('click', function (e) {
    colorMenuItems();
    menuItemOne.style.borderBottom = "solid 5px #226fac";
    menuContentOne.style.display= "block";
});

menuItemTwo.addEventListener('click', function (e) {
    colorMenuItems();
    menuItemTwo.style.borderBottom = "solid 5px #226fac";
    menuItemTwo.style.borderRadius = "0";
    menuContentTwo.style.display= "block";
});

menuItemThree.addEventListener('click', function (e) {
    colorMenuItems();
    menuItemThree.style.borderBottom = "solid 5px #226fac";
    menuContentThree.style.display= "block";
    menuItemThree.style.borderRadius = "0";
});

function colorMenuItems() {
    menuItemOne.style.borderBottom = "none";
    menuItemTwo.style.borderBottom = "none";
    menuItemThree.style.borderBottom = "none";
    menuContentOne.style.display= "none";
    menuContentTwo.style.display= "none";
    menuContentThree.style.display= "none";
}
