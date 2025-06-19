// Plynulé přecházení k sekcím při kliknutí na navigaci
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Zobrazení/skrytí detailů příběhu
function toggleStoryDetails() {
    const details = document.getElementById('storyDetails');
    const button = event.target;

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.innerHTML = '<i class="fas fa-minus me-2"></i>Méně detailů';
    } else {
        details.style.display = 'none';
        button.innerHTML = '<i class="fas fa-plus me-2"></i>Více detailů';
    }
}

// Rozšířené informace o postavách s fotografiemi
const characters = {
    gatsby: {
        name: 'Jay Gatsby (James Gatz)',
        image: 'img/jay_gatsby.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/jay_gatsby.jpg" alt="Jay Gatsby" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Osobnost a pozadí:</h6>
                <p>Gatsby je ústřední postavou románu - záhadný milionář, který se ve skutečnosti jmenuje James Gatz a pochází z chudé farmářské rodiny v Severní Dakotě. V 17 letech změnil své jméno a vytvořil si novou identitu, když potkal bohatého jachtaře Dana Codyho.</p>
                
                <h6>Motivace a obsese:</h6>
                <p>Celý jeho život je zaměřen na jediný cíl - získat zpět lásku Daisy Buchananové, kterou potkal jako mladý důstojník před odchodem do války. Pořádá velkolepé večírky v naději, že ji přiláká do svého domu na Long Islandu.</p>
                
                <h6>Symbolika:</h6>
                <p>Představuje americký sen v jeho nejčistší i nejzkreslenější podobě. Jeho touha po přeměně a novém začátku odráží typicky americkou víru v možnost reinvence vlastní identity.</p>
                
                <h6>Tragický konec:</h6>
                <p>Gatsby je zastřelen Georgem Wilsonem, který se mylně domnívá, že Gatsby zabil jeho ženu Myrtle. Ve skutečnosti řídila auto Daisy.</p>
            </div>
        `
    },
    daisy: {
        name: 'Daisy Buchanan',
        image: 'img/daisy_buchanan.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/daisy_buchanan.jpg" alt="Daisy Buchanan" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Daisy je krásná, okouzlující, ale také povrchní žena z bohaté společnosti. Je vdaná za Toma Buchanana a má s ním dceru. Její hlas je popisován jako "plný peněz", což symbolizuje její spojení s bohatstvím.</p>
                
                <h6>Vztah s Gatsbym:</h6>
                <p>Před pěti lety byla Gatsbyho láskou, ale provdala se za Toma kvůli jeho bohatství a společenskému postavení. Když se s Gatsbym opět setká, obnoví jejich vztah, ale nakonec se rozhodne zůstat se svým manželem.</p>
                
                <h6>Morální slabost:</h6>
                <p>Daisy představuje morální úpadek vyšší třídy. I když řídí auto, které zabije Myrtle Wilson, nechá Gatsbyho nést vinu a uprchne s Tomem.</p>
                
                <h6>Symbolika:</h6>
                <p>Ztělesňuje nedosažitelný americký sen - krásná, ale dutá; žádoucí, ale nakonec zklamávající. Je symbolem zlatého věku, který je na povrchu nádherný, ale uvnitř prázdný.</p>
            </div>
        `
    },
    nick: {
        name: 'Nick Carraway',
        image: 'img/nick_carraway.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/nick_carraway.jpg" alt="Nick Carraway" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Role vypravěče:</h6>
                <p>Nick je vypravěčem celého příběhu a jedinečným pozorovatelem událostí. Přestěhoval se na východ, do West Eggu na Long Island, kde se stal Gatsbyho sousedem a svědkem jeho tragického příběhu.</p>
                
                <h6>Rodinné vazby:</h6>
                <p>Je bratrancem Daisy Buchananové, což mu umožňuje být mostem mezi Gatsbym a předmětem jeho touhy. Pochází ze střední třídy z Středozápadu.</p>
                
                <h6>Morální kompas:</h6>
                <p>I když se zpočátku jeví jako neutrální pozorovatel, postupně se stává Gatsbyho spojencem a jediným skutečným přítelem. Na konci příběhu je zhnusen korupcí a povrchností východního pobřeží.</p>
                
                <h6>Vývoj postavy:</h6>
                <p>Během příběhu prochází Nick morálním probuzením. Původně je fascinován bohatstvím a glamourem, ale nakonec odsuzuje prázdnotu a bezohlednost bohaté společnosti.</p>
            </div>
        `
    },
    tom: {
        name: 'Tom Buchanan',
        image: 'img/tom_buchanan.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/tom_buchanan.jpg" alt="Tom Buchanan" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Tom je bohatý, arogantní a rasisticky smýšlející muž z established society. Je atleticky stavěný (bývalý hráč amerického fotbalu z Yale) a používá svou fyzickou sílu k zastrašování.</p>
                
                <h6>Mimomanželský vztah:</h6>
                <p>Má poměr s Myrtle Wilson, manželkou chudého mechanika. Tento vztah odhaluje jeho pokrytectví - odsuzuje Daisy za její vztah s Gatsbym, zatímco sám je nevěrný.</p>
                
                <h6>Třídní předsudky:</h6>
                <p>Představuje starý americký majetek a aristokracii. Pohrdá "novými boháči" jako Gatsby a považuje se za jejich nadřazeného kvůli svému původu.</p>
                
                <h6>Destruktivní síla:</h6>
                <p>Tom je nakonec zodpovědný za Gatsbyho smrt - řekne Georgi Wilsonovi, že Gatsby řídil auto, které zabil jeho ženu, ačkoli věděl, že to nebyla pravda.</p>
            </div>
        `
    },
    myrtle: {
        name: 'Myrtle Wilson',
        image: 'img/myrtle_wilson.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/myrtle_wilson.jpg" alt="Myrtle Wilson" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted"> https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Sociální postavení:</h6>
                <p>Myrtle je manželkou Georga Wilsona, chudého mechanika z Valley of Ashes. Touží po lepším životě a vyšším společenském postavení, které jí Tom Buchanan zdánlivě nabízí.</p>
                
                <h6>Milostný vztah:</h6>
                <p>Má tajný poměr s Tomem Buchananem, který pro ni představuje cestu k bohatství a společenskému vzestupu. Tom si pro ni pronajímá byt v New Yorku.</p>
                
                <h6>Iluze a sebeklam:</h6>
                <p>Myrtle se v přítomnosti Toma chová jako příslušník vyšší třídy, mění svůj accent a oblečení. Věří, že Tom opustí svou ženu a ožení se s ní.</p>
                
                <h6>Tragická smrt:</h6>
                <p>Je sražena Gatsbyho autem (které řídí Daisy), když se pokouší zastavit vozidlo v domnění, že v něm sedí Tom. Její smrt spouští řetězec událostí vedoucích k Gatsbyho smrti.</p>
            </div>
        `
    },
    george: {
        name: 'George Wilson',
        image: 'img/george_wilson.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/george_wilson.jpg" alt="George Wilson" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://thegreatgatsby.fandom.com/wiki/George_Wilson</small></p>
                </div>
                <h6>Životní situace:</h6>
                <p>George je chudý mechanik, majitel garáže v Valley of Ashes - symbolické pustině mezi West Eggem a New Yorkem. Je to slabý, vyčerpaný muž, který těžce pracuje, ale nikdy nedosáhne prosperity.</p>
                
                <h6>Manželství:</h6>
                <p>Je ženatý s Myrtle, ale netuší o jejím poměru s Tomem Buchananem. Miluje svou ženu a plánuje s ní odjet na západ pro nový začátek.</p>
                
                <h6>Zjištění nevěry:</h6>
                <p>Krátce před Myrtlinou smrtí objevuje, že má milenka (neví však kdo to je). Toto odhalení ho zdrcuje a připravuje půdu pro následnou tragédii.</p>
                
                <h6>Pomsta:</h6>
                <p>Po smrti své ženy se stává nástrojem pomsty. Tom mu řekne, že Gatsby řídil auto, které Myrtle zabilo, což vede k Wilsonovu rozhodnutí Gatsbyho zastřelit a pak spáchat sebevraždu.</p>
            </div>
        `
    },
    jordan: {
        name: 'Jordan Baker',
        image: 'img/jordan_baker.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/jordan_baker.jpg" alt="Jordan Baker" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Profese a charakter:</h6>
                <p>Jordan je profesionální golfistka a Daisyina nejlepší přítelkyně. Je to nezávislá, cynická žena, která ztělesňuje "novou ženu" dvacátých let - sebejistou a emancipovanou.</p>
                
                <h6>Vztah s Nickem:</h6>
                <p>Má krátký romantický vztah s Nickem Carrawayem. Nick ji zpočátku obdivuje pro její sebejistotu, ale postupně je znechucen její lhostejností k pravdě a morálce.</p>
                
                <h6>Morální problematika:</h6>
                <p>Je obviňována z podvádění během golfového turnaje, což odráží obecnou morální zkaženost bohaté společnosti. Je nečestná nejen ve sportu, ale i v osobních vztazích.</p>
                
                <h6>Symbolická role:</h6>
                <p>Představuje povrchnost a moral­ní prázdnotu "zlatých dvacátých let". Její lhostejnost k následkům svých činů odráží obecnou bezcitnost vyšší třídy.</p>
            </div>
        `
    },
    wolfsheim: {
        name: 'Meyer Wolfsheim',
        image: 'img/meyer_wolfsheim.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/meyer_wolfsheim.jpg" alt="Meyer Wolfsheim" class="img-fluid rounded shadow" style="max-width: 300px; height: 400px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://de.pinterest.com/pin/bollywoods-amitabh-bachchan-as-meyer-wolfsheim-in-the-great-gatsby-2013--4292562117670087/</small></p>
                </div>
                <h6>Obchodní partner:</h6>
                <p>Wolfsheim je Gatsbyho tajemný obchodní partner a mentor, který mu pomohl získat bohatství prostřednictvím pochybných obchodů. Je založen na skutečné osobě Arnolda Rothsteina.</p>
                
                <h6>Kriminální pozadí:</h6>
                <p>Je obviňován z manipulace s World Series v roce 1919, což bylo jedno z největších sportovních skandálů v americké historii. Představuje organizovaný zločin a korupci.</p>
                
                <h6>Vztah k Gatsbymu:</h6>
                <p>Ačkoli Gatsby považuje Wolfshiema za přítele, Wolfsheim ho po smrti opustí a odmítne se zúčastnit pohřbu, což ukazuje povrchnost jejich vztahu.</p>
                
                <h6>Symbolika:</h6>
                <p>Ztělesňuje temnou stranu amerického snu - úspěch dosažený nezákonnou cestou. Jeho přítomnost v příběhu naznačuje, že Gatsbyho bohatství není tak čisté, jak se může zdát.</p>
            </div>
        `
    },
    car: {
        name: 'Gatsbyho žluté auto',
        image: 'img/yellow_car.jpg',
        info: `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/yellow_car.jpg" alt="Gatsbyho žluté auto" class="img-fluid rounded shadow" style="width: 100%; height: 300px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://www.foxnews.com/auto/great-gatsbys-1928-rolls-royce-million-bucks-sale</small></p>
                </div>
                <h6>Popis vozidla:</h6>
                <p>Gatsbyho auto je luxusní žlutý Rolls-Royce, který symbolizuje jeho bohatství a extravaganci. Je to "circus wagon" - okázalé a nápadné vozidlo, které odráží Gatsbyho snahu zapůsobit.</p>
                
                <h6>Symbol bohatství:</h6>
                <p>Auto představuje materiální úspěch a americký sen. Jeho žlutá barva (často spojovaná se zlatem) symbolizuje bohatství, ale také varování před nebezpečím.</p>
                
                <h6>Nástroj tragédie:</h6>
                <p>Stává se zbraněm smrti, když Daisy za volantem srazí Myrtle Wilson. Tato událost spouští řetězec událostí vedoucích k Gatsbyho smrti.</p>
                
                <h6>Morální symbolika:</h6>
                <p>Auto představuje, jak může materiální úspěch vést ke zkáze. Je to symbol toho, jak bohatství a moc mohou být destruktivní, pokud nejsou spojeny s morální odpovědností.</p>
            </div>
        `
    }
};

