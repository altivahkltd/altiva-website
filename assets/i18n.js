/* =========================================================
   Altiva - i18n (FR / EN)
   ---------------------------------------------------------
   Detection priority:
     1. ?lang= URL param (override, persists)
     2. localStorage 'altiva.lang' (manual choice)
     3. navigator.language starts with 'fr' → fr
     4. Browser timezone in francophone set → fr
     5. default → en
   ========================================================= */
(function(){
  'use strict';

  const FR_TIMEZONES = new Set([
    'Europe/Paris','Europe/Brussels','Europe/Luxembourg','Europe/Zurich',
    'Europe/Monaco','Europe/Andorra',
    'Africa/Algiers','Africa/Tunis','Africa/Casablanca','Africa/Dakar',
    'Africa/Abidjan','Africa/Libreville','Africa/Douala','Africa/Kinshasa',
    'Africa/Brazzaville','Africa/Bamako','Africa/Ouagadougou','Africa/Niamey',
    'Africa/Porto-Novo','Africa/Lome','Africa/Djibouti','Africa/Bangui',
    'Africa/Ndjamena','Africa/Nouakchott','Africa/Antananarivo',
    'Indian/Mauritius','Indian/Reunion','Indian/Comoro','Indian/Mayotte',
    'America/Martinique','America/Guadeloupe','America/Cayenne',
    'America/Port-au-Prince','America/Miquelon','America/St_Barthelemy',
    'Pacific/Noumea','Pacific/Tahiti','Pacific/Marquesas','Pacific/Gambier','Pacific/Wallis',
    // Québec
    'America/Montreal','America/Toronto'
  ]);

  function detect(){
    try {
      const url = new URL(window.location.href);
      const q = url.searchParams.get('lang');
      if (q === 'fr' || q === 'en') { localStorage.setItem('altiva.lang', q); return q; }
    } catch(e){}
    try {
      const saved = localStorage.getItem('altiva.lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch(e){}
    try {
      const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (nav.startsWith('fr')) return 'fr';
    } catch(e){}
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && FR_TIMEZONES.has(tz)) return 'fr';
    } catch(e){}
    return 'en';
  }

  const DICT = {
    en: {
      // nav
      'nav.practice':   'Practice',
      'nav.work':       'Work',
      'nav.founder':    'Founder',
      'nav.process':    'Process',
      'nav.cta':        'Start a conversation →',
      'nav.cta.short':  'Contact →',

      // hero
      'hero.title':     'Operator. <em>Not</em><br>consultant.',
      'hero.meta.label1': 'Engaged when',
      'hero.meta.val1':   'execution <span>is the bottleneck</span>',
      'hero.meta.label2': 'Experience',
      'hero.meta.val2':   '15<span>years senior operating</span>',
      'hero.meta.label3': 'Deep expertise in',
      'hero.meta.val3':   'Asian Pacific<br>&amp; European markets',
      'hero.sub':        'Altiva is engaged when the strategy is sound and the growth is there, but the organisation is not moving. <b>One senior operator, inside the business, until the situation has shifted.</b> No juniors, no slide theatre, no distance.',
      'hero.cta.primary':'Start a conversation',
      'hero.cta.ghost':  'See the work',

      // ticker
      'tk.1': 'Fractional COO',
      'tk.2': 'Transformation programmes',
      'tk.3': 'Post-acquisition execution',
      'tk.4': 'Cross-border expansion',
      'tk.5': 'AI, absorbed into operating reality',
      'tk.6': 'Go-to-market activation',
      'tk.7': 'Equity Story &amp; exit preparation',
      'tk.8': 'Hong Kong · Europe · Asia-Pacific',

      // practice
      'prac.mark.num':  '§ I.',
      'prac.mark.1':    'Practice',
      'prac.mark.2':    'Six mandates',
      'prac.h':         'The work, <em>plainly</em> stated.',
      'prac.lede':      'The call usually comes when a transformation programme is not landing, a COO seat is empty, a post-acquisition plan needs structuring, or a cross-border expansion is hitting operational limits - typically when internal teams are capable but stretched, misaligned, or lacking ownership.',
      'prac.callout.h': 'The difference',
      'prac.callout.p': 'Altiva is not a consulting firm and not a freelancer network. It is one senior operator, engaged personally, carrying real P&amp;L experience into rooms that need it. Results are delivered on operating reality - commercial impact, organisational capability, transaction readiness - not on deliverables.',

      'm1.num':'Mandate 01','m1.t':'COO, <em>on call.</em>','m1.d':'Interim or fractional leadership - transformation, growth, or turnaround. Sat inside the business until the work moves.','m1.tag':'Interim · Fractional',
      'm2.num':'Mandate 02','m2.t':'High-stakes <em>advisory.</em>','m2.d':'Strategic clarity with execution involvement. Not advisory from a distance - judgment carried into the room.','m2.tag':'Board · CEO',
      'm3.num':'Mandate 03','m3.t':'Transformation &amp; <em>AI</em> programmes.','m3.d':'Business-driven programmes with measurable operational outcomes. AI absorbed into operating reality, not layered on top.','m3.tag':'Programme lead',
      'm4.num':'Mandate 04','m4.t':'Go-to-market &amp; <em>growth</em> execution.','m4.d':'Commercial structuring and activation - channels, partners, new markets. Built to convert across Europe and Asia.','m4.tag':'Commercial',
      'm5.num':'Mandate 05','m5.t':'Operational review &amp; <em>efficiency.</em>','m5.d':'Diagnostic, cost-structure review, efficiency initiatives. Short or extended mandates - outcomes documented in P&amp;L.','m5.tag':'Diagnostic',
      'm6.num':'Mandate 06','m6.t':'Transaction <em>preparation.</em>','m6.d':'Fundraise, exit, or repositioning. Operational credibility and investor narrative, built on evidence - not on PowerPoint.','m6.tag':'Equity Story · Exit',

      // work (selected engagements)
      'work.mark.num': '§ II.',
      'work.mark.1':   'Selected engagements',
      'work.mark.2':   'Anonymised',
      'work.h':        'Situations, <em>moved.</em>',
      'work.lede':     'Six mandates, selected. Real operator seats, real P&amp;L, real outcomes - across six geographies and three continents.',

      'w1.yr':'01 - COO, on call',            'w1.t':'COO, <em>automation</em> &amp; smart building group','w1.body':'Stepped into a company in operational difficulty. Led a full reset - rebuilt delivery, restructured the team, restored execution standards, and repositioned the business for growth.','w1.geo':'France · Caribbean · Switzerland','w1.outA':'€10M annual revenue with strong profitability','w1.outB':'Built and led 50+ team with full P&amp;L ownership',
      'w2.yr':'02 - High-stakes advisory',    'w2.t':'Executive environment, <em>Fortune 500</em> industrial group','w2.body':'Designed and operated digital environments for top leadership - including CEO and Executive Committee - across a decentralised, multi-country organisation.','w2.geo':'Global','w2.outA':'Supported top 200 executives across 20+ countries','w2.outB':'Delivered in high-stakes, zero-failure environments',
      'w3.yr':'03 - Transformation &amp; AI', 'w3.t':'Regional <em>transformation</em>, services business','w3.body':'End-to-end programme spanning operations, supply chain, customer experience, and commercial execution.','w3.geo':'APAC &amp; Middle East','w3.outA':'€500M business scope','w3.outB':'15% YoY growth · 4 verticalised functions',
      'w4.yr':'04 - Channel programme','w4.t':'<em>Channel</em> programme, electricians','w4.body':'Built and scaled a channel programme for electricians - loyalty, brand preference, training, and productivity tools - deployed across strategic markets through a network of distributors.','w4.geo':'40+ countries','w4.outA':'Strengthened brand preference','w4.outB':'Strong direct engagement &amp; distributor network activated across 40+ markets',
      'w5.yr':'05 - Operational review',      'w5.t':'Enterprise <em>operations</em> optimisation, IT services','w5.body':'Led performance optimisation of collaboration services across large-scale environments. Simplified workflows, improved user adoption, and aligned systems with operational needs.','w5.geo':'Mainland China, Hong Kong &amp; Taiwan','w5.outA':'10,000+ users supported','w5.outB':'Efficiency gains through workflow &amp; tool optimisation',
      'w6.yr':'06 - Transaction preparation', 'w6.t':'Operational <em>repositioning</em>, ahead of exit','w6.body':'Rebuilt operational credibility, stabilised performance, and structured the business to support a stronger exit narrative.','w6.geo':'Europe','w6.outA':'Profitability restored · valuation 0 → €7M','w6.outB':'Minority shareholder exit &amp; founder recapitalisation',

      // founder
      'fnd.mark.num':'§ III.','fnd.mark.1':'The founder','fnd.mark.2':'One operator',
      'fnd.h':'Julien <em>Levet.</em>',
      'fnd.bio.1':'Senior operator with <b>fifteen-plus years</b> of international experience across Europe and Asia - bridging strategy and execution in demanding environments.',
      'fnd.bio.2':'Former <b>Schneider Electric</b> - senior roles across digital transformation, services, and global go-to-market across forty-plus countries in complex, high-performance environments.',
      'fnd.bio.3':'Most recently <b>COO of OÏKO</b> - led full operational turnaround, shareholder exit repositioning, and growth initiatives across multi-country environments. Twelve years embedded in Asia (China, Singapore, Hong Kong, Indonesia).',
      'fnd.pull':'“Altiva is not a traditional consulting firm. I act as a hands-on operator, engaged to move situations forward - when internal execution is not enough.”',
      'fnd.signoff':'Founder &amp; Principal · Altiva Limited · Hong Kong',
      'fnd.geo':'Has lived and worked in France, the United States, China, Singapore, Hong Kong and Indonesia.',
      'fnd.portrait.role':'Founder &amp; Principal · Altiva Limited',

      // process
      'proc.mark.num':'§ IV.','proc.mark.1':'How a mandate runs','proc.mark.2':'From first call to handover',
      'proc.h':'Engaged <em>personally.</em><br>Handed over cleanly.',
      'p1.tag':'First call','p1.h':'Situation read.','p1.p':'A thirty-minute conversation. Direct, confidential, with Julien personally. No deck is prepared; a read of the situation is.','p1.dur':'30 min',
      'p2.tag':'Framing','p2.h':'Mandate written.','p2.p':'One-page mandate - scope, cadence, outcomes, duration. Short enough to agree on in a single meeting; sharp enough to be useful.','p2.dur':'~1 week',
      'p3.tag':'Embedded','p3.h':'Personally engaged.','p3.p':'Embedded in the operating cadence. Carrying the work - not supervising it. Reporting on operating reality, weekly.','p3.dur':'3 – 12 months',
      'p4.tag':'Handover','p4.h':'Situation moved.','p4.p':'Capability transferred to a permanent operator or back to the founders. Clean exit - Altiva is designed to leave.','p4.dur':'Clean exit',

      // contact
      'ctc.mark.num':'§ V.','ctc.mark.1':'Contact','ctc.mark.2':'Replies within two working days',
      'ctc.h':'When the situation <em>needs to move.</em>',
      'ctc.lede':'A short note is enough. Julien reads and replies personally — usually the same day, always within two working days.',
      'ctc.cta.write':'Or write directly','ctc.cta.book':'Book a 30-min call',
      'ctc.form.name':'Name','ctc.form.email':'Email','ctc.form.company':'Company','ctc.form.topic':'Topic',
      'ctc.form.topic.advisory':'Advisory','ctc.form.topic.audit':'Audit','ctc.form.topic.intro':'Introduction','ctc.form.topic.other':'Other',
      'ctc.form.message':'Message','ctc.form.send':'Send message','ctc.form.note':'No tracking · Confidential',
      'ctc.card.h':'Registered office',
      'ctc.card.addr':'Altiva Limited<br>2/F West Wing, 822 Lai Chi Kok Road<br>Cheung Sha Wan, Hong Kong',
      'ctc.card.direct':'Direct','ctc.card.li':'LinkedIn',

      // footer
      'foot.meta':'International advisory platform. Hong Kong · Incorporated 2025 · BR No. 78582830.<br>No analytics. No tracking.',
      'foot.email':'Email','foot.linkedin':'LinkedIn',
      'foot.copy':'© 2026 Altiva Limited · All rights reserved'
    },

    fr: {
      // nav
      'nav.practice':   'Métier',
      'nav.work':       'Mandats',
      'nav.founder':    'Fondateur',
      'nav.process':    'Processus',
      'nav.cta':        'Entamer une conversation →',
      'nav.cta.short':  'Contact →',

      // hero
      'hero.title':     'Opérateur. <em>Pas</em><br>consultant.',
      'hero.meta.label1':'Sollicité quand',
      'hero.meta.val1':  'l\u2019exécution <span>est le goulot</span>',
      'hero.meta.label2':'Expérience',
      'hero.meta.val2':  '15<span>ans en direction opérationnelle</span>',
      'hero.meta.label3':'Expertise profonde',
      'hero.meta.val3':  'Asie-Pacifique<br>&amp; Europe',
      'hero.sub':        'Altiva intervient lorsque la stratégie est claire et la croissance présente, mais que l\u2019organisation n\u2019avance plus. <b>Un opérateur senior, dans l\u2019entreprise, jusqu\u2019à ce que la situation bouge.</b> Pas de junior, pas de théâtre de slides, pas de distance.',
      'hero.cta.primary':'Entamer une conversation',
      'hero.cta.ghost':  'Voir les mandats',

      // ticker
      'tk.1': 'COO à temps partagé',
      'tk.2': 'Programmes de transformation',
      'tk.3': 'Exécution post-acquisition',
      'tk.4': 'Expansion internationale',
      'tk.5': 'IA, intégrée à la réalité opérationnelle',
      'tk.6': 'Activation go-to-market',
      'tk.7': 'Equity Story &amp; préparation de cession',
      'tk.8': 'Hong Kong · Europe · Asie-Pacifique',

      // practice
      'prac.mark.num':  '§ I.',
      'prac.mark.1':    'Métier',
      'prac.mark.2':    'Six mandats',
      'prac.h':         'Le travail, <em>dit</em> simplement.',
      'prac.lede':      'L\u2019appel survient généralement quand un programme de transformation n\u2019aboutit pas, qu\u2019un siège de COO est vacant, qu\u2019une intégration post-acquisition doit être structurée, ou qu\u2019une expansion transfrontalière atteint ses limites opérationnelles - lorsque les équipes internes sont compétentes mais saturées, mal alignées, ou sans véritable propriétaire.',
      'prac.callout.h': 'La différence',
      'prac.callout.p': 'Altiva n\u2019est ni un cabinet de conseil, ni un réseau de freelances. C\u2019est un opérateur senior, engagé personnellement, qui apporte une vraie expérience P&amp;L là où elle manque. Les résultats se mesurent en réalité opérationnelle - impact commercial, capacité organisationnelle, préparation d\u2019opération - pas en livrables.',

      'm1.num':'Mandat 01','m1.t':'COO, <em>à la demande.</em>','m1.d':'Direction intérimaire ou à temps partagé - transformation, croissance, redressement. Installé dans l\u2019entreprise jusqu\u2019à ce que le travail avance.','m1.tag':'Intérim · Temps partagé',
      'm2.num':'Mandat 02','m2.t':'Conseil <em>de haut niveau.</em>','m2.d':'Clarté stratégique avec engagement dans l\u2019exécution. Pas un conseil à distance - un jugement porté dans la pièce.','m2.tag':'Conseil · CEO',
      'm3.num':'Mandat 03','m3.t':'Transformation &amp; <em>IA</em>.','m3.d':'Programmes métiers, résultats opérationnels mesurables. IA absorbée dans la réalité opérationnelle, pas posée par-dessus.','m3.tag':'Direction de programme',
      'm4.num':'Mandat 04','m4.t':'Go-to-market &amp; <em>croissance</em>.','m4.d':'Structuration et activation commerciale - canaux, partenaires, nouveaux marchés. Conçu pour convertir en Europe et en Asie.','m4.tag':'Commercial',
      'm5.num':'Mandat 05','m5.t':'Revue opérationnelle &amp; <em>efficacité.</em>','m5.d':'Diagnostic, revue de structure de coûts, initiatives d\u2019efficacité. Missions courtes ou étendues - résultats documentés en P&amp;L.','m5.tag':'Diagnostic',
      'm6.num':'Mandat 06','m6.t':'Préparation de <em>transaction.</em>','m6.d':'Levée, cession ou repositionnement. Crédibilité opérationnelle et narratif investisseur construits sur l\u2019évidence - pas sur PowerPoint.','m6.tag':'Equity Story · Cession',

      // work (selected engagements)
      'work.mark.num': '§ II.',
      'work.mark.1':   'Mandats sélectionnés',
      'work.mark.2':   'Anonymisés',
      'work.h':        'Des situations, <em>débloquées.</em>',
      'work.lede':     'Six mandats, sélectionnés. De vrais sièges d\u2019opérateur, un vrai P&amp;L, de vrais résultats - sur six géographies et trois continents.',

      'w1.yr':'01 - COO, à la demande',           'w1.t':'COO, <em>automation</em> &amp; smart building','w1.body':'Repris une entreprise en difficulté opérationnelle. Pilotage d\u2019un reset complet - reconstruction de la delivery, restructuration de l\u2019équipe, rétablissement des standards d\u2019exécution, repositionnement pour la croissance.','w1.geo':'France · Caraïbes · Suisse','w1.outA':'10 M€ de revenus annuels adossés à une forte rentabilité','w1.outB':'Équipe de 50+ personnes construite et dirigée, P&amp;L assumé',
      'w2.yr':'02 - Conseil de haut niveau',      'w2.t':'Environnement exécutif, <em>Fortune 500</em> industriel','w2.body':'Conception et exploitation d\u2019outils digitaux pour le top management - dont CEO et Comex - dans une organisation décentralisée, multi-pays.','w2.geo':'Global','w2.outA':'200 dirigeants accompagnés dans 20+ pays','w2.outB':'Exécution dans des environnements sans droit à l\u2019erreur',
      'w3.yr':'03 - Transformation &amp; IA',     'w3.t':'<em>Transformation</em> régionale, services','w3.body':'Programme complet couvrant les opérations, la supply chain, l\u2019expérience client et l\u2019exécution commerciale.','w3.geo':'APAC &amp; Moyen-Orient','w3.outA':'Périmètre de 500 M€','w3.outB':'Croissance annuelle de 15 % · 4 fonctions verticalisées',
      'w4.yr':'04 - Programme canal','w4.t':'Programme <em>canal</em>, électriciens','w4.body':'Construction et mise à l\u2019échelle d\u2019un programme canal vers les électriciens - fidélisation, préférence de marque, formation, outils de productivité - déployé sur des marchés stratégiques en lien avec un réseau de distributeurs.','w4.geo':'40+ pays','w4.outA':'Préférence de marque renforcée','w4.outB':'Engagement direct fort &amp; réseau de distributeurs activé sur 40+ marchés',
      'w5.yr':'05 - Revue opérationnelle',        'w5.t':'Optimisation <em>opérations</em>, IT services','w5.body':'Optimisation de la performance des services collaboratifs à grande échelle. Simplification des workflows, amélioration de l\u2019adoption utilisateur, alignement outils/besoins opérationnels.','w5.geo':'Chine continentale, Hong Kong &amp; Taïwan','w5.outA':'10 000+ utilisateurs servis','w5.outB':'Gains d\u2019efficacité par workflow &amp; outils',
      'w6.yr':'06 - Préparation de transaction', 'w6.t':'<em>Repositionnement</em> opérationnel, avant cession','w6.body':'Reconstruction de la crédibilité opérationnelle, stabilisation de la performance, structuration de l\u2019entreprise au service d\u2019un narratif de sortie plus fort.','w6.geo':'Europe','w6.outA':'Rentabilité restaurée · valorisation 0 → 7 M€','w6.outB':'Sortie de l\u2019actionnaire minoritaire &amp; recapitalisation du fondateur',

      // founder
      'fnd.mark.num':'§ III.','fnd.mark.1':'Le fondateur','fnd.mark.2':'Un opérateur',
      'fnd.h':'Julien <em>Levet.</em>',
      'fnd.bio.1':'Opérateur senior avec <b>plus de quinze ans</b> d\u2019expérience internationale en Europe et en Asie - à l\u2019articulation entre stratégie et exécution, dans des environnements exigeants.',
      'fnd.bio.2':'Ancien de <b>Schneider Electric</b> - postes seniors en transformation digitale, services et go-to-market global dans plus de quarante pays, en environnements complexes et à haute performance.',
      'fnd.bio.3':'Plus récemment <b>COO d\u2019OÏKO</b> - pilotage du redressement opérationnel, repositionnement en vue d\u2019une cession, initiatives de croissance multi-pays. Douze ans installé en Asie (Chine, Singapour, Hong Kong, Indonésie).',
      'fnd.pull':'« Altiva n\u2019est pas un cabinet de conseil traditionnel. J\u2019agis en opérateur engagé personnellement, pour faire avancer les situations - quand l\u2019exécution interne ne suffit plus. »',
      'fnd.signoff':'Fondateur &amp; Principal · Altiva Limited · Hong Kong',
      'fnd.geo':'A vécu et travaillé en France, aux États-Unis, en Chine, à Singapour, à Hong Kong et en Indonésie.',
      'fnd.portrait.role':'Fondateur &amp; Principal · Altiva Limited',

      // process
      'proc.mark.num':'§ IV.','proc.mark.1':'Déroulé d\u2019un mandat','proc.mark.2':'Du premier appel à la passation',
      'proc.h':'Engagé <em>personnellement.</em><br>Passé proprement.',
      'p1.tag':'Premier appel','p1.h':'Lecture de situation.','p1.p':'Une conversation de trente minutes. Directe, confidentielle, avec Julien personnellement. Pas de deck préparé ; une vraie lecture de la situation, oui.','p1.dur':'30 min',
      'p2.tag':'Cadrage','p2.h':'Mandat écrit.','p2.p':'Un mandat d\u2019une page - périmètre, cadence, résultats attendus, durée. Assez court pour être validé en une réunion ; assez précis pour être utile.','p2.dur':'~1 semaine',
      'p3.tag':'En poste','p3.h':'Engagement personnel.','p3.p':'Installé dans la cadence opérationnelle. Je porte le travail - je ne le supervise pas. Reporting sur la réalité opérationnelle, chaque semaine.','p3.dur':'3 – 12 mois',
      'p4.tag':'Passation','p4.h':'Situation débloquée.','p4.p':'Capacité transférée à un opérateur permanent ou rendue aux fondateurs. Sortie propre - Altiva est conçu pour partir.','p4.dur':'Sortie propre',

      // contact
      'ctc.mark.num':'§ V.','ctc.mark.1':'Contact','ctc.mark.2':'Réponse sous deux jours ouvrés',
      'ctc.h':'Quand la situation <em>doit bouger.</em>',
      'ctc.lede':'Un mot court suffit. Julien lit et répond personnellement — en général le jour même, toujours sous deux jours ouvrés.',
      'ctc.cta.write':'Ou écrire directement','ctc.cta.book':'Réserver un appel de 30 min',
      'ctc.form.name':'Nom','ctc.form.email':'Email','ctc.form.company':'Société','ctc.form.topic':'Sujet',
      'ctc.form.topic.advisory':'Advisory','ctc.form.topic.audit':'Audit','ctc.form.topic.intro':'Introduction','ctc.form.topic.other':'Autre',
      'ctc.form.message':'Message','ctc.form.send':'Envoyer','ctc.form.note':'Sans tracking · Confidentiel',
      'ctc.card.h':'Siège social',
      'ctc.card.addr':'Altiva Limited<br>2/F West Wing, 822 Lai Chi Kok Road<br>Cheung Sha Wan, Hong Kong',
      'ctc.card.direct':'Direct','ctc.card.li':'LinkedIn',

      // footer
      'foot.meta':'Plateforme de conseil international. Hong Kong · Immatriculée 2025 · BR No. 78582830.<br>Pas d\u2019analytics. Pas de tracking.',
      'foot.email':'Email','foot.linkedin':'LinkedIn',
      'foot.copy':'© 2026 Altiva Limited · Tous droits réservés'
    }
  };

  function apply(lang){
    const dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // format: "aria-label:key;title:key"
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key].replace(/<[^>]+>/g,''));
      });
    });

    // Update lang toggle visuals
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
    });

    // Update document title + core SEO meta (helps Google see FR vs EN signals)
    const titles = {
      en: 'Altiva — Operator-led advisory. Fractional COO · Hong Kong & APAC · Europe.',
      fr: 'Altiva — Conseil piloté par un opérateur. COO à temps partagé · Hong Kong & APAC · Europe.'
    };
    const descs = {
      en: 'Altiva is a senior operator engaged when execution becomes the bottleneck. Fractional COO, transformation, and strategic mandates across Europe and Asia-Pacific. Founded by Julien Levet in Hong Kong.',
      fr: 'Altiva est un opérateur senior engagé lorsque l\u2019exécution devient le goulot d\u2019étranglement. COO à temps partagé, transformation et mandats stratégiques entre l\u2019Europe et l\u2019Asie-Pacifique. Fondé par Julien Levet à Hong Kong.'
    };
    const ogTitles = {
      en: 'Altiva — Operator, not consultant.',
      fr: 'Altiva — Opérateur, pas consultant.'
    };
    document.title = titles[lang] || titles.en;
    // Update html[lang]
    document.documentElement.setAttribute('lang', lang);
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descs[lang] || descs.en);
    // Update Open Graph locale + title + description
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', ogTitles[lang] || ogTitles.en);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', descs[lang] || descs.en);
    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', ogTitles[lang] || ogTitles.en);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', descs[lang] || descs.en);
  }

  function setLang(lang, fromUser){
    if (lang !== 'fr' && lang !== 'en') return;
    try { if (fromUser) localStorage.setItem('altiva.lang', lang); } catch(e){}
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    } catch(e){}
    apply(lang);
  }

  // Boot
  const initial = detect();
  window.Altiva = window.Altiva || {};
  window.Altiva.i18n = { setLang, apply, detect, get current(){ return document.documentElement.getAttribute('lang') || 'en'; } };
  document.addEventListener('DOMContentLoaded', ()=>{
    apply(initial);
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', (e) => {
        e.preventDefault();
        setLang(b.getAttribute('data-lang-btn'), true);
      });
    });
  });
})();
