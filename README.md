<!-- Add a link to your live demo in Github Pages 🌐-->
# Link to website
<a href="https://bart-spons.github.io/web-app-from-scratch-2324/">https://bart-spons.github.io/web-app-from-scratch-2324/</a>

<!-- ☝️ replace this description with a description of your own work -->
# Uitleg site
Ik heb voor de opdracht Web App From Scratch (WAFS) een portfolio gemaakt. Op deze portfolio is allerlei informatie te vinden van mij. Een groot deel van deze informatie wordt ingeladen door middel van een JSON bestand. De API van dit externe bestand wordt gefetched en ingeladen op de website. Mijn eigen JSON bestand gebruik ik en een externe API van Github om de readme in te laden.


<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
Mockup

<!-- How about a section that describes how to install this project? 🤓 -->
git clone

<!-- ...but how does one use this project? What are its features 🤔 -->
modules

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
bestand

<hr>

# Mijn process

## De eisen voor de beoordeling
- is gerealiseerd met ‘nette’ vanilla HTML, CSS en Javascript,
- bevat diverse content,
- bevat minimaal één tot in detail uitgewerkte micro-interactie (met JS),
- bevat minimaal één data-connectie (API call),
- bevat de juiste data voor integratie met de team app,
- is toegankelijk,
- heeft een professionele vormgeving (en styling),
- is volledig responsive,
- is gedocumenteerd

# Dag 1
De eerste dag van de minor web design & development zijn we gezamelijk begonnen met een introductie en een 'ren je rot spel'. Vervolgens moesten we ons niveau kiezen en bij deze groep gaans staan. Aan de hand van iedereen zijn/haar voorkennis zijn er groepjes gemaakt. Met dit groepje zijn we gaan brainstormen over een gemeenschappelijke hobby en hebben we films gekozen. In iedereen zijn persoonlijke JSON bestand staan allemaal gegevens en ook moet iedereen daar zijn/haar top 5 favorieten superhelden en schurken inzetten. Dit gaan we uiteindelijk gebruiken voor onze gemeenschappelijke applicatie. 

## Onze schets / brainstorm

<img src="https://github.com/Bart-Spons/web-app-from-scratch-2324/assets/62010539/6b1bbf0a-69f6-4d74-8b95-6f930357fbf2" width="600" alt="schets1">

## Mijn schetsen
Mijn idee over wat voor 'Web App from Scratch' ik wil gaan maken moet te maken hebben met het werk dat wij als groep samen gaan maken. Ik heb besloten om een portfolio website te gaan maken. Als eerste ben ik gaan schetsen en heb ik een breakdownschets gemaakt. Deze schetsen zijn hieronder te zien.

<img src="./docs/images/schets2.jpg" width="500" alt="schets2"> 

<img src="https://github.com/Bart-Spons/web-app-from-scratch-2324/assets/62010539/9c40e726-1caa-4f5b-821f-0133ad884f8a" width="500" alt="schets3">

## Ditigale schetsen

Figma

## JSON bestand
Als groep hebben we allemaal dezelfde opzet gebruikt voor ons JSON bestand:

```JSON
{
"name": "", 
  "age": "",
  "job": "",
  "study": "",
  "city": "",
  "hobbies": "",
  "favourite-films": "",
  "avatar": {
    "url": "",
    "alternativeText": ""
  }
}
```

Deze heb ik ingevuld en ook heb ik al een klein begin gemaakt aan de code.

## Mappenstructuur
```
|--- docs
    |--- images
    |--- json
        |--- bart.json
    |--- scripts
        |--- script.js
    |--- stylesheets
        |--- style.css
|---index.html
|---info.json
README.md

```

# Dag 2
Op de tweede dag hebben we een korte stand up gehad met onze docent. Ik had mijn schetsen laten zien en had verteld dat ik nu door ging met het coderen. Dit was prima. Ik heb de navigatie balk uitgewerkt, hier later meer over. Ook heb ik de eerste sectie gemaakt met informatie over mijzelf en een foto die veranderd als je eroverheen hoverd. In de middag heb ik meegedaan aan een workshop server backend hosten met Bas (docent). Dit leek voor een deel op BlokTech. Dit is niet nodig voor deze minor maar wel interessant. Onze docent had laten zien hoe je een API fetched. Als voorbeeld had hij Spotify gebruikt.


