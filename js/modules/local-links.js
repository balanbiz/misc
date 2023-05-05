// localLinks
// HTML example <a data-goto=".local-adress" href="#" class="any">Just a text</a>

const localLinks = document.querySelectorAll('[data-goto]');
// const localLinks = document.querySelectorAll('.any[data-goto]');

if (localLinks.length > 0) {
	localLinks.forEach(localLink => {
		localLink.addEventListener('click', onLocalLinkClick);
	});

	function onLocalLinkClick(e) {
		const localLink = e.target;
		if (localLink.dataset.goto && document.querySelector(localLink.dataset.goto)) {
			const gotoBlock = document.querySelector(localLink.dataset.goto);
			// Header selector is needed here if exists
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset /* - document.querySelector('header').offsetHeight */;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}