
/* COLECCIÓN POKÉMON TCG */

/* Primeras cartas de Prismatic Evolutions */



/* CATÁLOGO PRISMATIC EVOLUTIONS - INGLÉS */


/* CARGAR CATÁLOGO PRISMATIC EVOLUTIONS - INGLÉS */

const cards = prismaticEnglishCards;

/* IDENTIFICADOR DE LA COLECCIÓN */

const collectionKey = "pokemon-prismatic-en";

/* RECUPERAR CARTAS GUARDADAS */

let ownedCards = JSON.parse(
    localStorage.getItem(collectionKey) || "[]"
);

/* ELEMENTOS DE LA PÁGINA */

const gallery = document.getElementById("cardGallery");

/* FILTRO ACTUAL */

let currentFilter = "all";

/* BUSCADOR DE CARTAS */

let searchTerm = "";

const cardSearch = document.getElementById("cardSearch");

cardSearch.addEventListener("input", () => {

    searchTerm = cardSearch.value.toLowerCase().trim();

    renderCards();

});

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderCards();
    });

});
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

/* MOSTRAR CARTAS */


/* MOSTRAR Y FILTRAR CARTAS */

function renderCards() {

    gallery.innerHTML = "";

    // Filtrar las cartas

   
const filteredCards = cards.filter(card => {

    const isOwned = ownedCards.includes(card.number);

    // Buscar por nombre o número

    const matchesSearch =
        card.name.toLowerCase().includes(searchTerm) ||
        card.number.includes(searchTerm);

    // Filtrar por estado de colección

    let matchesFilter = true;

    if (currentFilter === "owned") {
        matchesFilter = isOwned;
    }

    if (currentFilter === "missing") {
        matchesFilter = !isOwned;
    }

    return matchesSearch && matchesFilter;

});


    // Mostrar las cartas filtradas

    filteredCards.forEach(card => {

        const isOwned = ownedCards.includes(card.number);

        const cardElement = document.createElement("div");

        cardElement.className = "pokemon-card";

        cardElement.innerHTML = `
            <img
                src="${card.image}"
                alt="${card.name}"
                loading="lazy"
            >

            <h3>${card.name}</h3>

            <p>#${card.number}</p>

            <label class="card-owned">
                <input
                    type="checkbox"
                    ${isOwned ? "checked" : ""}
                >
                I have this card
            </label>
        `;

        // Abrir carta en grande

        const cardImage = cardElement.querySelector("img");

        cardImage.addEventListener("click", () => {
            openCard(card);
        });

        // Marcar o desmarcar carta

        const checkbox = cardElement.querySelector(
            'input[type="checkbox"]'
        );

        checkbox.addEventListener("change", () => {
            toggleCard(card.number);
        });

        gallery.appendChild(cardElement);

    });

    // Actualizar contador y progreso

    updateProgress();
}


/* MARCAR O DESMARCAR CARTAS */

function toggleCard(number) {

    if (ownedCards.includes(number)) {

        ownedCards = ownedCards.filter(
            cardNumber => cardNumber !== number
        );

    } else {

        ownedCards.push(number);

    }

    localStorage.setItem(
        collectionKey,
        JSON.stringify(ownedCards)
    );

    updateProgress();
}

/* ACTUALIZAR PROGRESO */

function updateProgress() {

    const collected = cards.filter(
        card => ownedCards.includes(card.number)
    ).length;

    const total = cards.length;

    const percentage = total > 0
        ? (collected / total) * 100
        : 0;

    progressText.textContent =
        `${collected} / ${total} cards collected`;

    progressFill.style.width = `${percentage}%`;
}

/* INICIAR APLICACIÓN */

renderCards();

/* VISOR INTERACTIVO DE CARTAS */

const cardModal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalCardName = document.getElementById("modalCardName");
const closeModal = document.getElementById("closeModal");
const modalCard = document.querySelector(".modal-card");

/* ABRIR CARTA */



