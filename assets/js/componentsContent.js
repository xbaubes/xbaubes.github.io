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

document.querySelector('#imgBar').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var imgBar = document.querySelector('#imgBar');

    // Comprova si el menu esta visible i canvia el src de la imatge
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        imgBar.src = '../../../assets/icons/chevron-down.svg'; // Restaurar la imatge original
    } else {
        dropdownContent.style.display = 'block';
        imgBar.src = '../../../assets/icons/chevron-up.svg';
    }
});

window.onclick = function(event) { // tanca el menu si es fa clic fora o es fa scroll
    if (!event.target.matches('#imgBar')) {
        closeDropdown();
    }
}

window.onscroll = function() {
    closeDropdown();
}

function closeDropdown() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var imgBar = document.querySelector('#imgBar');

    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
            openDropdown.style.display = "none";
            imgBar.src = '../../../assets/icons/chevron-down.svg'; // Restaurar la imatge original
        }
    }
}
