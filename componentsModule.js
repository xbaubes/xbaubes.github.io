function buttonsTitles(param) /* TO DO : en lloc de seleccionar els square, generar los. Esborrar l html fixat i crear array amb direccio de pagines de cada materia (a strings.js / let dades) */
{
    let it = 0;
    let squares = document.getElementsByClassName("square");
    let dadesFromTxt = param;
    for (const clau in dadesFromTxt) {
        if (dadesFromTxt.hasOwnProperty(clau)) {
            const valor = dadesFromTxt[clau];
            if (squares[it] !== undefined)
            {
                squares[it].textContent = `${valor}`;
                squares[it].href += "?page="+ encodeURIComponent(valor);
                it++;
            }
        }
    }
}

let url = window.location.href;
for(let ele of modules)
{
    if (url.includes(ele[0])) {
        buttonsTitles(dades[ele[0]]);
    }
}
