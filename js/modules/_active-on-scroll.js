// add class _animated to activate adding class _active on these objects by scroll

let animItems = document.querySelectorAll('._animated');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll, {passive: true});
	function animOnScroll() {
		animItems.forEach(animItem => {
			const animItemHeight = animItem.offsetHeight,
				   animItemOffset = offset(animItem).top,
					animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} /* else {
				// functional can controll repeating animation
				if (!animItem.classList.contains('_anim-once')) {
					animItem.classList.remove('_active');
				}
			} */
		});
	}
	// Correct adaptive offset finder
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
	animOnScroll();
}