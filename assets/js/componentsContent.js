let navIcons2 = document.getElementsByClassName("icon-container icon-container-module-content")[0];
if (navIcons2 !== undefined) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('icon-container-div');
    newDiv.innerHTML = `
    <a href="../../../index.html"><img src="../../../assets/icons/home.svg" alt="Home"></a>
    `;
    let url = window.location.href;
    for(let ele of modules)
    {
        if (url.includes(ele[0])) {
            newDiv.innerHTML += `
            <a href="${ele[2]}"><img src="../../../assets/icons/arrow-left.svg" alt="Module"></a>
            `;
        }
    }
    newDiv.innerHTML += `<div id="titlePageDiv"></div>`;
    navIcons2.appendChild(newDiv);
}

let arrowTop = document.getElementsByClassName("scroll-to-top")[0];
if (arrowTop !== undefined) {
    arrowTop.innerHTML = `
    <a href="#" class="scroll-link">
        <img src="../../../assets/icons/arrow-up.svg" alt="Torna amunt" class="scroll-icon">
    </a>
    `;
}

document.querySelectorAll('article section.content a').forEach(function(link) {
    // Afegeix un esdeveniment de clic a cada enllaç
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportament per defecte de l'enllaç
        window.open(this.href, '_blank'); // Obre l'URL en una nova finestra o pestanya
    });
}); /* tots els enllacos de content s obren a una nova finestra */

/* menu desplegable */

var imgBar = document.querySelector('#imgBar');
var dropdownContent = document.querySelector('#mainNav');
const imgNormalChevron = '../../../assets/icons/chevron-down-color.svg';

function closeDropdown(dropdownContent,imgBar,imgNormalChevron) {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        imgBar.src = imgNormalChevron; // Restaurar la imatge original
    }
}

imgBar.addEventListener('click', function(event) {
    // Evita que el clic a imgBar propagui fins al document
    event.stopPropagation();

    // Comprova si el menu es visible i canvia el src de la imatge
    if (dropdownContent.style.display === 'block') {
        closeDropdown(dropdownContent,imgBar,imgNormalChevron);
    } else {
        dropdownContent.style.display = 'block';
        imgBar.src = '../../../assets/icons/chevron-up-color.svg';
    }
});

document.addEventListener('click', function(event) {
    // Comprova si el dropdown es visible i si es fa clic fora d ell
    if (!dropdownContent.contains(event.target) && !imgBar.contains(event.target)) {
        closeDropdown(dropdownContent,imgBar,imgNormalChevron);
    }
});

// Scroll
window.addEventListener('scroll', function() {
    closeDropdown(dropdownContent,imgBar,imgNormalChevron);
});

/***** EFFECTS *****/

//obtenim el valor del parametre page de la URL
const params = new URLSearchParams(window.location.search);
const indexTxt = decodeURIComponent(params.get("page"));
//obtenim titol de la pagina del head
function obtTitol() {
    const metaTitle = document.querySelector('meta[name="title"]');
    if(metaTitle != null) return metaTitle.getAttribute('content');
    else return null;
}
//l usem com a titol de la pagina
let titolPagina = obtTitol();
if(titolPagina)
    document.getElementById("txtBar").textContent = titolPagina;
else
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

			var dropdownDiv = document.createElement('div');
			dropdownDiv.className = 'dropdown';

			var img = document.createElement('img');
			img.src = '../../../assets/icons/chevron-down.svg';
			img.alt = 'Desplegable';
			img.id = 'imgStickyNavId';
			img.className = 'chevron-icon';

			var dropdownContent = document.createElement('div');
			dropdownContent.id = 'secNav';
			dropdownContent.className = 'dropdown-content';

			dropdownDiv.appendChild(img);
			dropdownDiv.appendChild(dropdownContent);
			
			titlePageDiv.appendChild(dropdownDiv);

			let url = window.location.href;
			for(let ele of modules)
			{
				if (url.includes(ele[0])) {
					navModule(url,dropdownContent,dades[ele[0]]);
				}
			}

            img.addEventListener('click', function(event) {

                event.stopPropagation();

                if (dropdownContent.style.display === 'block') {
                    closeDropdown(dropdownContent,img,'../../../assets/icons/chevron-down.svg');
                } else {
                    dropdownContent.style.display = 'block';
                    img.src = '../../../assets/icons/chevron-up.svg';
                }
            });

            document.addEventListener('click', function(event) {
                if (!dropdownContent.contains(event.target) && !img.contains(event.target)) {
                    closeDropdown(dropdownContent,img,'../../../assets/icons/chevron-down.svg');
                }
            });

            window.addEventListener('scroll', function() {
                closeDropdown(dropdownContent,img,'../../../assets/icons/chevron-down.svg');
            });

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

function navModule(url,ddi,param)
{
    let dadesFromTxt = param;
    for (const clau in dadesFromTxt) {
        if (dadesFromTxt.hasOwnProperty(clau)) {
            const valor = dadesFromTxt[clau];
			if(indexTxt != valor[0])
			{
				var link = document.createElement('a');
				link.href = "../" + valor[1] + '?page=' + encodeURIComponent(valor[0]);
				link.textContent = valor[0];
				link.className = 'dropdown-link';
				ddi.appendChild(link);
			}
        }
    }
}

let url = window.location.href;
for(let ele of modules)
{
    if (url.includes(ele[0])) {
        navModule(url,dd,dades[ele[0]]);
    }
}