function openCard(card) {

    modalImage.src = card.image;
    modalImage.alt = card.name;

    modalCardName.textContent =
        `${card.name} #${card.number}`;

    // Limpiar efectos anteriores
    modalCard.classList.remove(
    "is-holo",
    "is-gold",
    "is-special"
);

    
if (
    card.rarityEffect === "gold" ||
    card.holoType === "gold"
) {
    modalCard.classList.add("is-gold");

} else if (
    card.rarityEffect === "specialIllustration"
) {
    modalCard.classList.add("is-special");
console.log("EFECTO ESPECIAL ACTIVADO:", card.name, card.number);
} else if (
    card.rarityEffect === "ex" ||
card.rarityEffect === "ultraRare" ||
card.holo === true
) {
    modalCard.classList.add("is-holo");
}


    // Restablecer inclinación y brillo
    modalCard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

    modalCard.style.setProperty("--mouse-x", "50%");
    modalCard.style.setProperty("--mouse-y", "50%");

    // Abrir visor
    cardModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* CERRAR CARTA */

function closeCard() {

    cardModal.classList.remove("active");

    modalCard.style.transform = "";

    document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeCard);

/* CERRAR AL HACER CLIC FUERA */

cardModal.addEventListener("click", (event) => {

    if (event.target === cardModal) {
        closeCard();
    }

});

/* CERRAR CON ESCAPE */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeCard();
    }

});


/* EFECTO DE INCLINACIÓN 3D Y BRILLO */

modalCard.addEventListener("mousemove", (event) => {

    const rect = modalCard.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calcular inclinación de la carta

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    // Calcular posición del reflejo

    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    // Actualizar brillo holográfico

    modalCard.style.setProperty(
        "--mouse-x",
        `${mouseX}%`
    );

    modalCard.style.setProperty(
        "--mouse-y",
        `${mouseY}%`
    );

    // Aplicar movimiento 3D

    modalCard.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

}); // CIERRE DEL EVENTO MOUSEMOVE


/* RESTABLECER POSICIÓN */

modalCard.addEventListener("mouseleave", () => {

    modalCard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

});

/* ==========================================
   MOVIMIENTO 3D TÁCTIL PARA CELULARES
========================================== */

modalCard.addEventListener("touchmove", (event) => {

    if (event.touches.length !== 1) return;

    const touch = event.touches[0];
    const rect = modalCard.getBoundingClientRect();

    const x = Math.max(
        0,
        Math.min(touch.clientX - rect.left, rect.width)
    );

    const y = Math.max(
        0,
        Math.min(touch.clientY - rect.top, rect.height)
    );

    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    modalCard.style.setProperty("--mouse-x", `${mouseX}%`);
    modalCard.style.setProperty("--mouse-y", `${mouseY}%`);

    modalCard.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

}, { passive: true });


/* RESTABLECER CARTA AL RETIRAR EL DEDO */

function resetTouchCard() {

    modalCard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";

    modalCard.style.setProperty("--mouse-x", "50%");
    modalCard.style.setProperty("--mouse-y", "50%");
}

modalCard.addEventListener("touchend", resetTouchCard);
modalCard.addEventListener("touchcancel", resetTouchCard);

/* =====================================
   COLECCIÓN ADICIONAL - INGLÉS
===================================== */

const extraCollectionKey = "pokemon-prismatic-extras-en";

let ownedExtraCards = JSON.parse(
    localStorage.getItem(extraCollectionKey) || "[]"
);

const extraGallery = document.getElementById(
    "extraCardGallery"
);

const extraProgressText = document.getElementById(
    "extraProgressText"
);

const extraProgressFill = document.getElementById(
    "extraProgressFill"
);

/* MOSTRAR CARTAS ADICIONALES */

/* =====================================
   BUSCADOR Y FILTROS ADICIONALES
===================================== */

let extraSearchTerm = "";
let extraCurrentFilter = "all";

const extraCardSearch =
    document.getElementById("extraCardSearch");

const extraFilterButtons =
    document.querySelectorAll(".extra-filter-btn");

// BUSCAR POR NOMBRE O NÚMERO

extraCardSearch.addEventListener("input", () => {

    extraSearchTerm =
        extraCardSearch.value.toLowerCase().trim();

    renderExtraCards();
});

// FILTRAR POR ESTADO

extraFilterButtons.forEach(button => {

    button.addEventListener("click", () => {

        extraCurrentFilter = button.dataset.filter;

        extraFilterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderExtraCards();
    });

});


