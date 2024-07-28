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
