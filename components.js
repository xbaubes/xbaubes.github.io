let modules = [
    ["aplicainfo","https://github.com/xbaubes/AplicacionsInformatiques","../../aplicainfo/aplicacions.html"],
    ["basesddades","https://github.com/xbaubes/BasesDeDades","../../basesdedades/bdd.html"],
    ["desenvolupaweb","https://github.com/xbaubes/DesenvolupamentWeb","../../desenvolupaweb/web.html"],
    ["programainfo","https://github.com/xbaubes/Programacio","../../programainfo/programacio.html"],
    ["sistemopera","https://github.com/xbaubes/SistemesOperatius","../../sistemopera/so.html"],
    ["xarxesinfo","https://github.com/xbaubes/XarxesISeguretat","../../xarxesinfo/xarxes.html"]
];

document.getElementsByTagName("footer")[0].innerHTML = `
<div>
    <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/xbaubes/xbaubes/main/CC.png" alt="CC(BY)">
    </a>
</div>
<div>
<p>Autor: Xavier Baubés Parramon</p>
<p>Aquest document es llicencia sota Creative Commons versió 4.0.</p>
<p>Es permet compartir i adaptar el material però reconeixent-ne l'autor original.</p>
</div>
`;

let navIcons1 = document.getElementsByClassName("icon-container icon-container-modules")[0];
if (navIcons1 !== undefined) {
    navIcons1.innerHTML = `
    <a href="../index.html"><img src="../assets/icons/home.svg" alt="Home"></a>
    `;
    let url = window.location.href;
    for(let ele of modules)
    {
        if (url.includes(ele[0])) {
            navIcons1.innerHTML += `
            <a href="${ele[1]}" target="_blank" rel="noopener noreferrer"><img src="../assets/icons/github.svg" alt="Github"></a>
            `;
        }
    }
}

let navIcons2 = document.getElementsByClassName("icon-container icon-container-module-content")[0];
if (navIcons2 !== undefined) {
    navIcons2.innerHTML = `
    <a href="../../index.html"><img src="../../assets/icons/home.svg" alt="Home"></a>
    `;
    let url = window.location.href;
    for(let ele of modules)
    {
        if (url.includes(ele[0])) {
            navIcons2.innerHTML += `
            <a href="${ele[2]}"><img src="../../assets/icons/arrow-left.svg" alt="Module"></a>
            `;
        }
    }
}

let arrowTop = document.getElementsByClassName("scroll-to-top")[0];
if (arrowTop !== undefined) {
    arrowTop.innerHTML = `
    <a href="#" class="scroll-link">
        <img src="../../assets/icons/arrow-up.svg" alt="Torna amunt" class="scroll-icon">
    </a>
    `;
}
