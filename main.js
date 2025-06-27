//MENU FOR PUB SITE
//
//

//VARIABLES//
const burger = document.querySelector("#toggle");
const icon = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const nav = document.querySelector(".nav-bar");
const menuOpt = document.querySelectorAll("li");
const scrollToTop = document.querySelector("#scrollBtn");

//MENU FUNCTION//
burger.addEventListener("click", () => {
	nav.classList.toggle("open");
	icon.classList.toggle("hidden");
	cross.classList.toggle("hidden");
});

menuOpt.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("open");
		icon.classList.toggle("hidden");
		cross.classList.toggle("hidden");
	});
});

//SCROLL TO TOP BUTTON SCRIPT//
//

window.onscroll = function () {
	scrollFunc();
};

function scrollFunc() {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		scrollToTop.style.display = "block";
	} else {
		scrollToTop.style.display = "none";
	}
}

function topFunc() {
	document.body.scrollTop = 0; //Safari
	document.documentElement.scrollTop = 0;
}

scrollToTop.addEventListener("click", () => {
	topFunc();
});

//SCRIPT FOR SLIDESHOW//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

prev.addEventListener("click", () => {
	plusSlides(-1);
});

next.addEventListener("click", () => {
	plusSlides(1);
});

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	dots[0].addEventListener("click", () => {
		currentSlide(1);
	});
	dots[1].addEventListener("click", () => {
		currentSlide(2);
	});
	dots[2].addEventListener("click", () => {
		currentSlide(3);
	});
}

//FORM SCRIPTS//
//
//
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#txt-area");
const submit = document.querySelector("#send");
const form = document.querySelector("#form");
const popUp = document.querySelector("#popUp");
const errorMsg = document.querySelector("#errorMsg");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (
		email.value.match(
			/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
		)
	) {
		name.value = "";
		email.value = "";
		msg.value = "";
		errorMsg.style.display = "none";

		openPopup();
	} else {
		errorMsg.style.display = "block";
	}
	console.log(
		`Name: ${name.value}`,
		`Email:  ${email.value}`,
		`Message:  ${msg.value}`
	);
});

function openPopup() {
	popUp.classList.add("open-popup");
	window.addEventListener("click", () => {
		popUp.classList.remove("open-popup");
	});
}
