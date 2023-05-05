const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
	iconMenu.addEventListener('click', () => {
		if (document.body.style.overflow != 'hidden') {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		iconMenu.classList.toggle('_active');
	});
}