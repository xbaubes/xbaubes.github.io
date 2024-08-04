//obtenim el valor del parametre page de la URL
const params = new URLSearchParams(window.location.search);
const indexTxt = decodeURIComponent(params.get("page"));

//l usem com a titol de la pagina
document.getElementById("txtBar").textContent = indexTxt;

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
			var img = document.createElement('img');
			img.src = '../../../assets/icons/chevron-down.svg';
			img.alt = 'Desplegable';
			img.id = 'imgStickyNavId';
			img.className = 'imgStickyNav';
			titlePageDiv.appendChild(img);

			showTitlePageDiv = true;
		}
	} else if (window.scrollY < 100) {
		if (titlePageDiv !== undefined) {
			titlePageDiv.innerText = "";
			showTitlePageDiv = false;
		}
	}
});

/* nav with other activities of module */

let dd = document.querySelector("#mainNav");

function navModule(param)
{
    let dadesFromTxt = param;
    for (const clau in dadesFromTxt) {
        if (dadesFromTxt.hasOwnProperty(clau)) {
            const valor = dadesFromTxt[clau];
			if(indexTxt != valor[0])
			{
				var link = document.createElement('a');
				var index = valor[1].indexOf('/');
				var newString;
				if (index !== -1) {
					// Crear la nova cadena eliminant tot abans del primer '/'
					newString = valor[1].substring(index + 1);
					link.href = newString + '?page=' + encodeURIComponent(valor[0]);
				} else {
					link.href = valor[1] + '?page=' + encodeURIComponent(valor[0]);
				}
				link.textContent = valor[0];
				link.className = 'dropdown-link';
				dd.appendChild(link);
			}
        }
    }
}

let url = window.location.href;
for(let ele of modules)
{
    if (url.includes(ele[0])) {
        navModule(dades[ele[0]]);
    }
}

/* nav with other activities of module (sticky bar - TO DO) */
