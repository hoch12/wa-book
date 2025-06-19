const characterDescriptions = {
    gatsby: {
        name: "Jay Gatsby",
        description:
            `
<div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Tajemný milionář s velkým snem a ještě větším srdcem. Jeho život je postaven na iluzích, které vytvořil, aby získal zpět lásku svého života – Daisy. Věří, že minulost se dá přepsat, pokud po tom toužíme dost silně. Je zosobněním amerického snu a zároveň jeho tragickým ztroskotáním.</p>
                </div>        
`,
        image: "img/jay_gatsby.jpg"
    },
    daisy: {
        name: "Daisy Buchananová",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Křehká a krásná žena s hlasem, který zní jako peníze. Touží být milována, ale zároveň se bojí opustit pohodlí a jistoty. Jejím světem vládne lesk, ale za úsměvem se skrývá nerozhodnost a pasivita, která zraňuje i ty, kdo ji nejvíce milují.</p>
            </div>
        `,
        image: "img/daisy_buchanan.jpg"
    },
    nick: {
        name: "Nick Carraway",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Vypravěč příběhu a muž, který se snaží pochopit svět okolo sebe. Je morálně ukotvený, ale zároveň fascinován chaosem a leskem, který ho obklopuje. Je mostem mezi realitou a iluzí – tichý pozorovatel, který v sobě skrývá víc, než dává najevo.</p>
                </div>
        `,
        image: "img/nick_carraway.jpg"
    },
    tom: {
        name: "Tom Buchanan",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Sebevědomý a privilegovaný muž, který je posedlý mocí a nadřazeností. Jeho svět je černobílý – buď vládneš, nebo jsi podřízený. Za jeho charismatem se skrývá násilí, nevěra a strach z toho, že ztratí kontrolu nad světem, který považuje za samozřejmý.</p>
                </div>
        `,
        image: "img/tom_buchanan.jpg"
    },
    jordan: {
        name: "Jordan Baker",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Moderní žena s ostrým jazykem a ještě ostřejšími lokty. Žije životem sportovkyně a nezávislé osobnosti, která odmítá společenská pravidla. Je cynická, sebevědomá a nespoutaná – přesně taková, jakou by 20. léta ve Spojených státech zbožňovala i zavrhovala.</p>
                </div>
        `,
        image: "img/jordan_baker.jpg"
    },
    wolfsheim: {
        name: "Meyer Wolfsheim",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://de.pinterest.com/pin/bollywoods-amitabh-bachchan-as-meyer-wolfsheim-in-the-great-gatsby-2013--4292562117670087/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Záhadný muž z podsvětí, který tahá za nitky v pozadí. Ztělesňuje temnou stránku amerického snu – bohatství získané nelegální cestou, věrnost starým pravidlům a svět, kde morálka nehraje roli. Je připomínkou toho, že úspěch má svou cenu.</p>
                </div>
        `,
        image: "img/meyer_wolfsheim.jpg"
    },
    george: {
        name: "George Wilson",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted">https://thegreatgatsby.fandom.com/wiki/George_Wilson</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Tichý a pracovitý muž s bolavým srdcem a prázdnou peněženkou. Jeho život je řadou nenaplněných nadějí a zoufalé touhy po pravdě. Ve světě bohatých je neviditelný – až do chvíle, kdy ztratí vše a rozhodne se vzít spravedlnost do vlastních rukou.</p>
                </div>
        `,
        image: "img/george_wilson.jpg"
    },
    myrtle: {
        name: "Myrtle Wilsonová",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <p class="mt-2"><small class="text-muted"> https://chimesnewspaper.com/22440/entertainment/great-gatsby-dramatic/</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Žena, která se snaží vymanit ze své sociální vrstvy a dosáhnout vyššího postavení – za jakoukoli cenu. Její ambice ji ženou do náruče Toma a světa, do kterého nikdy nepatřila. Její tragický osud je připomínkou toho, jak krutý dokáže být sen, když není náš.</p>
                </div>
        `,
        image: "img/myrtle_wilson.jpg"
    },
    auto: {
        name: "Luxusní vůz",
        description:
            `
            <div class="character-detail">
                <div class="text-center mb-4">
                    <img src="img/yellow_car.jpg" alt="Gatsbyho žluté auto" class="img-fluid rounded shadow" style="width: 100%; height: 300px; object-fit: cover;">
                    <p class="mt-2"><small class="text-muted">https://www.foxnews.com/auto/great-gatsbys-1928-rolls-royce-million-bucks-sale</small></p>
                </div>
                <h6>Charakteristika:</h6>
                <p>Zářivý symbol bohatství, rychlosti a moci. Žlutý automobil Gatsbyho není jen dopravním prostředkem – je to metafora pro americký sen, který se žene kupředu, nerespektuje pravidla a nakonec ničí vše, co mu stojí v cestě.</p>
                </div>
        `,
        image: "img/yellow_car.jpg"
    }
};


// Zpracování odeslání formuláře
const form = document.getElementById("quizForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const counts = {};

    for (let value of formData.values()) {
        counts[value] = (counts[value] || 0) + 1;
    }

    let topCharacter = null;
    let maxCount = 0;

    for (let [key, value] of Object.entries(counts)) {
        if (value > maxCount) {
            topCharacter = key;
            maxCount = value;
        }
    }

    showResult(topCharacter);
});

function showResult(characterKey) {
    const resultDiv = document.getElementById("result");
    const character = characterDescriptions[characterKey];

    if (!character) {
        resultDiv.innerHTML = `<div class="alert alert-warning">Výsledek nelze určit. Zkus to prosím znovu.</div>`;
        return;
    }

    resultDiv.innerHTML = `
    <div class="card character-detail shadow-lg border-0 mt-4">
      <div class="card-body text-center p-5">
        <h2 class="mb-4">Jsi jako <strong>${character.name}</strong></h2>
        <img src="${character.image}" alt="${character.name}" class="img-fluid rounded mb-4">
        <p class="lead">${character.description}</p>
      </div>
    </div>
  `;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}