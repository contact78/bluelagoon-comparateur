// Données centralisées
const allSpasData = {
  "mono": [
    { "id": "swim23s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/acapulco2.webp", "title": "Swim 23S", "collection": "Mono", "collectionClass": "swim", "link": "#", "specs": { "Dimensions": "460 × 228 × 134 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "24 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 3,00 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Sièges confort, LED" } },
    { "id": "swim22s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22.webp", "title": "Swim 22S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim22-22s", "specs": { "Dimensions": "398 × 230 × 155 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "45 jets", "Hauteur de Nage": "155 cm", "Consommation Moyenne": "≈ 2,50 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Jets réglables, Éclairage" } },
    { "id": "classico", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/classico.webp", "title": "Classico", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-classico", "specs": { "Dimensions": "530 × 230 × 163 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "36 jets", "Hauteur de Nage": "135 cm", "Consommation Moyenne": "≈ 3,10 € / séance", "Caractéristiques Principales": "Système de nage, Sièges ergonomiques, LED multicolore" } },
    { "id": "swim24s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim24s.webp", "title": "Swim 24S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim24s", "specs": { "Dimensions": "580 × 230 × 155 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "49 jets", "Hauteur de Nage": "135 cm", "Consommation Moyenne": "≈ 3,40 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Zone détente, Chromothérapie" } },
    { "id": "swim22", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22.webp", "title": "Swim 22", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim22-22s", "specs": { "Dimensions": "398 × 230 × 116 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "45 jets", "Hauteur de Nage": "120 cm", "Consommation Moyenne": "≈ 2,00 € / séance", "Caractéristiques Principales": "Système de nage, Jets de massage, Éclairage LED" } },
    { "id": "lusso", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/lusso.webp", "title": "Lusso", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-lusso", "specs": { "Dimensions": "530 × 228 × 163 cm", "Places": "4 places", "Système de Nage": "3 pompes", "Jets Massage": "38 jets", "Hauteur de Nage": "140 cm", "Consommation Moyenne": "≈ 3,20 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Zone massage intégrée, Chromothérapie LED" } },
    { "id": "storm", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/storm.webp", "title": "Storm", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-storm", "specs": { "Dimensions": "400 × 230 × 155 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "36 jets", "Hauteur de Nage": "135 cm", "Consommation Moyenne": "≈ 2,50 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Zone massage, Éclairage LED" } },
    { "id": "swim28s", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Swim28+PRO+2+2025.png", "title": "Swim 28S", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim28s", "specs": { "Dimensions": "630 × 230 × 155 cm", "Places": "4 places", "Système de Nage": "3 pompes", "Jets Massage": "77 jets", "Hauteur de Nage": "135 cm", "Consommation Moyenne": "≈ 3,50 € / séance", "Caractéristiques Principales": "Système de nage performant, Zone massage XXL, Chromothérapie" } },
    { "id": "acapulco2", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/acapulco2.webp", "title": "Acapulco 2", "collection": "Mono", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-acapulco2", "specs": { "Dimensions": "569 × 228 × 149 cm", "Places": "3 places", "Système de Nage": "3 pompes", "Jets Massage": "24 jets", "Hauteur de Nage": "130 cm", "Consommation Moyenne": "≈ 3,00 € / séance", "Caractéristiques Principales": "Nage à contre-courant, Sièges confort, LED" } }
  ],
  "double": [
    { "id": "puntacana", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/punta-cana.webp", "title": "Punta Cana", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-punta-cana", "specs": { "Dimensions": "800 × 280 × 180 cm", "Places": "6 places", "Système de Nage": "Double turbine", "Jets Massage": "48 jets", "Hauteur de Nage": "150 cm", "Consommation Moyenne": "≈ 4,50 € / séance", "Caractéristiques Principales": "Double bassin, Nage intensive, Zone massage XXL" } },
    { "id": "mindanao", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/giulia-spa-de-nage.webp", "title": "Mindanao", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-giulia", "specs": { "Dimensions": "750 × 260 × 175 cm", "Places": "5 places", "Système de Nage": "Double turbine", "Jets Massage": "42 jets", "Hauteur de Nage": "145 cm", "Consommation Moyenne": "≈ 4,20 € / séance", "Caractéristiques Principales": "Double bassin, Nage pro, Chromothérapie" } },
    { "id": "duce", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/duce.webp", "title": "Duce", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-duce", "specs": { "Dimensions": "720 × 250 × 170 cm", "Places": "5 places", "Système de Nage": "Double turbine", "Jets Massage": "40 jets", "Hauteur de Nage": "140 cm", "Consommation Moyenne": "≈ 4,00 € / séance", "Caractéristiques Principales": "Double bassin, Massage intégré, LED" } },
    { "id": "fidji", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/fidji.webp", "title": "Fidji", "collection": "Double", "collectionClass": "swim", "link": "https://www.bluelagoonspas.com/spa-de-nage-fidji", "specs": { "Dimensions": "780 × 270 × 180 cm", "Places": "6 places", "Système de Nage": "Double turbine", "Jets Massage": "50 jets", "Hauteur de Nage": "150 cm", "Consommation Moyenne": "≈ 4,60 € / séance", "Caractéristiques Principales": "Double bassin, Zone massage XXL, Chromothérapie LED" } }
  ],
  "pro": [
    { "id": "stormPro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/storm-pro.webp", "title": "Storm Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-turbine-storm-pro", "specs": { "Dimensions": "466 × 230 × 159 cm", "Places": "3 places", "Jets de Nage": "Turbine", "Jets Massage": "36 jets", "Hauteur de Nage": "135 cm", "Caractéristiques Principales": "Système turbine, Nage professionnelle, Débit puissant, Résistance réglable" } },
    { "id": "swim22Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim22-pro.webp", "title": "Swim 22 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-turbine-swim-22-pro", "specs": { "Dimensions": "466 × 230 × 155 cm", "Places": "3 places", "Jets de Nage": "Turbine", "Jets Massage": "45 jets", "Hauteur de Nage": "135 cm", "Caractéristiques Principales": "Turbine haute performance, Jets massage intégrés, Chromothérapie, Zone relaxation" } },
    { "id": "swim24Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/swim24-pro.webp", "title": "Swim 24 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-turbine-swim-24-pro", "specs": { "Dimensions": "580 × 230 × 155 cm", "Places": "3 places", "Jets de Nage": "Turbine", "Jets Massage": "49 jets", "Hauteur de Nage": "135 cm", "Caractéristiques Principales": "Système turbine pro, Nage intensive, Massage ciblé, LED" } },
    { "id": "swim28Pro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/Swim28+PRO+2+2025.png", "title": "Swim 28 Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-swim-28-pro", "specs": { "Dimensions": "630 × 230 × 155 cm", "Places": "4 places", "Jets de Nage": "Turbine", "Jets Massage": "77 jets", "Hauteur de Nage": "135 cm", "Caractéristiques Principales": "Double turbine, Nage intensive, Zone massage étendue, LED RGB" } },
    { "id": "athenaPro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/athena-pro.webp", "title": "Athena Pro", "collection": "Pro", "collectionClass": "pro", "link": "#", "specs": { "Dimensions": "590 × 228 × 162 cm", "Places": "2 places", "Jets de Nage": "Turbine", "Jets Massage": "32 jets", "Hauteur de Nage": "140 cm", "Caractéristiques Principales": "Turbine puissante, Nage pro, Jets réglables, Éclairage" } },
    { "id": "apolloPro", "img": "https://irp.cdn-website.com/a0ed638c/dms3rep/multi/apollo-pro.webp", "title": "Apollo Pro", "collection": "Pro", "collectionClass": "pro", "link": "https://www.bluelagoonspas.com/spa-de-nage-apollo-pro", "specs": { "Dimensions": "590 × 228 × 162 cm", "Places": "3 places", "Jets de Nage": "Turbine", "Jets Massage": "33 jets", "Hauteur de Nage": "140 cm", "Caractéristiques Principales": "Système Aqua-Flo, Turbine professionnelle, Massage intégré, Chromothérapie" } }
  ]
};

// Fonction d'initialisation complète
function renderSpaComparator(category, tableId, selectorsId, colsId) {
    const data = allSpasData[category];
    if (!data) return;

    const tableElem = document.getElementById(tableId);
    const selectorsElem = document.getElementById(selectorsId);
    const colsElem = document.getElementById(colsId);

    // 1. Générer le Tableau Desktop
    let tableHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, idx) => {
        tableHtml += `<th class="spa-col" data-index="${idx}">
            <div class="spa-header">
                <img src="${spa.img}" class="spa-img" alt="${spa.title}">
                <div class="spa-title">${spa.title}</div>
                <span class="spa-badge ${spa.collectionClass}">${spa.collection}</span>
            </div>
        </th>`;
    });
    tableHtml += '</tr>';

    const specKeys = Object.keys(data[0].specs);
    specKeys.forEach(key => {
        tableHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, idx) => {
            tableHtml += `<td class="spa-col" data-index="${idx}">${spa.specs[key]}</td>`;
        });
        tableHtml += '</tr>';
    });

    tableHtml += '<tr><td>Action</td>';
    data.forEach((spa, idx) => {
        tableHtml += `<td class="spa-col" data-index="${idx}"><a href="${spa.link}" class="btn">Découvrir</a></td>`;
    });
    tableHtml += '</tr>';
    
    if(tableElem) tableElem.innerHTML = tableHtml;

    // 2. Générer les Sélecteurs Mobile
    if (selectorsElem) {
        let selHtml = '';
        for (let i = 1; i <= 2; i++) {
            selHtml += `<div class="selector-group">
                <label>Spa ${i}</label>
                <select class="spa-selector" data-pos="${i-1}">`;
            data.forEach((spa, idx) => {
                selHtml += `<option value="${idx}" ${idx === i-1 ? 'selected' : ''}>${spa.title}</option>`;
            });
            selHtml += `</select></div>`;
        }
        selectorsElem.innerHTML = selHtml;

        // Événement de changement
        selectorsElem.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', () => updateVisibility(category, tableId, selectorsId, colsId));
        });
    }

    // Initialiser l'affichage
    updateVisibility(category, tableId, selectorsId, colsId);
}

function updateVisibility(category, tableId, selectorsId, colsId) {
    const data = allSpasData[category];
    const selectorsElem = document.getElementById(selectorsId);
    const tableElem = document.getElementById(tableId);
    const colsElem = document.getElementById(colsId);

    if (!selectorsElem) return;

    const selectedIndices = Array.from(selectorsElem.querySelectorAll('select')).map(s => parseInt(s.value));

    // Update Table Desktop
    if (tableElem) {
        tableElem.querySelectorAll('.spa-col').forEach(col => {
            const idx = parseInt(col.dataset.index);
            col.classList.toggle('visible', selectedIndices.includes(idx));
        });
    }

    // Update Colonnes Mobile
    if (colsElem) {
        let colHtml = '';
        selectedIndices.forEach(idx => {
            const spa = data[idx];
            colHtml += `<div class="comparison-col">
                <div class="spa-header">
                    <img src="${spa.img}" class="spa-img">
                    <div class="spa-title">${spa.title}</div>
                </div>`;
            Object.keys(spa.specs).forEach(key => {
                colHtml += `<div class="comparison-row">
                    <div class="comparison-row-label">${key}</div>
                    <div class="comparison-row-value">${spa.specs[key]}</div>
                </div>`;
            });
            colHtml += `<div class="comparison-row"><a href="${spa.link}" class="btn">Découvrir</a></div></div>`;
        });
        colsElem.innerHTML = colHtml;
    }
}
