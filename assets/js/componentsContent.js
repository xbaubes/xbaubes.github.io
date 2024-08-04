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

/* menu desplegable */

var imgBar = document.querySelector('#imgBar');
var dropdownContent = document.querySelector('#mainNav');

function closeDropdown() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        imgBar.src = '../../../assets/icons/chevron-down-color.svg'; // Restaurar la imatge original
    }
}

imgBar.addEventListener('click', function(event) {
    // Evita que el clic a imgBar propagui fins al document
    event.stopPropagation();

    // Comprova si el menu es visible i canvia el src de la imatge
    if (dropdownContent.style.display === 'block') {
        closeDropdown();
    } else {
        dropdownContent.style.display = 'block';
        imgBar.src = '../../../assets/icons/chevron-up-color.svg';
    }
});

document.addEventListener('click', function(event) {
    // Comprova si el dropdown es visible i si es fa clic fora d ell
    if (!dropdownContent.contains(event.target) && !imgBar.contains(event.target)) {
        closeDropdown();
    }
});

// Scoll
window.addEventListener('scroll', function() {
    closeDropdown();
});

/* menu desplegable (sticky bar - TO DO) */
