let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('.nav');
let textareaMessage = document.querySelector('.textareafield__input');
let star = document.querySelector('.star');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('active');
	nav.classList.toggle('active');
	
});

document.addEventListener('click', (e) => {
	if (!burgerMenu.contains(e.target)) {
		burgerMenu.classList.remove('active');
	}
});


textareaMessage.addEventListener('keyup', () => {
	if(textareaMessage.value.length > 0) star.style.display = 'none';
	if(textareaMessage.value.length === 0) star.style.display = 'block';
});