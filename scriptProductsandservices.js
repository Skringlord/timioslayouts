const prodOne = document.querySelector('.prod-obj1'),
    prodTwo = document.querySelector('.prod-obj2'),
    prodThree = document.querySelector('.prod-obj3'),
    prodFour = document.querySelector('.prod-obj4'),
    prodFive = document.querySelector('.prod-obj5'),

    prodMenuOne = document.querySelector('.products-menu1'),
    prodMenuTwo = document.querySelector('.products-menu2'),
    prodMenuThree = document.querySelector('.products-menu3'),
    prodMenuFour = document.querySelector('.products-menu4'),
    prodMenuFive = document.querySelector('.products-menu5'),

    escrowRow    = document.querySelector('.escrow-row'),
    escrowRow2    = document.querySelector('.escrow-row2'),
    escrowRow3    = document.querySelector('.escrow-row3'),
    escrowRow4    = document.querySelector('.escrow-row4'),
    insuranceRow = document.querySelector('.insurance-row'),
    insuranceRow2 = document.querySelector('.insurance-row2'),
    insuranceRow3 = document.querySelector('.insurance-row3'),
    insuranceRow4 = document.querySelector('.insurance-row4'),
    insurBtn     = document.querySelector('.insur-btn-text'),
    insurContent = document.querySelector('.insurance-content'),
    escroContent = document.querySelector('.escrow-services-content'),
    escrowBtn    = document.querySelector('.escrow-btn'),
    insur2Content = document.querySelector('.insurance2-content'),
    insur3Content = document.querySelector('.insurance3-content'),
    insur4Content = document.querySelector('.insurance4-content'),
    escrow2Content = document.querySelector('.ecrow2-content'),
    escrow3Content = document.querySelector('.ecrow3-content'),
    escrow4Content = document.querySelector('.ecrow4-content'),
    escrowBtn2    = document.querySelector('.escrow-btn2'),
    escrowBtn3    = document.querySelector('.escrow-btn3'),
    escrowBtn4    = document.querySelector('.escrow-btn4'),
    insurBtn2     = document.querySelector('.insur-btn-text2'),
    insurBtn3     = document.querySelector('.insur-btn-text3'),
    insurBtn4     = document.querySelector('.insur-btn-text4');



function threePointMenu() {
    prodMenuOne.style.borderBottom = "none";
    prodMenuTwo.style.borderBottom = "none";
    prodMenuThree.style.borderBottom = "none";
    prodMenuFour.style.borderBottom = "none";
    prodMenuFive.style.borderBottom = "none";
    prodOne.style.display = "none";
    prodTwo.style.display = "none";
    prodThree.style.display = "none";
    prodFour.style.display = "none";
    prodFive.style.display = "none";
}

escrowRow.addEventListener('click', function (e) {
    escrowRow.style.backgroundColor = "#226fac";
    escrowBtn.style.color = " white";
    insurBtn.style.color = "#454a51";
    insuranceRow.style.color = "#454a51";
    insuranceRow.style.backgroundColor = "#FAFAFA";
    escroContent.style.display = "block";
    insurContent.style.display = "none";
    $('#insurance-svg').css('display','none');
    $('#insurance-svg2').css('display','block');
    $('#escrow-svg').css('display','none');
    $('#escrow-svg2').css('display','block');
});

insuranceRow2.addEventListener('click', function (e) {
    escrowRow2.style.backgroundColor = "#FAFAFA";
    escrowBtn2.style.color = "#454a51";
    insurBtn2.style.color = "white";
    insuranceRow2.style.color = "#454a51";
    insuranceRow2.style.backgroundColor = "#226fac";
    escrow2Content.style.display = "none";
    insur2Content.style.display = "block";
    $('#insurance-svg3').css('display','block');
    $('#insurance-svg4').css('display','none');
    $('#escrow-svg3').css('display','block');
    $('#escrow-svg4').css('display','none');
});
escrowRow2.addEventListener('click', function (e) {
    escrowRow2.style.backgroundColor = "#226fac";
    escrowBtn2.style.color = " white";
    insurBtn2.style.color = "#454a51";
    insuranceRow2.style.color = "#454a51";
    insuranceRow2.style.backgroundColor = "#FAFAFA";
    escrow2Content.style.display = "block";
    insur2Content.style.display = "none";
    $('#insurance-svg3').css('display','none');
    $('#insurance-svg4').css('display','block');
    $('#escrow-svg3').css('display','none');
    $('#escrow-svg4').css('display','block');
});