## Afbeelding grid en hover op de afbeelding
Ik heb in de eerste sectie na de header een grid gemaakt met 2 kolommen. Aan de rechterkant staat een afbeelding van mij. Als de gebruiker over deze afbeelding 'hoverd' dan veranderd de afbeelding. Dit heb ik gedaan met alleen CSS. Op de afbeelding van mijn diploma uitreiking in Amerika is te zien dat ik eerst de hoed vasthoud en daarna in de lucht gooi.<br><br>
<img src="./docs/images/dag2.png" alt="Beschrijving van de afbeelding" width="500"> <img src="./docs/images/dag2-hover.png" alt="Beschrijving van de afbeelding" width="500"><br><br>


## Afbeelding nav bar responsive (scherpere afbeelding komt nog)
Ik heb de navigatie balk helemaal uitgewerkt (ook responsive) en ben hier redelijk tevreden over. Als de website op mobiel formaat gebruikt wordt veranderd de nav bar in een hamburger menu die je kunt openen. Als je over github hoverd dan worden extra opties uitgeklapt. De github pagina over dit project en een over de blog die gaat over de 'weekly nerd', dit zijn gastsprekers die telkens op een woensdag verhalen komen vertellen over zichzelf en hun projecten.

<img src="./docs/images/navSamen.jpg" alt="Navbar" width="1000"><br>

# Dag 3
In de ochtend een stand-up gedaan met mijn docent. Ik te horen dat mijn werk tot nu toe goed uitzag en aan de minimale eisen voldeed. Ik kreeg de uitdagin om van mijn afbeelding met de hover een animatie te maken. Ik was begonnen met een @keyframe te gebruiken voor een afbeelding hover over 6 afbeeldingen. De eerst keer liep prima maar vervolgens bleef ik heel lang bugs houden. De code is hieronder te zien. 

## De keyframes (niet gelukt)
<!-- ![keyframes](./docs/images/image.png) -->
<img src="./docs/images/image.png" alt="keyframes"><br>

## De werkende code
Hierna ben ik toch Javascript gaan gebruiken en dit kreeg ik uiteindelijk werkend. Ook heb ik nog toegevoegd dat de afbeelding, die te zien was toen ik vanaf de hover ging, in beeld bleef staan. Als de gebruiker vervolgens weer hoverd over de afbeelding loopt de loop meteen door zonder te beginnen bij de eerste afbeelding. De code is hieronder te zien

<!-- ![CodeAfbeeldingLoop](./docs/images/image-1.png) -->
<img src="./docs/images/image-1.png" alt="CodeAfbeeldingLoop"><br>

## JSON inladen

Het is mij gelukt om JSON in the laden. Ik heb via Javascript een verbinding gemaakt met mijn locale JSON bestand en in de HTML heb ik een p tag gebruikt met een id erin om dit te gebruiken in Javascript d.m.v. document.getElementById. De code in javascript is hieronder te vinden.

### Alle gegevens laten zien 
<img src="./docs/images/image-4.png" alt="gegevens"><br>

### Alleen mijn naam (Bart) in de eerste sectie veranderen.
<img src="./docs/images/image-6.png" alt="mijnNaam"><br>

### Alle code in Javascript

<img src="./docs/images/image-2.png" alt="alles laten zien"><br>


## Weekly nerd

In de middag hadden we onze 'weekly nerd' spreker. Dit was Kilian Valkhof. Deze supertechneut heeft een eigen browser ontwikkeld en ons allerlei informatie gegevens over de nieuwste ontwikkelingen op het gebied van web development. Ik heb via Github Education een key gekregen voor een jaar lang gratis gebruik te maken van <a href="https://polypane.app/">https://polypane.app/</a>.  Meer informatie hierover is te vinden op mijn andere Github pagina.

# Dag 4
In het begin van de dag een korte standup gehad met mijn docent. Hierin heb ik laten zien wat ik tot nu toe had gemaakt, dit was prima. Ik ging eerst aan de slag om mijn JSON bestand extern te fetchen in plaats van lokaal. Ook had ik het idee om mijn Github Readme te laten fetchen door middel van een API. Op deze manier is mijn mijn Github Readme pagina dan altijd up to date op mijn website.

## JSON extern fetchen
Ik had een JSON bestand aangemaakt en deze data wordt ingeladen op de website. Dit was via een lokale link op op mijn computer. Ik het de lokale link vervangen met de link van Github. Nu maak ik gebruik van een externe link en kunnen andere developers gebruik maken van deze data.

<img src="./docs/images/jsonfetch.png" alt="json fetchen"><br>

## Github readme fetchen en laten zien op mijn website
Ik was hiermee aan de slag gegaan en dit was gelukt. Als uitdaging kreeg ik om niet alles te laten zien maar specifieke elementen. Mij leek het leuk om bijvoorbeeld bepaalde afbeeldingen te laten zien. Het is er lastig om dit te doen zonder frameworks dus ik kreeg toestemming van mijn docent om dit te doen. Mij werd aangeraden om Unified JS te gebruiken.

