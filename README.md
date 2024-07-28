Benvingut al repositori del meu portal de docència informàtica,
una plataforma dissenyada per oferir recursos educatius de qualitat i fomentar la col·laboració entre estudiants i professors en l'àmbit de la informàtica.

TUTORIAL PER AFEGIR CONTINGUT

Crear nou mòdul: Afegir-lo a "data/module.js" i crear carpeta a "modules".
Exemple: Creem mòdul "M", amb pàgina de referència "https://www.google.com/"
Creem la carpeta "M" a "modules" amb la pàgina inicial "M.html" copiada de "modules/templates/templateModule.html"
L'afegim a l'array "modules" de "data/module.js":
	const modules = [
		...
		["M","https://www.google.com/","../../M/M.html"],
		...
	];
Afegim l'enllaç a "index.html" per poder-hi accedir des de la pàgina principal:
	<div class="grid">
		...
		<a href="modules/M/M.html" class="square">M</a>
		...
	</div>

Crear contingut al mòdul: Afegir-lo a "data/strings.js" i crear carpeta a la carpeta del mòdul de "modules".
Exemple: Creem contingut "C" dins la carpeta del mòdul "M", el nom del contingut serà "CTest".
Creem la carpeta "C" a "modules/M" amb la pàgina inicial "C.html" copiada de "modules/templates/templateModuleContent.html"
L'afegim a l'objecte "dades" de "data/strings.js":
const dades = {
	...
    "M": {
        "C": ["CTest","C/C.html"]
    },
	...
};
