## Presentació del projecte

Benvingut al repositori del meu portal de docència informàtica,
una plataforma dissenyada per oferir recursos educatius de qualitat i fomentar la col·laboració entre estudiants i professors en l'àmbit de la informàtica.

Aquesta aplicació web usa únicament les tecnologies bàsiques de desenvolupament web i sense cap framework:
- Estructura amb HTML.
- Estils amb CSS.
- Interactivitat i gestió de dades amb JavaScript.

Malgrat la seva simplicitat és fàcilment escalable i mantenible.

---

## Tutorial per afegir mòduls i contingut

**Crear nou mòdul:** Afegir-lo a *data/module.js* i crear carpeta a *modules*.

Exemple: Creem mòdul *M*, amb pàgina de referència *https://www.google.com/*.
<ol type="1">
	<ul>Creem la carpeta "M" dins la carpeta "modules" i en creem la pàgina inicial "index.html" copiada de "modules/templates/templateModule.html".</ul>
	<ul>
		N'afegim el nom a l'array "modules" de "data/module.js":
		<pre>
		const modules = [
		    // Altres mòduls aquí
		    ["M", "https://www.google.com/", "../../M/index.html"],
		    // Altres mòduls aquí
		]; </pre>
	</ul>
	<ul>
		Afegim l'enllaç a "index.html" per poder-hi accedir des de la pàgina principal del lloc web:
		<pre>
		&lt;div class=&quot;grid&quot;&gt;
		    &lt;!-- Altres mòduls aquí --&gt;
		    &lt;a href=&quot;modules/M/index.html&quot; class=&quot;square&quot;&gt;M&lt;/a&gt;
		    &lt;!-- Altres mòduls aquí --&gt;
		&lt;/div&gt; </pre>
	</ul>
</ol>


**Crear contingut al mòdul:** Afegir-lo a *data/strings.js* i crear carpeta a la carpeta del mòdul de *modules*.

Exemple: Creem contingut *C* dins la carpeta del mòdul *M*, el nom del contingut serà *CTest*.
<ol type="1">
	<ul>Creem la carpeta "C" a "modules/M" amb la pàgina inicial "C.html" copiada de "modules/templates/content/templateModuleContent.html".</ul>
	<ul>
		L'afegim a l'objecte "dades" de "data/strings.js":
		<pre>
		const dades = {
		    // Altres continguts aquí
		    "M": {
		        "C": ["CTest","C/C.html"]
		    },
		    // Altres continguts aquí
		}; </pre>
	</ul>
	<!--
	<ul>
		Editem la pàgina inicial "C.html" per afegir novament el nom del contingut (<em>CTest</em>). No és necessari, però es recomana per robustesa i indexació SEO. És imprescindible que es mantingui el nom del contingut utilitzat anteriorment.
		Editem les metadades de la capçalera <code>&lt;head&gt;</code>: <br>
		<pre>
		&lt;meta name="title" content="CTest"&gt; </pre>	
	</ul>
	-->
</ol>

#### Exemple del funcionament

Prova online del funcionament de la pàgina amb text i imatges:
https://xbaubes.github.io/modules/templates/templateModule.html