function renderExtraCards() {

    extraGallery.innerHTML = "";

    const filteredExtraCards = prismaticExtraCards.filter(card => {

        // BUSCAR POR NOMBRE O NÚMERO

        const matchesSearch =
            card.name.toLowerCase().includes(extraSearchTerm) ||
            String(card.number).includes(extraSearchTerm);

        // COMPROBAR SI TENEMOS LA CARTA

        const isOwned = ownedExtraCards.includes(card.id);

        // FILTRAR POR ESTADO

        let matchesFilter = true;

        if (extraCurrentFilter === "owned") {
            matchesFilter = isOwned;
        }

        if (extraCurrentFilter === "missing") {
            matchesFilter = !isOwned;
        }

        return matchesSearch && matchesFilter;

    });

    // MOSTRAR CARTAS FILTRADAS

    filteredExtraCards.forEach(card => {

        const isOwned = ownedExtraCards.includes(card.id);

        const cardElement = document.createElement("div");

        cardElement.className = "extra-card";

        cardElement.innerHTML = `
            <span class="extra-badge">ADDITIONAL</span>

            <img
                src="${card.image}"
                alt="${card.name}"
                loading="lazy"
            >

            <h3>${card.name}</h3>

            <p>#${card.number}</p>

            <label>
                <input type="checkbox"
                    ${isOwned ? "checked" : ""}>
                I have this card
            </label>
        `;

        // ABRIR CARTA CON EFECTO 3D

        cardElement.querySelector("img")
            .addEventListener("click", () => {
                openCard(card);
            });

        // GUARDAR SELECCIÓN

        cardElement.querySelector("input")
            .addEventListener("change", () => {
                toggleExtraCard(card.id);
            });

        extraGallery.appendChild(cardElement);

    });

    // MENSAJE SI NO EXISTEN RESULTADOS

    if (filteredExtraCards.length === 0) {

        extraGallery.innerHTML = `
            <p class="extra-no-results">
                No cards found.
            </p>
        `;
    }

    updateExtraProgress();
}

/* MARCAR O DESMARCAR */

function toggleExtraCard(id) {

    if (ownedExtraCards.includes(id)) {

        ownedExtraCards = ownedExtraCards.filter(
            cardId => cardId !== id
        );

    } else {

        ownedExtraCards.push(id);

    }

    localStorage.setItem(
        extraCollectionKey,
        JSON.stringify(ownedExtraCards)
    );

    renderExtraCards();
}

/* ACTUALIZAR PROGRESO */

function updateExtraProgress() {

    const total = prismaticExtraCards.length;

    const collected = prismaticExtraCards.filter(
        card => ownedExtraCards.includes(card.id)
    ).length;

    const percentage = total > 0
        ? (collected / total) * 100
        : 0;

    extraProgressText.textContent =
        `${collected} / ${total} cards collected`;

    extraProgressFill.style.width =
        `${percentage}%`;
}

/* INICIAR COLECCIÓN ADICIONAL */

renderExtraCards();

/* INICIAR COLECCIÓN ADICIONAL */

renderExtraCards();



/* ==========================================
   SELECTOR AUTOMÁTICO DE EXPANSIONES
========================================== */

const expansionOptions =
    document.getElementById("expansionOptions");

