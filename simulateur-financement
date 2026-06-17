// ============================================================
//  simulateur-financement.js  —  Blue Lagoon Spas
//  Fichier UNIQUE hébergé sur GitHub + Vercel.
//  Le TAEG (et tous les paramètres globaux) se modifient ICI,
//  une seule fois, et se répercutent sur TOUTES les pages.
// ============================================================

// 🔧 ─── PARAMÈTRES GLOBAUX (à modifier ici uniquement) ───────
const FINANCEMENT_CONFIG = {
  TAEG: 5.75,             // ← LE SEUL endroit à changer quand le taux évolue
  MIN_FINANCEMENT: 1000,  // montant minimum finançable
  MIN_APPORT: 500,        // apport minimum
  // Apport par défaut : pourcentage du prix (30 % ici)
  APPORT_DEFAUT_PCT: 0.30,
  DUREE_DEFAUT: 60,       // mois
  DUREES: [24, 36, 48, 60, 72, 84, 96, 108],

  // ─── HubSpot (formulaire externe "Formulaire de simulation crédit") ───
  HUBSPOT_PORTAL: '49024019',
  HUBSPOT_FORM: '#contact-form',   // identifiant du formulaire externe
  REDIRECT_URL: 'https://www.bluelagoonspas.com/remerciements' // '' pour désactiver
};
// ─────────────────────────────────────────────────────────────

