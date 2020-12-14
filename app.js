'use strict'

// 1.작은이미지를 클릭하기 위해 작은이미지에 해당하는 클래스를 가져온다.
// 2.작은이미지가 클릭 상태를 알려야한다.
// 2-2 작은이미지가 3개임으로 각각의 이미지를 인식해야한다.
// 3.클릭했을시 대표이미지에 영향을 주어야한다.
// 4.대표이미지를 인식할수있도록 클래스를 가져온다.
// 5.대표이미지에 작은이미지가 나타내는 화면을 출력한다.

const thum1 = document.querySelector('#thum1');
const thum2 = document.querySelector('#thum2');
const thum3 = document.querySelector('#thum3');

thum1.addEventListener('mouseover', ()=> {
    changeCirle1();
    changeImage1();
});
thum2.addEventListener('mouseover', () => {
    changeCirle2();
    changeImage2();

});
thum3.addEventListener('mouseover', () => {
    changeCirle3();
    changeImage3();
});


// thum2.addEventListener('click', () => {
//     changeImage2();
//     console.log('ss');
    
// });

const imgbox = document.querySelector('.starbucks'); //  대표 아이콘

function changeImage1(){
    imgbox.src ='images/img1.png';
}
function changeImage2(){
    imgbox.src ='images/img2.png';
}
function changeImage3(){
    imgbox.src ='images/img3.png';
}

const imgcirle = document.querySelector('.cirle');
function changeCirle1() {
    imgcirle.style.background="#009624";
} 
function changeCirle2() {
    imgcirle.style.background="#eb7495";
}
function changeCirle3() {
    imgcirle.style.background="#d752b1";    
}