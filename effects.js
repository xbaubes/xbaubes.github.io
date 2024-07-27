//obtenim el valor del parametre page de la URL
const params = new URLSearchParams(window.location.search);
const indexTxt = decodeURIComponent(params.get("page"));

//l usem com a titol de la pagina
document.getElementsByClassName("titleBar")[0].textContent = indexTxt;

let showTitlePageDiv = false;
window.addEventListener('scroll', function() {
	var image = document.getElementsByClassName('scroll-to-top')[0];
	var nav = document.getElementsByTagName('nav')[0];
	var navDiv = document.getElementsByClassName('icon-container-div')[0];
	var titlePageDiv = document.getElementById('titlePageDiv');
	if (window.scrollY > 0) {
		image.style.display = 'block';
		nav.style.margin = '0px';
		nav.style.width = '100%';
		nav.style.backgroundColor = 'var(--color-nav)';
		nav.style.padding = '20px 0 20px 0';
		if (navDiv !== undefined) navDiv.style.width = '80%';
	} else {
		image.style.display = 'none';
		nav.style.margin = '0 auto';
		nav.style.width = '80%';
		nav.style.backgroundColor = '';
		nav.style.padding = '20px';
		if (navDiv !== undefined) navDiv.style.width = '100%';
		if (titlePageDiv !== undefined) {
			titlePageDiv.innerText = "";
			showTitlePageDiv = false;
		}
	}
	if (window.scrollY >= 100 && !showTitlePageDiv) {
		if (titlePageDiv !== undefined) {
			titlePageDiv.innerText = indexTxt;
			showTitlePageDiv = true;
		}
	} else if (window.scrollY < 100) {
		if (titlePageDiv !== undefined) {
			titlePageDiv.innerText = "";
			showTitlePageDiv = false;
		}
	}
});