## Hoe te werk?

### Stap 1
Ik kreeg aangeraden om een aantal modules van Unified JS te installeren. Ik heb <a href="https://unifiedjs.com/explore/package/remark-rehype/">deze pagina</a> gebruikt als handleiding.
- import remarkParse from 'remark-parse' (Leest markdown)
- import remarkRehype from 'remark-rehype' (In memeory markdown naar html)
- Rehypestringify (html string ervan maken)

### Stap 2
Daarna maak ik een constante variabele aan en gebruik ik de modules die ik geimporteerd heb.

<img src="./docs/images/image-11.png" alt="modules"><br>

### Stap 3
Fetch de API van mijn github

<img src="./docs/images/image-21.png" alt="api fetch"><br>

### Stap 4
Modules toepassen
data naar json
data van json html van maken

de data die nu in de constante staat in een div laten zien als html string op de website

<img src="./docs/images/image-21.png" alt="modules toepassen"><br>

### Stap 5
Als laatste stap heb ik ik de data laten zien op de pagina. Normaal doe je deze stap eerder (staat ook eerder in de code). Maar tijdens het proces om dit te developen kwam dit als laatste omdat ik eerst probeerde om alle content in de console te laden. 

<img src="./docs/images/image-41.png" alt="data laten zien"><br>


# Dag 5
Ik hed mijn JSON data ingeladen op mijn pagina. Ik heb alle data ingeladen en wil eigenlijk alleen de superhelden en de schurken inladen. Ik heb een nieuwe sectie aangemaakt en hier heb ik ook gebruik gemaakt van de grid die ik al eerder gebruikt heb. Ik heb in beide kolommen een top 5 toegevoegd. In de HTML heb ik < p id="heroes"></ p> en < p id="villains"></ p> gebruikt om alles in te laden. In de Javascript heb ik deze elemten aangeroepen en in een lijst gezet. Er wordt een geordende lijst aangemaakt en alle superhelden worden geordend van 1 t/m 5. De rest van de dag heb ik mij nog bezig gehouden met de readme bij te werken.

<img src="./docs/images/heroes_load.png" alt="load heroes and villains">

# dag 6 maandag
Ik heb een nieuw kleurenpalet gekozen en deze toegepast om mijn pagina. Vervolgens was ik naar mijn website aan kijken en zag ik dat mijn schtesen bijna allemaal zijn uitwerkt in code. Ik had wel nog veel 'classes' gebruikt in mijn code. Deze wil ik allemaal eruit halen en de CSS stijling op een andere manier verbinden. Ik ben hier lang mee bezig geweest maar heb momenteel geen enkele class meer in mijn code. Wel nog een aantal keer een ID maar dat moet omdat ik deze elementen moet aanroepen via Javascript om bijvoorbeeld JSON in de laten of de animatie te laten loopen.

<img src="./docs/images/palet.png" alt="kleurenpalet"><br>

# dag 7 dinsdag
Onze docent wilt van iedereen graag een JSON bestand met data van die persoon. Hij gaat hier een API van maken met filter functies en dergelijke om aan ons te laten zien. Ik ben benieuwd naar het eindresultaat. Ik heb een loading screen toegevoegd die de eerste twee seconden te zien is voordat de website wordt geladen. 

## JSON bestand

```JSON
{
    "firstName": "Bart",
    "lastName": "Spons",
    "avatar_url": "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-19/375614630_250269290767351_882160016072086149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=107&_nc_ohc=PCYEn-4CSZMAX-MGqhq&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBY5swZouOQ8LVGNIhZ4Sb04m7IOb5O_LLYA5BA3-_AMQ&oe=65D01006&_nc_sid=8b3546",
    "age": 21,
    "city": "Amsterdam",
    "hobbies" : ["Films", "Music", "Traveling", "Gaming", "Soccer"],
    "truthsAndLies" : ["Mijn oude buurjongen heeft de slimste mens gewonnen", "Ik was vroeger gameverslaafd", "Ik heb een jaar in Amerika gewoond"],
    "bio" : "optioneel",
    "favouriteAnimal" : "Dog"
}

```

## Loading screen
### HTML
```html
<!-- loading screen -->
        <div id="loading-screen">
            <h2>Amazing webpage incoming...</h2>
        </div>
```
### CSS
```css
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--quaternary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

```

### Javascript
```javascript
// Loading screen
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById("loading-screen").style.display = "none";
  }, 2000); // Verberg het laadscherm na 2 seconden
});
```

# Dag 8 (woensdag)
Readme bijwerken

# Nice to have 
meer tijd in het loading screen