// Injection du CSS une seule fois (même si plusieurs simulateurs sur la page)
(function injectCSS() {
  if (document.getElementById('blsf-styles')) return;
  const css = `
  .simulateur-container * { margin:0; padding:0; box-sizing:border-box; }
  .simulateur-container { font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; background:#fff; padding:20px 0; line-height:1.6; }
  .simulator-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:32px; }
  @media(max-width:1024px) and (min-width:769px){ .simulator-grid .simulator-card h2{font-size:24px!important;} .simulator-grid .payment-amount{font-size:30px!important;} .simulator-grid .subtitle{font-size:15px!important;} }
  @media(max-width:768px){ .simulator-grid{grid-template-columns:1fr;} .simulator-grid .simulator-card h2{font-size:20px!important;margin-bottom:20px!important;} .simulator-grid .payment-amount{font-size:28px!important;} .simulator-grid .subtitle{font-size:12px!important;} }
  .simulator-card { background:#fff; border-radius:24px; padding:40px; border:1px solid #e2e8f0; box-shadow:0 20px 40px rgba(0,0,0,0.08); }
  .simulator-card h2 { font-size:28px; font-weight:700; color:#161f2a; text-align:center; margin-bottom:8px; line-height:1.2; width:100%; display:flex; justify-content:center; align-items:center; }
  .simulator-card .subtitle { text-align:center; color:#64748b; margin-bottom:40px; font-size:16px; line-height:1.3; }
  .form-section { margin-bottom:32px; }
  .form-label { display:flex; align-items:center; gap:12px; font-weight:600; color:#1e293b; margin-bottom:16px; }
  .info-tooltip { position:relative; cursor:help; display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#161f2a; color:#fff; font-family:'Courier New','Monaco','Consolas',monospace; font-size:12px; font-weight:700; }
  .tooltip-content { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); background:#1e293b; color:#fff; padding:12px; border-radius:8px; font-size:14px; width:260px; opacity:0; visibility:hidden; transition:opacity .2s; z-index:10000; }
  .info-tooltip:hover .tooltip-content { opacity:1; visibility:visible; }
  .amount-input { width:100%; padding:16px; font-size:18px; font-weight:600; text-align:center; border:2px solid #e2e8f0; border-radius:12px; background:#fff; }
  .slider-container { position:relative; margin-bottom:16px; z-index:1; }
  .slider { width:100%; height:12px; background:#e2e8f0; border-radius:6px; appearance:none; cursor:pointer; position:relative; z-index:3; }
  .slider::-webkit-slider-thumb,.slider::-moz-range-thumb { width:24px; height:24px; background:linear-gradient(135deg,#161f2a,#2d3748); border:2px solid #fff; border-radius:50%; cursor:grab; z-index:4; position:relative; }
  .slider-track { position:absolute; top:0; left:0; height:12px; background:linear-gradient(90deg,#22c55e 0%,#16a34a 100%); border-radius:6px; pointer-events:none; z-index:2; }
  .slider-labels { display:flex; justify-content:space-between; font-size:14px; color:#64748b; margin-top:8px; }
  .slider-info { display:flex; justify-content:space-between; padding:12px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; font-size:14px; color:#1e293b; margin-top:16px; }
  .result-card { display:flex; flex-direction:column; gap:0; }
  .monthly-payment { text-align:center; padding:32px 0; display:flex; flex-direction:column; align-items:center; justify-content:center; }
  .monthly-payment h3 { margin-bottom:16px; font-size:20px; color:#161f2a; }
  .payment-display { display:flex; align-items:baseline; justify-content:center; gap:8px; }
  .payment-amount { font-size:36px; font-weight:800; color:#161f2a; }
  .payment-unit { font-size:16px; color:#64748b; font-weight:500; }
  .details-section { background:#f8fafc; padding:24px; border-top:1px solid #e2e8f0; border-radius:0 0 16px 16px; }
  .detail-row { display:flex; justify-content:space-between; margin-bottom:16px; font-size:15px; }
  .detail-row:last-child { margin-bottom:0; }
  .cta-button { display:block; width:calc(100% - 80px); margin:24px 40px 0; padding:14px; background:#161f2a; color:#fff; text-align:center; border:none; border-radius:12px; cursor:pointer; font-size:15px; font-weight:600; }
  .duration-select { width:100%; padding:12px 16px; appearance:none; -webkit-appearance:none; background:#fff url("data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2364748B'/%3E%3C/svg%3E") no-repeat right 12px center; border:2px solid #e2e8f0; border-radius:12px; font-size:16px; cursor:pointer; }
  .duration-select:focus { outline:none; border-color:#161f2a; box-shadow:0 0 0 4px rgba(22,31,42,0.1); }
  .form-container { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:none; align-items:center; justify-content:center; padding:20px; z-index:99999; }
  .form-container.show { display:flex; }
  .form-modal { background:#fff; border-radius:16px; padding:24px; width:100%; max-width:600px; max-height:calc(100vh - 40px); overflow-y:auto; position:relative; }
  .close-modal { position:absolute; top:12px; right:12px; background:none; border:none; font-size:24px; cursor:pointer; color:#64748b; }
  .form-header { text-align:center; margin-bottom:16px; }
  .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px; }
  @media(max-width:480px){ .form-grid{grid-template-columns:1fr;} }
  .submit-button { width:100%; padding:12px; background:#161f2a; color:#fff; border:none; border-radius:12px; cursor:pointer; }
  .legal-notice { margin-top:32px; font-size:12px; color:#64748b; text-align:center; max-width:800px; margin-left:auto; margin-right:auto; line-height:1.4; padding:0 20px; }
  .legal-notice::before { content:"* "; font-weight:600; }
  @media(max-width:768px){ .legal-notice{text-align:justify;text-align-last:center;} }
  `;
  const style = document.createElement('style');
  style.id = 'blsf-styles';
  style.textContent = css;
  document.head.appendChild(style);
})();

// Utilitaire de formatage
const fmtEUR = n => new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' €';

