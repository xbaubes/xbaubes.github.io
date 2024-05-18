document.getElementsByTagName("footer")[0].innerHTML = `
<div>
<img src="https://raw.githubusercontent.com/xbaubes/xbaubes/main/CC.png" alt="CC(BY)">
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
    <a href="index.html"><img src="assets/icons/home.svg" alt="Home"></a>
    `;
}
let navIcons2 = document.getElementsByClassName("icon-container icon-container-module-content")[0];
if (navIcons2 !== undefined) {
    navIcons2.innerHTML = `
    <a href="index.html"><img src="assets/icons/home.svg" alt="Home"></a>
    <a href="templateModule.html"><img src="assets/icons/arrow-left.svg" alt="Module"></a>
    `;
}
