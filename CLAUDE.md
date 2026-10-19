# Zvídavě.cz – pokyny pro Claude Code

Zvídavě.cz jsou malé výukové hry pro 1. stupeň ZŠ. Web i hry dělá Baru (Barbora Hlinková), učitelka informatiky a matematiky a grafická designérka. Web běží na doméně zvidave.cz (soubor `CNAME`), je statický – žádný build, žádný framework.

## Větev `redesign/uklizena-s-charakterem`

Tahle větev obsahuje nový vzhled úvodní stránky („Uklizená s charakterem“) ve čtyřech jazycích. Vznikl na plátně v Claude Design a pak byl převeden do čistého HTML/CSS/JS. Než se sloučí do hlavní větve, je potřeba projít otevřené úkoly níže.

### Struktura

```
cs/index.html      úvodní stránka – čeština (zdrojová verze)
en/index.html      angličtina (britská)
fr/index.html      francouzština
uk/index.html      ukrajinština (načítá navíc assets/css/azbuka.css)
cs/hry/vrstvicka.html   hra Vrstvička (samostatná, jen česky – nová stránka ji nemění)
assets/css/zvidave.css  styly nové stránky; písma Baloo 2 a Nunito jsou vložená v base64 (latinka + čeština)
assets/css/azbuka.css   Nunito s azbukou; v ukrajinské verzi jsou nadpisy v Nunitu, protože Baloo 2 azbuku nemá
assets/js/zvidave.js    mobilní menu, lepivá lišta se stínem, let vlaštovky v logu, lodička v patičce, minihra „součet 10“
assets/img/             ilustrace (WebP) a textura papíru
```

Starší soubory `assets/css/main.css`, `bold.css`, `assets/js/main.js`, `bold.js` a složka `redesign/` patří předchozí verzi webu. Nová stránka je nepoužívá; smazat je až po sloučení a kontrole.

### Pravidla pro úpravy

- **Každá změna textu nebo struktury se dělá ve všech čtyřech jazycích.** Zdrojem je čeština.
- Minihra bere texty ze slovníku `TEXTY` v `zvidave.js` podle `<html lang>`.
- Čeština: spisovně, první osoba, ženský rod („vyzkoušela“). Návštěvníky oslovovat „vy“, děti v minihře „ty“. Oslovovat učitelky i učitele, ne jen generické maskulinum.
- Texty nesmí znít jako od AI: žádná hesla a úderné jednověté pointy, žádné trojice do rytmu, žádné dramatické dvojtečky, žádné marketingové sliby. Raději jednoduše a věcně jako dobrý vzdělávací web (NPI, RVP.CZ).
- Typografie: pomlčka je vždy n-dash (–), nikdy em-dash (—). V češtině nezlomitelná mezera za jednopísmennými předložkami a spojkami (v, k, s, z, o, u, a, i) a mezi číslem a jednotkou. Ve francouzštině nezlomitelná mezera před ? ! : ;. V ukrajinštině apostrof ’.
- Hry ani web nesbírají data o dětech. Nepřidávat analytiku, sledovací pixely ani formuláře sbírající e-maily bez výslovného souhlasu Baru (newsletter byl zvažován a odložen).
- Žádné body, žebříčky, časomíra, konfety ani blikající odměny – viz zásady v sekci O projektu.

### Design systém

- Barvy: zelená `#036766`, tmavá zelená `#014D4C`, světle mátová `#E3F2EF`, mátová `#80C9C1`, růžová `#FAA2AC`, světle růžová `#FDE3E6`, okrová `#BC8227`, světle okrová `#F5E6CC`, inkoust `#12403F`, tlumený text `#4C6B69`, papír `#F9F7F0`, linka `#E6E0D2`, krémová `#FDF8F1`.
- Písmo: Baloo 2 700 na nadpisy, Nunito 400/600/700 na text.
- Velikosti písma 14/17/20/28/40/64, mezery po 8 (8/16/24/32/48/96), zaoblení 12/24/40.
- Pozadí je textura papíru (`assets/img/papir.jpg`). Logo je převedené na křivky; vlaštovka nad „í“ na kliknutí obletí logo, lodička v patičce na kliknutí přepluje. Obě animace nejdou přerušit a respektují `prefers-reduced-motion`.
- Maskoti: oranžová liška, plameňák, koala.

### Otevřené úkoly

1. **Blog** – karta článku má zástupné texty (`[datum]`, `[Název článku]`, perex, `href="#"`). Hledej komentář `BLOG` ve všech čtyřech souborech. Články budou nejspíš jen česky – u cizích jazyků to pak napsat.
2. **Kontaktní e-mail** – teď je tam školní adresa. Zvážit vlastní adresu projektu.
3. **Ověřit tvrzení na stránce:** zda hry opravdu fungují na interaktivní tabuli a zda Badatelský deník už existuje.
4. **Cizí jazyky:** hry jsou zatím jen česky (u Vrstvičky je štítek „in Czech“ apod., Listy mají větu, že texty jsou česky). Kontakt slibuje odpověď česky nebo anglicky – nechat Baru potvrdit.
5. **Kořenový `index.html`** zůstal původní (přesměrování podle jazyka prohlížeče) – zkontrolovat, že vede na nové stránky.
6. **Safari** zatím nikdo neotestoval; Chromium na desktopu i mobilu je v pořádku (bez chyb v konzoli, bez vodorovného posunu).
7. Před sloučením smazat nepoužívané starší soubory (viz Struktura).

### Jak testovat

Stačí otevřít `cs/index.html` v prohlížeči (funguje i z disku). Zkontrolovat šířky 390, 768 a 1440 px, klávesnicovou navigaci (viditelný fokus), přepínač jazyků a minihru ve všech jazycích.