// ============================================================
//  FONCTION PRINCIPALE — à appeler sur chaque page produit
//  initSimulateur({ prix, titre, containerId })
// ============================================================
window.initSimulateur = function(opts) {
  const cfg = FINANCEMENT_CONFIG;
  const prix = opts.prix;
  const titre = opts.titre || 'Simulateur de Financement';
  const container = document.getElementById(opts.containerId);
  if (!container || !prix) {
    console.error('[Simulateur] container ou prix manquant', opts);
    return;
  }

  const maxApport = prix - cfg.MIN_FINANCEMENT;
  const apportDefaut = Math.min(
    maxApport,
    Math.max(cfg.MIN_APPORT, Math.round(prix * cfg.APPORT_DEFAUT_PCT))
  );

  // Identifiant unique par instance (au cas où plusieurs simulateurs sur une page)
  const uid = 'sim_' + Math.random().toString(36).slice(2, 8);

  // Stocke l'état courant de la simulation (pour la soumission HubSpot)
  let SIM = {};

  const dureeOptions = cfg.DUREES.map(d =>
    `<option value="${d}" ${d === cfg.DUREE_DEFAUT ? 'selected' : ''}>${d} mois</option>`
  ).join('');

  container.classList.add('simulateur-container');
  container.innerHTML = `
   <div class="simulator-grid">
    <div class="simulator-card">
      <h2>${titre}</h2>
      <p class="subtitle">Découvrez votre mensualité selon votre apport</p>
      <div class="form-section">
        <div class="form-label">
          Apport personnel
          <div class="info-tooltip">i<div class="tooltip-content">Votre apport réduit le montant à financer.</div></div>
        </div>
        <input id="apport-${uid}" class="amount-input" type="number" value="${apportDefaut}" min="${cfg.MIN_APPORT}" max="${maxApport}">
        <div class="slider-container">
          <div id="track-${uid}" class="slider-track"></div>
          <input id="slider-${uid}" class="slider" type="range" min="${cfg.MIN_APPORT}" max="${maxApport}" value="${apportDefaut}">
        </div>
        <div class="slider-labels"><span>${fmtEUR(cfg.MIN_APPORT)}</span><span>${fmtEUR(maxApport)}</span></div>
        <div class="slider-info">
          <div><strong>À financer</strong><br><span id="afinancer-${uid}"></span></div>
          <div><strong>% apport</strong><br><span id="pct-${uid}"></span></div>
        </div>
      </div>
      <div class="form-section">
        <label class="form-label">Durée du financement</label>
        <select id="duree-${uid}" class="duration-select">${dureeOptions}</select>
      </div>
    </div>
    <div class="simulator-card result-card">
      <div class="monthly-payment">
        <h3>Ma mensualité</h3>
        <div class="payment-display">
          <div id="mens-${uid}" class="payment-amount"></div>
          <div class="payment-unit">/mois*</div>
        </div>
      </div>
      <div class="details-section">
        <div class="detail-row"><span>Apport</span><span id="apport-aff-${uid}"></span></div>
        <div class="detail-row"><span>Montant</span><span id="montant-aff-${uid}"></span></div>
        <div class="detail-row"><span>Durée</span><span id="duree-aff-${uid}"></span></div>
        <div class="detail-row"><span>TAEG</span><span>${String(cfg.TAEG).replace('.', ',')} %</span></div>
        <div class="detail-row"><span>Coût crédit</span><span id="cout-${uid}"></span></div>
      </div>
      <button class="cta-button" id="cta-${uid}">Obtenir cette offre</button>
    </div>
   </div>
   <div id="legal-${uid}" class="legal-notice"></div>
   <div id="modal-${uid}" class="form-container">
    <div class="form-modal">
      <button class="close-modal" id="close-${uid}">×</button>
      <div class="form-header"><h3>Finaliser votre demande</h3><p>Nous vous recontactons rapidement</p></div>
      <form id="form-${uid}">
        <div class="form-grid">
          <div><label>Prénom *</label><input type="text" required></div>
          <div><label>Nom *</label><input type="text" required></div>
          <div><label>Email *</label><input type="email" required></div>
          <div><label>Téléphone *</label><input type="tel" required></div>
          <div><label>Code postal *</label><input type="text" pattern="\\d{5}" required></div>
          <div><label>Ville *</label><input type="text" required></div>
        </div>
        <button type="submit" class="submit-button">Recevoir mon offre</button>
      </form>
    </div>
   </div>`;

  // Récupération des éléments
  const $ = id => container.querySelector('#' + id + '-' + uid);
  const inputApport = $('apport'), slider = $('slider'), selectDuree = $('duree'),
        track = $('track'), afinancer = $('afinancer'), pct = $('pct'),
        mens = $('mens'), apportAff = $('apport-aff'), montantAff = $('montant-aff'),
        dureeAff = $('duree-aff'), cout = $('cout'), legal = $('legal'),
        modal = $('modal'), cta = $('cta'), close = $('close'), form = $('form');

  function calcule() {
    let v = parseInt(slider.value) || parseInt(inputApport.value) || apportDefaut;
    v = Math.max(cfg.MIN_APPORT, Math.min(maxApport, v));
    inputApport.value = slider.value = v;

    const p = ((v - cfg.MIN_APPORT) / (maxApport - cfg.MIN_APPORT)) * 100;
    track.style.width = p + '%';

    const montantFinance = prix - v;
    afinancer.textContent = fmtEUR(montantFinance);
    pct.textContent = Math.round(v / prix * 100) + ' %';

    const d = parseInt(selectDuree.value) || cfg.DUREE_DEFAUT;
    const taux = cfg.TAEG / 100 / 12;
    const ms = ((montantFinance * taux * Math.pow(1 + taux, d)) / (Math.pow(1 + taux, d) - 1)) || 0;
    const mensualite = Math.round(ms);
    const coutCredit = mensualite * d - montantFinance;

    mens.textContent = mensualite + ' €';
    apportAff.textContent = fmtEUR(v);
    montantAff.textContent = fmtEUR(montantFinance);
    dureeAff.textContent = d + ' mois';
    cout.textContent = fmtEUR(coutCredit);

    // Mémorise l'état courant pour la soumission HubSpot
    SIM = {
      apport_personnel: String(v),
      montant_a_financer: String(montantFinance),
      mensualite: String(mensualite),
      duree_credit: String(d),
      taeg: String(cfg.TAEG),
      cout_credit: String(coutCredit),
      prix_produit: String(prix)
    };

    legal.textContent = montantFinance <= 0
      ? "Simulation sous réserve d'acceptation de votre dossier par l'établissement prêteur. Aucun financement nécessaire."
      : `Simulation sous réserve d'acceptation de votre dossier par l'établissement prêteur. Exemple représentatif pour un crédit de ${fmtEUR(montantFinance)} sur ${d} mois : mensualités de ${mensualite} €, TAEG fixe de ${String(cfg.TAEG).replace('.', ',')} %, coût total du crédit ${fmtEUR(coutCredit)}.`;
  }

  inputApport.addEventListener('input', calcule);
  slider.addEventListener('input', calcule);
  selectDuree.addEventListener('change', calcule);
  cta.addEventListener('click', () => { modal.classList.add('show'); document.body.style.overflow = 'hidden'; });
  close.addEventListener('click', () => { modal.classList.remove('show'); document.body.style.overflow = 'auto'; form.reset(); });
  modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('show'); document.body.style.overflow = 'auto'; } });

  // ─── Soumission vers HubSpot (formulaire externe via API submission v3) ───
  function getCookie(name) {
    const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return m ? m.pop() : '';
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const submitBtn = form.querySelector('.submit-button');
    const inputs = form.querySelectorAll('input');
    const [firstname, lastname, email, phone, zip, city] =
      Array.from(inputs).map(i => i.value.trim());

    submitBtn.disabled = true;
    const labelInitial = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';

    const fields = [
      { name: 'firstname', value: firstname },
      { name: 'lastname',  value: lastname },
      { name: 'email',     value: email },
      { name: 'phone',     value: phone },
      { name: 'zip',       value: zip },
      { name: 'city',      value: city },
      { name: 'apport_personnel',   value: SIM.apport_personnel },
      { name: 'montant_a_financer', value: SIM.montant_a_financer },
      { name: 'mensualite',         value: SIM.mensualite },
      { name: 'duree_credit',       value: SIM.duree_credit },
      { name: 'taeg',               value: SIM.taeg },
      { name: 'cout_credit',        value: SIM.cout_credit },
      { name: 'prix_produit',       value: SIM.prix_produit }
    ];

    const payload = {
      fields,
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        hutk: getCookie('hubspotutk') || undefined
      }
    };

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${cfg.HUBSPOT_PORTAL}/${encodeURIComponent(cfg.HUBSPOT_FORM)}`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const txt = await res.text();
        console.error('[Simulateur] HubSpot a refusé la soumission', res.status, txt);
        throw new Error('HTTP ' + res.status);
      }
      // Succès
      if (cfg.REDIRECT_URL) {
        window.location.href = cfg.REDIRECT_URL;
        return;
      }
      form.innerHTML = '<div style="text-align:center;padding:24px"><h3>✓ Demande envoyée</h3><p>Nous vous recontactons rapidement.</p></div>';
    } catch (err) {
      console.error('[Simulateur] Erreur envoi HubSpot :', err);
      submitBtn.disabled = false;
      submitBtn.textContent = labelInitial;
      alert("Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement.");
    }
  });

  calcule();
};