insuranceRow3.addEventListener('click', function (e) {
    escrowRow3.style.backgroundColor = "#FAFAFA";
    escrowBtn3.style.color = "#454a51";
    insurBtn3.style.color = "white";
    insuranceRow3.style.color = "#454a51";
    insuranceRow3.style.backgroundColor = "#226fac";
    escrow3Content.style.display = "none";
    insur3Content.style.display = "block";
    $('#insurance-svg5').css('display','block');
    $('#insurance-svg6').css('display','none');
    $('#escrow-svg5').css('display','block');
    $('#escrow-svg6').css('display','none');
});
escrowRow3.addEventListener('click', function (e) {
    escrowRow3.style.backgroundColor = "#226fac";
    escrowBtn3.style.color = " white";
    insurBtn3.style.color = "#454a51";
    insuranceRow3.style.color = "#454a51";
    insuranceRow3.style.backgroundColor = "#FAFAFA";
    escrow3Content.style.display = "block";
    insur3Content.style.display = "none";
    $('#insurance-svg5').css('display','none');
    $('#insurance-svg6').css('display','block');
    $('#escrow-svg5').css('display','none');
    $('#escrow-svg6').css('display','block');
});

insuranceRow4.addEventListener('click', function (e) {
    escrowRow4.style.backgroundColor = "#FAFAFA";
    escrowBtn4.style.color = "#454a51";
    insurBtn4.style.color = "white";
    insuranceRow4.style.color = "#454a51";
    insuranceRow4.style.backgroundColor = "#226fac";
    escrow4Content.style.display = "none";
    insur4Content.style.display = "block";
    $('#insurance-svg7').css('display','block');
    $('#insurance-svg8').css('display','none');
    $('#escrow-svg7').css('display','block');
    $('#escrow-svg8').css('display','none');
});
escrowRow4.addEventListener('click', function (e) {
    escrowRow4.style.backgroundColor = "#226fac";
    escrowBtn4.style.color = " white";
    insurBtn4.style.color = "#454a51";
    insuranceRow4.style.color = "#454a51";
    insuranceRow4.style.backgroundColor = "#FAFAFA";
    escrow4Content.style.display = "block";
    insur4Content.style.display = "none";
    $('#insurance-svg7').css('display','none');
    $('#insurance-svg8').css('display','block');
    $('#escrow-svg7').css('display','none');
    $('#escrow-svg8').css('display','block');
});

insuranceRow.addEventListener('click', function (e) {
    escrowRow.style.backgroundColor = "#FAFAFA";
    escrowBtn.style.color = "#454a51";
    insurBtn.style.color = "white";
    insuranceRow.style.color = "#454a51";
    insuranceRow.style.backgroundColor = "#226fac";
    escroContent.style.display = "none";
    insurContent.style.display = "block";
    $('#insurance-svg').css('display','block');
    $('#insurance-svg2').css('display','none');
    $('#escrow-svg').css('display','block');
    $('#escrow-svg2').css('display','none');
});

prodMenuOne.addEventListener('click', function (e) {
    threePointMenu();
    prodMenuOne.style.borderBottom = "solid 5px #226fac";
    prodMenuOne.style.borderRadius = "0";
    prodOne.style.display = "block";
});

prodMenuTwo.addEventListener('click', function (e) {
    threePointMenu();
    prodMenuTwo.style.borderBottom = "solid 5px #226fac";
    prodMenuTwo.style.borderRadius = "0";
    prodTwo.style.display = "block";
});

prodMenuThree.addEventListener('click', function (e) {
    threePointMenu();
    prodMenuThree.style.borderBottom = "solid 5px #226fac";
    prodMenuThree.style.borderRadius = "0";
    prodThree.style.display = "block";
});

prodMenuFour.addEventListener('click', function (e) {
    threePointMenu();
    prodMenuFour.style.borderBottom = "solid 5px #226fac";
    prodMenuFour.style.borderRadius = "0";
    prodFour.style.display = "block";
});

prodMenuFive.addEventListener('click', function (e) {
    threePointMenu();
    prodMenuFive.style.borderBottom = "solid 5px #226fac";
    prodMenuFive.style.borderRadius = "0";
    prodFive.style.display = "block";
});