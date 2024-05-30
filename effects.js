window.addEventListener('scroll', function() {
	var image = document.getElementsByClassName('scroll-to-top')[0];
	if (window.scrollY > 0) {
		image.style.display = 'block';
	} else {
		image.style.display = 'none';
	}
});