// Zobrazení informací o postavě
function showCharacterDetails(characterId) {
    const character = characters[characterId];
    if (character) {
        document.getElementById('characterModalTitle').textContent = character.name;
        document.getElementById('characterModalBody').innerHTML = character.info;

        // Zobrazení modálního okna
        const modal = new bootstrap.Modal(document.getElementById('characterModal'));
        modal.show();
    }
}

function updateStars(value) {
    const ratingValue = document.getElementById('ratingValue');
    const starDisplay = document.getElementById('starDisplay');

    ratingValue.textContent = value;

    let stars = '';
    for (let i = 0; i < value; i++) {
        stars += '⭐';
    }
    starDisplay.textContent = stars;
}


// Odeslání formuláře s reflexí
document.getElementById('reflectionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const reflection = document.getElementById('userReflection').value;
    const rating = document.getElementById('ratingRange').value;

    // Zobrazení zprávy uživateli
    alert('Děkujeme, ' + name + '! Vaše reflexe byla odeslána.\nHodnocení: ' + rating + ' hvězd');

    // Vymazání formuláře
    document.getElementById('userName').value = '';
    document.getElementById('userReflection').value = '';
    document.getElementById('ratingRange').value = '3';
    updateStars(3);

});

// Odeslání kontaktního formuláře
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Zobrazení zprávy uživateli
    alert('Děkujeme, ' + name + '! Vaše zpráva byla odeslána. Brzy se vám ozveme na ' + email + '.');

    // Vymazání formuláře
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
});

// Speciální efekt při dvojkliku na obrázek knihy
document.querySelector('.book-image-container').addEventListener('dblclick', function() {
    alert('🍾 Vítejte na večírku! I Gatsby by zvedl sklenku na váš objev.');
});