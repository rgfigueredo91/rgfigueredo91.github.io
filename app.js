const navSlide = () => {
	const burguer = document.querySelector('.burguer');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li')
	//togggle Nav

	burguer.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
	//Animate Links
	navLinks.forEach((link, index) => {
		link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s';
	});
}

navSlide();