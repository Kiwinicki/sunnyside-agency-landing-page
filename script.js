(() => {
	const headerMenu = document.querySelector('.site-header__nav-menu');
	document.addEventListener('resize', () => {
		document.body.clientWidth >= 600 ? headerMenu.classList.remove('site-header__nav-menu--hidden') : headerMenu.classList.add('site-header__nav-menu--hidden');
	});

	const btnMenu = document.querySelector('.site-header__nav-btn');
	console.log(headerMenu);
	btnMenu.addEventListener('click', () => {
		console.log('dupa');
		headerMenu.classList.toggle('site-header__nav-menu--hidden');
	});
})();
