window.renderGlobalComparator = function(category, containerId) {
    const data = allSpasData[category];
    const container = document.getElementById(containerId);
    if (!data || !container) return;

    // Structure HTML avec tes classes d'origine
    let html = `
    <div class="comparator-wrapper">
        <div class="comparator-section">
            <div class="selectors-container" style="display:flex"></div>
            <div class="table-wrapper"><table></table></div>
            <div class="comparison-cols"></div>
        </div>
    </div>`;
    
    container.innerHTML = html;

    const table = container.querySelector('table');
    const selectorsContainer = container.querySelector('.selectors-container');
    const colsContainer = container.querySelector('.comparison-cols');

    // 1. Rendu du Tableau Desktop
    let tableHtml = '<tr><th>Caractéristiques</th>';
    data.forEach((spa, idx) => {
        tableHtml += `<th class="spa-col" data-index="${idx}"><div class="spa-header"><img src="${spa.img}" class="spa-img"><div class="spa-title">${spa.title}</div><span class="spa-badge ${spa.collectionClass}">${spa.collection}</span></div></th>`;
    });
    tableHtml += '</tr>';

    Object.keys(data[0].specs).forEach(key => {
        tableHtml += `<tr><td>${key}</td>`;
        data.forEach((spa, idx) => { tableHtml += `<td class="spa-col" data-index="${idx}">${spa.specs[key]}</td>`; });
        tableHtml += '</tr>';
    });

    tableHtml += '<tr><td>Action</td>';
    data.forEach((spa, idx) => { tableHtml += `<td class="spa-col" data-index="${idx}"><a href="${spa.link}" class="btn">Découvrir</a></td>`; });
    tableHtml += '</tr>';
    table.innerHTML = tableHtml;

    // 2. Rendu des Sélecteurs
    let selHtml = '';
    for (let i = 1; i <= 2; i++) {
        selHtml += `<div class="selector-group"><label>Spa ${i}</label><select class="spa-selector">`;
        data.forEach((spa, idx) => { selHtml += `<option value="${idx}" ${idx === i-1 ? 'selected' : ''}>${spa.title}</option>`; });
        selHtml += `</select></div>`;
    }
    selectorsContainer.innerHTML = selHtml;

    // 3. Fonction de mise à jour (Desktop + Mobile)
    const update = () => {
        const selects = selectorsContainer.querySelectorAll('select');
        const selected = Array.from(selects).map(s => parseInt(s.value));
        
        // Desktop : on ajoute/retire la classe "visible"
        table.querySelectorAll('.spa-col').forEach(col => {
            const idx = parseInt(col.dataset.index);
            if (selected.includes(idx)) {
                col.style.display = "table-cell";
                col.classList.add('visible');
            } else {
                col.style.display = "none";
                col.classList.remove('visible');
            }
        });

        // Mobile : on génère les colonnes
        let colHtml = '';
        selected.forEach(idx => {
            const spa = data[idx];
            colHtml += `
            <div class="comparison-col">
                <div class="spa-header">
                    <img src="${spa.img}" class="spa-img">
                    <div class="spa-title">${spa.title}</div>
                    <span class="spa-badge ${spa.collectionClass}">${spa.collection}</span>
                </div>`;
            Object.keys(spa.specs).forEach(key => {
                colHtml += `<div class="comparison-row"><div class="comparison-row-label">${key}</div><div class="comparison-row-value">${spa.specs[key]}</div></div>`;
            });
            colHtml += `<div class="comparison-row" style="border-bottom:none; margin-top:10px;"><a href="${spa.link}" class="btn">Découvrir</a></div></div>`;
        });
        colsContainer.innerHTML = colHtml;
    };

    selectorsContainer.querySelectorAll('select').forEach(s => s.addEventListener('change', update));
    update();
};
