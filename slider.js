const sliderButtons = document.querySelectorAll(
	'.slider-wrapper .slider-button'
);
const imageList = document.querySelector('.slider-wrapper .image-list');
const sliderScrollbar = document.querySelector('.container .slider-scrollbar');
const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

scrollbarThumb.addEventListener('mousedown', (e) => {
	const startX = e.clientX;
	const thumbPosition = scrollbarThumb.offsetLeft;

	const handleMouseMove = (event) => {
		const deltaX = event.clientX - startX;
		const newThumbPosition = thumbPosition + deltaX;
		const maxThumbPosition =
			sliderScrollbar.getBoundingClientRect().width -
			scrollbarThumb.offsetWidth;

		const boundedPosition = Math.max(
			0,
			Math.min(maxThumbPosition, newThumbPosition)
		);
		const scrollPosition =
			(boundedPosition / maxThumbPosition) * maxScrollLeft;

		scrollbarThumb.style.left = `${boundedPosition}px`;
		imageList.scrollLeft = scrollPosition;
	};

	const handleMouseUp = () => {
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	};

	document.addEventListener('mousemove', handleMouseMove);
	document.addEventListener('mouseup', handleMouseUp);
});

const initSlider = () => {
	sliderButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const direction = button.id === 'prev-slide' ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		});
	});

	const updateScrollThumbPosition = () => {
		const scrollPosition = imageList.scrollLeft;
		const thumbPosition =
			(scrollPosition / maxScrollLeft) *
			(sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
		scrollbarThumb.style.left = `${thumbPosition}px`;
	};

	imageList.addEventListener('scroll', () => {
		updateScrollThumbPosition();
	});
};

window.addEventListener('load', initSlider);
