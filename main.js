/* eslint-disable no-restricted-globals */
const getMoreBtn = document.querySelector('.get-more');

const URL_ABOUT = './about.html';

getMoreBtn.addEventListener('click', () => {
	location.href = URL_ABOUT;
});