if (expansionOptions && typeof pokemonExpansions !== "undefined") {

    expansionOptions.innerHTML = "";

    pokemonExpansions.forEach((expansion) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "expansion-option";
        button.textContent = expansion.available
    ? expansion.name
    : `${expansion.name} 🔒`;

        if (expansion.id === "prismatic-evolutions") {
            button.classList.add("active");
            button.id = "prismaticExpansionBtn";
        }

        if (!expansion.available) {
            button.disabled = true;
        }

        button.addEventListener("click", () => {

            const section =
                document.getElementById(expansion.id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

        expansionOptions.appendChild(button);

    });

}

/* ==========================================
   EXPORTAR PROGRESO DE COLECCIONES
========================================== */

const exportProgressBtn =
    document.getElementById("exportProgressBtn");

if (exportProgressBtn) {

    exportProgressBtn.addEventListener("click", () => {

        // Recuperar el progreso guardado
        const backupData = {
            version: 1,
            exportDate: new Date().toISOString(),

            collections: {
                "pokemon-prismatic-en":
                    JSON.parse(
                        localStorage.getItem("pokemon-prismatic-en") || "[]"
                    ),

                "pokemon-prismatic-extras-en":
                    JSON.parse(
                        localStorage.getItem("pokemon-prismatic-extras-en") || "[]"
                    )
            }
        };

        // Convertir los datos en un archivo JSON
        const json = JSON.stringify(backupData, null, 2);

        const blob = new Blob([json], {
            type: "application/json"
        });

        const url = URL.createObjectURL(blob);

        // Crear un enlace temporal para descargar
        const link = document.createElement("a");

        link.href = url;
        link.download = "pokemon-collection-backup.json";

        document.body.appendChild(link);
        link.click();
        link.remove();

        // Liberar el enlace temporal
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);

    });

}

/* ==========================================
   IMPORTAR PROGRESO DE COLECCIONES
========================================== */

const importProgressBtn =
    document.getElementById("importProgressBtn");

const importProgressFile =
    document.getElementById("importProgressFile");

if (importProgressBtn && importProgressFile) {

    importProgressBtn.addEventListener("click", () => {
        importProgressFile.click();
    });

    importProgressFile.addEventListener("change", async () => {

        const file = importProgressFile.files[0];

        if (!file) return;

        try {

            // Leer el archivo seleccionado
            const text = await file.text();
            const backup = JSON.parse(text);

            const mainKey = "pokemon-prismatic-en";
            const extraKey = "pokemon-prismatic-extras-en";

            // Comprobar la estructura del respaldo
            if (
                backup === null ||
                typeof backup !== "object" ||
                Array.isArray(backup) ||
                backup.version !== 1 ||
                !backup.collections ||
                typeof backup.collections !== "object"
            ) {
                throw new Error("Formato de respaldo no válido.");
            }

            const mainCards = backup.collections[mainKey];
            const extraCards = backup.collections[extraKey];

            // Comprobar los identificadores de las cartas
            const validMain = Array.isArray(mainCards) &&
                mainCards.length <= 180 &&
                mainCards.every(id =>
                    typeof id === "string" &&
                    /^\d{3}$/.test(id) &&
                    Number(id) >= 1 &&
                    Number(id) <= 180
                ) &&
                new Set(mainCards).size === mainCards.length;

            const validExtra = Array.isArray(extraCards) &&
                extraCards.length <= 10 &&
                extraCards.every(id =>
                    typeof id === "string" &&
                    /^extra-(16[7-9]|17[0-6])$/.test(id)
                ) &&
                new Set(extraCards).size === extraCards.length;

            if (!validMain || !validExtra) {
                throw new Error(
                    "El archivo contiene cartas o identificadores no válidos."
                );
            }

            // Confirmar antes de reemplazar el progreso
            const confirmed = confirm(
                "Se reemplazará el progreso actual por el del archivo.\n\n" +
                `Cartas principales: ${mainCards.length}\n` +
                `Cartas adicionales: ${extraCards.length}\n\n` +
                "¿Deseas continuar?"
            );

            if (!confirmed) return;

            // Guardar los nuevos datos
            const previousMain = localStorage.getItem(mainKey);
            const previousExtra = localStorage.getItem(extraKey);

            try {
                localStorage.setItem(mainKey, JSON.stringify(mainCards));
                localStorage.setItem(extraKey, JSON.stringify(extraCards));
            } catch (storageError) {

                // Restaurar los datos anteriores si falla el guardado
                if (previousMain === null) {
                    localStorage.removeItem(mainKey);
                } else {
                    localStorage.setItem(mainKey, previousMain);
                }

                if (previousExtra === null) {
                    localStorage.removeItem(extraKey);
                } else {
                    localStorage.setItem(extraKey, previousExtra);
                }

                throw storageError;
            }

            alert(
                "¡Progreso importado correctamente!\n" +
                "La página se actualizará."
            );

            location.reload();

        } catch (error) {

            alert("No se pudo importar el archivo: " + error.message);

        } finally {

            importProgressFile.value = "";

        }

    });

}
