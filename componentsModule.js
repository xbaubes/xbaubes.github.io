let navIcons1 = document.getElementsByClassName("icon-container icon-container-modules")[0];
if (navIcons1 !== undefined) {
    navIcons1.innerHTML = `
    <a href="../../index.html"><img src="../../assets/icons/home.svg" alt="Home"></a>
    `;
    let url = window.location.href;
    for(let ele of modules)
    {
        if (url.includes(ele[0])) {
            navIcons1.innerHTML += `
            <a href="${ele[1]}" target="_blank" rel="noopener noreferrer"><img src="../../assets/icons/github.svg" alt="Github"></a>
            `;
        }
    }
}

function buttonsTitles(param) /* genera tants square elements com elements declarats al modul de strings.js */
{
    let squares = document.getElementsByClassName("grid")[0];
    let dadesFromTxt = param;
    for (const clau in dadesFromTxt) {
        if (dadesFromTxt.hasOwnProperty(clau)) {
            const valor = dadesFromTxt[clau];
            const anchor = document.createElement('a');
            anchor.href = valor[1] + '?page=' + encodeURIComponent(valor[0]);
            anchor.className = 'square';
            anchor.textContent = `${valor[0]}`;
            squares.appendChild(anchor);
        }
    }
}

let url2 = window.location.href;
for(let ele of modules)
{
    if (url2.includes(ele[0])) {
        buttonsTitles(dades[ele[0]]);
    }
}
