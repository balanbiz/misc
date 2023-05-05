let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let dm__body = document.querySelector('body');
if(isMobile.any()) {
	dm__body.classList.add('touch');
	let dm__arrow = document.querySelectorAll('.arrow');
	for (let i = 0; i < dm__arrow.length; i++) {
		let this__dm__link = dm__arrow[i].previousElementSibling;
		let dm__subMenu = dm__arrow[i].nextElementSibling;
		let this__dm__arrow =  dm__arrow[i];

		this__dm__link.classList.add('parent');
		dm__arrow[i].addEventListener('click', () => {
			dm__subMenu.classList.toggle('open');
			this__dm__arrow.classList.toggle('active');
		})
	}
}	else {
	dm__body.classList.add('mouse');
}