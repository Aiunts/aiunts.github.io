"use strict";

//Burger
const burgerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");

burgerBtn.addEventListener("click", function() {
	burgerBtn.classList.toggle("active");
	nav.classList.toggle("active");
});

//Slider
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const items = document.querySelectorAll(".slider__item");
const btnPrev = document.querySelector(".slider__button__left");
const btnNext = document.querySelector(".slider__button__right");
const sliderPoints = document.querySelectorAll(".slider__point");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// items.forEach(item => {
// 	item.style.minWidth = `${itemWidth}px`
// });

sliderPoints.forEach((item, index) => {
	item.addEventListener("click", () => {
		position = -(itemWidth * index) ;

		setPosition();
	    checkBtns();
	    checkPoint();
	})
});

btnNext.addEventListener("click", () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
	checkPoint();
});

btnPrev.addEventListener("click", () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
	checkPoint();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px`;
};

const checkBtns = () => {
	(position === 0) ? btnPrev.style.display = `none` : btnPrev.style.display = `block`;

	(position <= -(itemsCount - slidesToShow) * itemWidth) ? btnNext.style.display = `none` : btnNext.style.display = `block`;
};

const checkPoint = () => {
	for (let i = 0; i < itemsCount; i++) {
	sliderPoints[i].classList.remove("active");
    }

	sliderPoints[Math.abs(position / itemWidth)].classList.add("active");
};

checkBtns();

// //Quote slider
let quotePosition = 0;
const quoteContainer = document.querySelector(".qslider__container");
const quoteTrack = document.querySelector(".qslider__track");
const quoteItems = document.querySelectorAll(".qslider__item");
const quoteSliderPoints = document.querySelectorAll(".qslider__point");
const quoteItemsCount = quoteItems.length;
const quoteItemWidth = quoteContainer.clientWidth / slidesToShow;

quoteSliderPoints.forEach((item, index) => {
	item.addEventListener("click", () => {
		quotePosition = -(quoteItemWidth * index) ;

		setQuotePosition();
	    checkQuotePoint();
	})
});

const setQuotePosition = () => {
	quoteTrack.style.transform = `translateX(${quotePosition}px`;
};

const checkQuotePoint = () => {
	for (let i = 0; i < quoteItemsCount; i++) {
	 quoteSliderPoints[i].classList.remove("active");
    }

	 quoteSliderPoints[Math.abs(quotePosition / quoteItemWidth)].classList.add("active");
};


//Fullscreen Background 
const fullscreen = document.querySelector(".fullscreen");
let url = [
	'#00d169',
	'#ff605f',
	'url("../../img/intro.jpg")',
];
const numberOfUrl = url.length;
let i = 0;

setInterval(() => {
	if(i === numberOfUrl){
		i = 0;
	}
	fullscreen.style.background = `${url[i]} no-repeat center`;
	fullscreen.style.backgroundSize = "cover";
	i++;
}, 10000);