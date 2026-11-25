# Bouwopdracht: website riefresh.nl

## Wat RIEfresh is

RIEfresh is het RI&E-platform van Helpr.ai. De mensen die het werk kennen voeren een kort AI-voicegesprek met onze interviewer. Het platform maakt daar bevindingen met een risicoscore en een concept-plan van aanpak van. Een veiligheidskundige beoordeelt, doet de rondgang en toetst. Elk jaar houdt een nieuwe ronde AI-voicegesprekken de RI&E actueel.

De site richt zich op twee doelgroepen: KAM-managers en preventiemedewerkers die het zelf doen, en adviesbureaus en arbodiensten die het platform inzetten voor hun klanten.

## Bron van waarheid

De map `design/` bevat het goedgekeurde ontwerp als losse HTML-pagina's. Ze openen direct in een browser.

- **Layout, kleuren, typografie en tekst** komen uit deze bestanden. Neem het ontwerp zo getrouw mogelijk over, op desktop (1440 px) en mobiel (390 px).
- **De tekst is goedgekeurd.** Herschrijf niets. Pas alleen placeholders aan (zie Open punten). Twijfel je over een tekst, laat hem staan en zet er een TODO bij.
- **Terminologie:** gebruik altijd "AI-voicegesprek" en "AI-voicegesprekken" voor de interviews op het platform.
- De inline styles in het ontwerp zijn een mockup. Zet ze om naar nette componenten en gedeelde CSS; neem geen inline styles over.

## Pagina's en routes

| Ontwerpbestand | Route | In menu | Indexeren |
| --- | --- | --- | --- |
| `design/index.html` | `/` | ja (logo) | ja |
| `design/kam-managers.html` | `/kam-managers` | ja | ja |
| `design/adviesbureaus.html` | `/adviesbureaus` | ja | ja |
| `design/partners.html` | `/partners` | **nee** | **nee** (`noindex, nofollow`, niet in sitemap) |
| nieuw | `/privacy` | alleen footer | ja |

De partnerpagina is alleen bereikbaar via een directe link die we naar bureaus sturen. Link er nergens naartoe vanuit menu of footer.

## Techniek

Kies wat bij de bestaande Helpr-stack past. Voorstel: Astro als statische site met gewone CSS, gehost op Vercel of Netlify. Er is nauwelijks client-side JavaScript nodig: de FAQ gebruikt native `<details>`, alleen de video en de formulieren hebben iets nodig.

- **Lettertypen zelf hosten** (bijvoorbeeld via `@fontsource`): Space Grotesk 500/600/700 voor koppen, Inter 400/500/600/700 voor tekst. Niet laden van Google-servers, in verband met de AVG.
- **Domeinen:** riefresh.nl is primair. riefresh.com en www verwijzen met een 301 naar https://riefresh.nl.

## Ontwerptokens

| Rol | Waarde |
| --- | --- |
| Primair donkergroen (knoppen, donkere secties) | `#10362D` |
| Groen accent (labels, links, iconen) | `#2E7D5B` |
| Limoen accent (lijnen in donkere secties, logo-icoon) | `#CFF26B` |
| Achtergrond pagina | `#F6F7F2` |
| Lichtgroen vlak | `#E4EBDF` |
| Tekst | `#0F1F1A` |
| Secundaire tekst | `#4B5852` |
| Tekst op donkergroen | `#C9D8D1` |
| Randen | `#DCE2DA` |
| Kaarten | `#FFFFFF` |

Maximale contentbreedte 1200 px met 24 px zijpadding. Knoppen zijn volledig afgerond (`border-radius: 999px`), kaarten 16 tot 28 px. Kopgroottes gebruiken `clamp()` zoals in het ontwerp.

## Componenten die je uit het ontwerp haalt

Header met navigatie, footer, primaire en secundaire knop, sectielabel (kleine hoofdletters in groen), kaart, statistiekenband, klantenbalk met logo's, prijskaarten, stappen/tijdlijn van de Microtherm-case, FAQ-item, video-blok en demoformulier.

## Functionele eisen

1. **Uitlegvideo.** Het ontwerp toont een poster die naar YouTube linkt. Bouw dit als klik-om-te-laden-embed van `https://www.youtube-nocookie.com/embed/u7Od_vE2nu4`: eerst de poster, pas na een klik het iframe. Zo worden er geen cookies geplaatst vóór de klik.
2. **Demoformulieren.** Elke pagina heeft een formulier (naam, organisatie of bureau, e-mailadres, keuzeveld). Laat ze versturen naar een e-mailadres of CRM (zie Open punten). Voeg validatie, een spamfilter (honeypot) en een bedankmelding toe. "Plan een demo"-knoppen scrollen naar `#demo`.
3. **"Probeer een AI-voicegesprek"** linkt naar de publieke demo-interviewer (placeholder `[DEMOLINK]`).
4. **Klantenbalk op de homepage.** Logo's staan in `design/assets/logos/`. Zet ze om naar WebP of SVG met vaste breedte en hoogte. Coning Adviesgroep staat er nu als tekst, omdat het logo nog ontbreekt.
5. **SEO.** Per pagina een eigen title en meta description, Open Graph-tags en een OG-afbeelding, canonical-URL's, `sitemap.xml` zonder `/partners`, en `robots.txt`. Voeg FAQPage-structured data toe voor de FAQ's, en Organization-data voor Helpr.ai.
6. **Analytics.** Cookieloos, bijvoorbeeld Plausible, zodat er geen cookiebanner nodig is. Kiezen we toch Google Analytics, dan eerst een consentbanner.
7. **Toegankelijkheid:** WCAG 2.1 AA. Zichtbare focusstijlen, een skip-link, een logische koppenvolgorde, alt-teksten bij de logo's en voldoende contrast.
8. **Prestaties.** Lighthouse mobiel 90 of hoger op alle vier de categorieën.

## Open punten

Vul deze niet zelf in. Markeer ze met `TODO` in de code en zet ze in een lijst in de pull request.

- `[DEMOLINK]`: de link naar de publieke demo-interviewer (levert Erik).
- `[PRIVACYVERKLARING]` en de inhoud van `/privacy` (levert Jorien).
- Waar de demoformulieren heen gaan: e-mailadres of CRM.
- Logo van Coning Adviesgroep.
- De KAM-prijzen (€ 395 / € 295 / € 595 / € 195) staan nog ter bevestiging bij Jaap. Zet ze in een los databestand, zodat ze makkelijk te wijzigen zijn.
- Na 8 december 2026 moet de toetsing bij Microtherm in de verleden tijd, op de homepage en de KAM-pagina, liefst met een quote van de toetser.

## Acceptatiecriteria

- Elke pagina komt visueel overeen met het ontwerp op 1440 px en 390 px. Vergelijk dat met screenshots, bijvoorbeeld via Playwright.
- Alle interne links en ankers werken, en er zijn geen 404's of consolefouten.
- `/partners` heeft `noindex` en staat niet in de sitemap.
- De video laadt pas na een klik.
- Lighthouse mobiel scoort 90 of hoger op alle categorieën.

## Werkwijze

1. Lees eerst de vier ontwerpbestanden en stel een plan voor: componenten, mappenstructuur en de keuze voor het framework.
2. Bouw de componenten en daarna de pagina's.
3. Maak screenshots naast het ontwerp en werk de verschillen weg.
4. Lever op met een lijst van de open TODO's.
