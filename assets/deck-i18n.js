/* Altiva Pitch Deck — i18n (EN/FR) */
(function(){
  const DICT = {
    en: {
      // 01 Cover
      'cover.tag':'International advisory platform',
      'cover.h1':'Operator.<br><em>Not</em> consultant.',
      'cover.k1':'Engaged when',
      'cover.v1':'Execution is the <em>bottleneck.</em>',
      'cover.k2':'Deployed across',
      'cover.v2':'Europe &amp; <em>Asia-Pacific.</em>',
      'cover.foot.l':'Altiva Limited · Hong Kong · <span class="accent">2025</span>',
      'cover.foot.r':'Capability overview',

      // 02 Problem
      'p2.mark':'The situation',
      'p2.h':'The strategy is sound.<br>The growth is there.<br>The organisation <em>is not moving.</em>',
      'p2.c1.h':'When it usually happens',
      'p2.c1.p':'A transformation programme is not landing. A COO seat is empty. Decisions that should take days are taking quarters.',
      'p2.c2.h':'What it needs',
      'p2.c2.p':'Not another deck. Not another workshop. A senior operator <b>inside the business</b>, with P&amp;L judgment, until the situation has shifted.',
      'p2.c3.h':'What Altiva provides',
      'p2.c3.p':'One operator, engaged personally. Tight mandate, weekly cadence, measurable outcomes. Handover the moment the work is embedded.',
      'p2.foot.l':'§ 01 · The situation',

      // 03 Positioning
      'p3.mark':'Positioning',
      'p3.h':'Altiva is neither a firm,<br>nor a <em>freelancer network.</em>',
      'p3.a.tag':'Not this',
      'p3.a.h':'The consultancy model',
      'p3.a.p':'Teams of analysts, decks produced at a distance, recommendations that require an internal team to land them. Billable hours, not owned outcomes.',
      'p3.b.tag':'This instead',
      'p3.b.h':'One operator, inside',
      'p3.b.p':'A single senior practitioner, embedded in the room. Real P&amp;L experience. Judgment carried in, decisions taken, execution moved — until the mandate is closed.',
      'p3.vs':'operator, not adviser',
      'p3.foot.l':'§ 02 · Positioning',

      // 04 Practice
      'p4.mark':'Practice',
      'p4.mark.r':'Six mandate types',
      'p4.h':'The work, <em>plainly</em> stated.',
      'm1.n':'Mandate 01','m1.t':'COO, <em>on call.</em>','m1.d':'Interim or fractional leadership — transformation, growth, turnaround. Sat inside, until the work moves.',
      'm2.n':'Mandate 02','m2.t':'High-stakes <em>advisory.</em>','m2.d':'Strategic clarity with execution involvement. Not advisory from a distance — judgment carried into the room.',
      'm3.n':'Mandate 03','m3.t':'Transformation &amp; <em>AI</em>.','m3.d':'Business-driven programmes with measurable operational outcomes. AI absorbed into operating reality, not layered on top.',
      'm4.n':'Mandate 04','m4.t':'Go-to-market &amp; <em>growth.</em>','m4.d':'Commercial structuring and activation — channels, partners, new markets. Built to convert across EU &amp; APAC.',
      'm5.n':'Mandate 05','m5.t':'Operational <em>review.</em>','m5.d':'Diagnostic, cost-structure review, efficiency initiatives. Short or extended mandates — outcomes documented in weeks.',
      'm6.n':'Mandate 06','m6.t':'Transaction <em>prep.</em>','m6.d':'Fundraise, exit, or repositioning. Operational credibility and investor narrative, built on evidence — not on PowerPoint.',
      'p4.foot.l':'§ 03 · Practice',

      // 05 Work
      'p5.mark':'Selected engagements',
      'p5.mark.r':'Six mandates, six geographies',
      'p5.h':'Situations, <em>moved.</em>',
      'w1.yr':'01 · COO, on call',
      'w1.t':'COO, <em>automation</em> &amp; smart building group',
      'w1.out':'<b>Full reset.</b> Rebuilt delivery, stabilised P&amp;L, re-engaged leadership.',
      'w2.yr':'02 · High-stakes advisory',
      'w2.t':'Executive environment, <em>Fortune 500</em> industrial',
      'w2.out':'<b>Top-team cadence</b> re-architected across operations, digital and M&amp;A.',
      'w3.yr':'03 · Transformation &amp; AI',
      'w3.t':'Regional <em>transformation,</em> services business',
      'w3.out':'<b>APAC &amp; Middle East.</b> Operations, supply chain, digital — moved from plan to reality.',
      'w4.yr':'04 · Go-to-market &amp; growth',
      'w4.t':'Global <em>channel</em> &amp; IoT go-to-market',
      'w4.out':'<b>Partner ecosystem scaled.</b> Connected offers aligned across regions.',
      'w5.yr':'05 · Operational review',
      'w5.t':'Enterprise <em>operations</em> optimisation',
      'w5.out':'<b>Measurable efficiency.</b> Cost structure revisited, performance uplift delivered.',
      'w6.yr':'06 · Transaction preparation',
      'w6.t':'Operational <em>repositioning,</em> ahead of exit',
      'w6.out':'<b>Exit-ready.</b> Operational credibility rebuilt, investor narrative structured.',
      'p5.foot.l':'§ 04 · Selected engagements',

      // 06 Founder
      'p6.mark':'The operator',
      'p6.h':'Julien <em>Levet.</em>',
      'p6.bio.1':'Senior operator with <b>fifteen-plus years</b> of international experience across Europe and Asia — bridging strategy and execution in demanding environments.',
      'p6.bio.2':'Former <b>Schneider Electric</b>: senior roles across digital transformation, services, and global go-to-market across forty-plus countries.',
      'p6.bio.3':'Most recently <b>COO of OÏKO</b>: led full operational turnaround, shareholder exit repositioning, and growth initiatives across multi-country environments.',
      'p6.cr1.h':'Experience','p6.cr1.v':'<em>15+</em> years',
      'p6.cr2.h':'Scope','p6.cr2.v':'40+ <em>countries</em>',
      'p6.cr3.h':'Seats held','p6.cr3.v':'COO · <em>SVP</em>',
      'p6.cr4.h':'Based','p6.cr4.v':'Hong Kong',
      'p6.foot.l':'§ 05 · The operator',

      // 07 Process
      'p7.mark':'How a mandate runs',
      'p7.mark.r':'From first call to handover',
      'p7.h':'Engaged <em>personally.</em><br>Handed over cleanly.',
      'p7.s1.tag':'First call','p7.s1.h':'Situation <em>assessed.</em>','p7.s1.p':'A confidential conversation. What has moved, what has not, what would unlock progress. No fee, no obligation.',
      'p7.s2.tag':'Mandate note','p7.s2.h':'Scope <em>defined.</em>','p7.s2.p':'A short written note: outcomes, cadence, length, boundaries. Signed in days, not weeks. Built to be closable.',
      'p7.s3.tag':'Inside the room','p7.s3.h':'Execution <em>carried.</em>','p7.s3.p':'Embedded cadence with leadership. Julien operates inside the business — weekly rhythm, decisions taken, blockers cleared.',
      'p7.s4.tag':'Handover','p7.s4.h':'Work <em>embedded.</em>','p7.s4.p':'When the situation has shifted, the mandate closes. Documented handover to the internal team — nothing held hostage.',
      'p7.foot.l':'§ 06 · How a mandate runs',

      // 08 Commercials
      'p8.mark':'Engagement model',
      'p8.h':'Built to be <em>closable.</em>',
      'p8.k1':'Format','p8.v1':'Fractional, interim, or <em>project</em>.','p8.s1':'Two to five days per week. Shape follows the mandate, not the other way around.',
      'p8.k2':'Cadence','p8.v2':'<em>Weekly</em> rhythm with leadership.','p8.s2':'Decisions taken in the room. Monthly operating review. No status-deck theatre.',
      'p8.k3':'Duration','p8.v3':'<em>Quarters,</em> not years.','p8.s3':'Typical mandate: three to nine months. Clear exit criteria agreed at day one.',
      'p8.k4':'Terms','p8.v4':'Retainer &amp; <em>outcomes-linked.</em>','p8.s4':'Fixed retainer, supplemented by outcome-linked components where relevant.',
      'p8.side.h':'The first conversation',
      'p8.side.p1':'Always a personal call with Julien. No intake form, no BDR, no analyst on the line. Confidential by default.',
      'p8.side.p2':'<b>No fee</b> for the assessment — only when a mandate is agreed and begins.',
      'p8.foot.l':'§ 07 · Engagement model',

      // 09 Contact
      'p9.tag':'Replies within two working days',
      'p9.h':"Let's talk about the <em>situation</em> in front of you.",
      'p9.k1':'Direct',
      'p9.k2':'Book','p9.v2':'A <em>30-minute</em> conversation','p9.s2':'outlook.office.com · Microsoft Bookings',
      'p9.k3':'Office','p9.v3':'Hong Kong','p9.s3':'2/F West Wing, 822 Lai Chi Kok Road<br>Cheung Sha Wan, HK',
      'p9.k4':'Web',
      'p9.foot.l':'Altiva Limited · Registered <span class="accent">2025</span>',
      'p9.foot.r':'No tracking · Confidential',
    },

    fr: {
      // 01 Cover
      'cover.tag':'Plateforme d\u2019advisory internationale',
      'cover.h1':'Opérateur.<br><em>Pas</em> consultant.',
      'cover.k1':'Mobilisé quand',
      'cover.v1':'L\u2019exécution est le <em>goulot d\u2019étranglement.</em>',
      'cover.k2':'Déployé sur',
      'cover.v2':'Europe &amp; <em>Asie-Pacifique.</em>',
      'cover.foot.l':'Altiva Limited · Hong Kong · <span class="accent">2025</span>',
      'cover.foot.r':'Présentation capabilité',

      // 02 Problem
      'p2.mark':'La situation',
      'p2.h':'La stratégie tient.<br>La croissance est là.<br>L\u2019organisation <em>ne bouge pas.</em>',
      'p2.c1.h':'Quand ça arrive',
      'p2.c1.p':'Un programme de transformation qui n\u2019atterrit pas. Un siège de COO vacant. Des décisions qui devraient prendre des jours et prennent des trimestres.',
      'p2.c2.h':'Ce qu\u2019il faut',
      'p2.c2.p':'Pas un deck de plus. Pas un atelier de plus. Un opérateur senior <b>à l\u2019intérieur</b> de l\u2019entreprise, avec un jugement P&amp;L, jusqu\u2019à ce que la situation ait bougé.',
      'p2.c3.h':'Ce qu\u2019Altiva apporte',
      'p2.c3.p':'Un opérateur, engagé personnellement. Mandat serré, rythme hebdomadaire, résultats mesurables. Transmission dès que le travail est intégré.',
      'p2.foot.l':'§ 01 · La situation',

      // 03 Positioning
      'p3.mark':'Positionnement',
      'p3.h':'Altiva n\u2019est ni un cabinet,<br>ni un <em>réseau de freelances.</em>',
      'p3.a.tag':'Pas ça',
      'p3.a.h':'Le modèle consulting',
      'p3.a.p':'Des équipes d\u2019analystes, des decks produits à distance, des recommandations qu\u2019il faut une équipe interne pour faire atterrir. Des heures facturées, pas des résultats portés.',
      'p3.b.tag':'Plutôt ça',
      'p3.b.h':'Un opérateur, à l\u2019intérieur',
      'p3.b.p':'Un seul praticien senior, dans la pièce. Expérience P&amp;L réelle. Jugement apporté, décisions prises, exécution avancée — jusqu\u2019à la clôture du mandat.',
      'p3.vs':'opérateur, pas conseiller',
      'p3.foot.l':'§ 02 · Positionnement',

      // 04 Practice
      'p4.mark':'Pratique',
      'p4.mark.r':'Six types de mandats',
      'p4.h':'Le travail, <em>clairement</em> énoncé.',
      'm1.n':'Mandat 01','m1.t':'COO, <em>à la demande.</em>','m1.d':'Direction intérimaire ou fractionnelle — transformation, croissance, redressement. À l\u2019intérieur jusqu\u2019à ce que le travail avance.',
      'm2.n':'Mandat 02','m2.t':'Advisory <em>stratégique.</em>','m2.d':'Clarté stratégique avec implication dans l\u2019exécution. Pas de conseil à distance — du jugement porté dans la pièce.',
      'm3.n':'Mandat 03','m3.t':'Transformation &amp; <em>IA</em>.','m3.d':'Programmes business avec résultats opérationnels mesurables. IA absorbée dans le réel, pas empilée par-dessus.',
      'm4.n':'Mandat 04','m4.t':'Go-to-market &amp; <em>croissance.</em>','m4.d':'Structuration et activation commerciale — canaux, partenaires, nouveaux marchés. Conçu pour convertir en EU &amp; APAC.',
      'm5.n':'Mandat 05','m5.t':'Revue <em>opérationnelle.</em>','m5.d':'Diagnostic, revue de coûts, initiatives d\u2019efficacité. Missions courtes ou longues — résultats documentés en semaines.',
      'm6.n':'Mandat 06','m6.t':'Préparation <em>transaction.</em>','m6.d':'Levée, sortie ou repositionnement. Crédibilité opérationnelle et narratif investisseur, bâtis sur du concret — pas sur du PowerPoint.',
      'p4.foot.l':'§ 03 · Pratique',

      // 05 Work
      'p5.mark':'Engagements sélectionnés',
      'p5.mark.r':'Six mandats, six géographies',
      'p5.h':'Des situations, <em>débloquées.</em>',
      'w1.yr':'01 · COO à la demande',
      'w1.t':'COO, <em>automation</em> &amp; smart building',
      'w1.out':'<b>Reset complet.</b> Livraison reconstruite, P&amp;L stabilisé, leadership ré-engagé.',
      'w2.yr':'02 · Advisory stratégique',
      'w2.t':'Environnement exécutif, industriel <em>Fortune 500</em>',
      'w2.out':'<b>Cadence top-team</b> réarchitecturée — opérations, digital et M&amp;A.',
      'w3.yr':'03 · Transformation &amp; IA',
      'w3.t':'<em>Transformation</em> régionale, services',
      'w3.out':'<b>APAC &amp; Moyen-Orient.</b> Opérations, supply chain, digital — du plan à la réalité.',
      'w4.yr':'04 · Go-to-market &amp; croissance',
      'w4.t':'Go-to-market <em>canal</em> &amp; IoT mondial',
      'w4.out':'<b>Écosystème partenaires scalé.</b> Offres connectées alignées multi-régions.',
      'w5.yr':'05 · Revue opérationnelle',
      'w5.t':'Optimisation des <em>opérations</em> enterprise',
      'w5.out':'<b>Efficacité mesurable.</b> Structure de coûts revue, gains de performance livrés.',
      'w6.yr':'06 · Préparation transaction',
      'w6.t':'<em>Repositionnement</em> opérationnel, avant sortie',
      'w6.out':'<b>Exit-ready.</b> Crédibilité opérationnelle rebâtie, narratif investisseur structuré.',
      'p5.foot.l':'§ 04 · Engagements sélectionnés',

      // 06 Founder
      'p6.mark':'L\u2019opérateur',
      'p6.h':'Julien <em>Levet.</em>',
      'p6.bio.1':'Opérateur senior, <b>quinze ans et plus</b> d\u2019expérience internationale entre Europe et Asie — articulant stratégie et exécution dans des environnements exigeants.',
      'p6.bio.2':'Ancien <b>Schneider Electric</b> : postes seniors sur la transformation digitale, les services, et le go-to-market mondial dans plus de quarante pays.',
      'p6.bio.3':'Plus récemment <b>COO d\u2019OÏKO</b> : pilotage du redressement opérationnel complet, repositionnement avant sortie actionnaire, initiatives de croissance multi-pays.',
      'p6.cr1.h':'Expérience','p6.cr1.v':'<em>15+</em> ans',
      'p6.cr2.h':'Périmètre','p6.cr2.v':'40+ <em>pays</em>',
      'p6.cr3.h':'Sièges tenus','p6.cr3.v':'COO · <em>SVP</em>',
      'p6.cr4.h':'Basé à','p6.cr4.v':'Hong Kong',
      'p6.foot.l':'§ 05 · L\u2019opérateur',

      // 07 Process
      'p7.mark':'Comment un mandat se déroule',
      'p7.mark.r':'Du premier appel à la passation',
      'p7.h':'Engagé <em>personnellement.</em><br>Transmis proprement.',
      'p7.s1.tag':'Premier appel','p7.s1.h':'Situation <em>évaluée.</em>','p7.s1.p':'Un échange confidentiel. Ce qui a bougé, ce qui ne bouge pas, ce qui débloquerait. Sans honoraires, sans engagement.',
      'p7.s2.tag':'Note de mandat','p7.s2.h':'Périmètre <em>défini.</em>','p7.s2.p':'Une note courte : résultats, rythme, durée, frontières. Signée en jours, pas en semaines. Conçue pour être clôturable.',
      'p7.s3.tag':'Dans la pièce','p7.s3.h':'Exécution <em>portée.</em>','p7.s3.p':'Rythme intégré avec le leadership. Julien opère à l\u2019intérieur — cadence hebdo, décisions prises, blocages levés.',
      'p7.s4.tag':'Passation','p7.s4.h':'Travail <em>ancré.</em>','p7.s4.p':'Quand la situation a bougé, le mandat s\u2019arrête. Passation documentée à l\u2019équipe interne — rien retenu en otage.',
      'p7.foot.l':'§ 06 · Comment un mandat se déroule',

      // 08 Commercials
      'p8.mark':'Modèle d\u2019engagement',
      'p8.h':'Conçu pour être <em>clôturable.</em>',
      'p8.k1':'Format','p8.v1':'Fractionnel, intérim, ou <em>projet</em>.','p8.s1':'Deux à cinq jours par semaine. La forme suit le mandat, pas l\u2019inverse.',
      'p8.k2':'Cadence','p8.v2':'Rythme <em>hebdomadaire</em> avec le leadership.','p8.s2':'Décisions prises dans la pièce. Revue mensuelle. Pas de théâtre de decks de statut.',
      'p8.k3':'Durée','p8.v3':'<em>Trimestres,</em> pas années.','p8.s3':'Mandat typique : trois à neuf mois. Critères de sortie clairs dès le jour un.',
      'p8.k4':'Conditions','p8.v4':'Retainer &amp; <em>indexé résultats.</em>','p8.s4':'Retainer fixe, complété par une composante indexée sur les résultats lorsque pertinent.',
      'p8.side.h':'Le premier échange',
      'p8.side.p1':'Toujours un appel personnel avec Julien. Pas de formulaire d\u2019intake, pas de BDR, pas d\u2019analyste au bout du fil. Confidentiel par défaut.',
      'p8.side.p2':'<b>Sans honoraires</b> pour l\u2019évaluation — uniquement si un mandat est convenu et démarre.',
      'p8.foot.l':'§ 07 · Modèle d\u2019engagement',

      // 09 Contact
      'p9.tag':'Réponse sous deux jours ouvrés',
      'p9.h':'Parlons de la <em>situation</em> devant vous.',
      'p9.k1':'Direct',
      'p9.k2':'Réserver','p9.v2':'Un échange de <em>30 minutes</em>','p9.s2':'outlook.office.com · Microsoft Bookings',
      'p9.k3':'Bureau','p9.v3':'Hong Kong','p9.s3':'2/F West Wing, 822 Lai Chi Kok Road<br>Cheung Sha Wan, HK',
      'p9.k4':'Web',
      'p9.foot.l':'Altiva Limited · Immatriculée <span class="accent">2025</span>',
      'p9.foot.r':'Sans tracking · Confidentiel',
    }
  };

  function detect(){
    try{
      const url = new URL(window.location.href);
      const q = url.searchParams.get('lang');
      if (q === 'fr' || q === 'en') { localStorage.setItem('altiva.deck.lang', q); return q; }
    }catch(e){}
    try{
      const saved = localStorage.getItem('altiva.deck.lang');
      if (saved === 'fr' || saved === 'en') return saved;
    }catch(e){}
    // Fall back to site lang if present
    try{
      const siteLang = localStorage.getItem('altiva.lang');
      if (siteLang === 'fr' || siteLang === 'en') return siteLang;
    }catch(e){}
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('fr') ? 'fr' : 'en';
  }

  function apply(lang){
    const dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      const l = b.getAttribute('data-lang-btn');
      b.classList.toggle('active', l === lang);
    });
  }

  function setLang(lang, fromUser){
    try { if (fromUser) localStorage.setItem('altiva.deck.lang', lang); } catch(e){}
    apply(lang);
  }

  window.AltivaDeck = window.AltivaDeck || {};
  window.AltivaDeck.i18n = { setLang, apply, detect };

  document.addEventListener('DOMContentLoaded', () => {
    apply(detect());
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', () => setLang(b.getAttribute('data-lang-btn'), true));
    });
  });
})();
