/* ============================
   Read more module (FIXED)
   - No nested .content-area
   - #content is replaced with:
       - state.renderList()   (must include .content-area inside)
       - or a detail wrapper  <div class="content-area">...</div>
   - Navigation uses toolbar arrows (back/forward)
   - Exposes:
     ReadMore.init({ renderList, onAfterListRender })
     ReadMore.open(projectId)
     ReadMore.navBack()
     ReadMore.navForward()
     ReadMore.isDetail()
     ReadMore.canGoBack()
     ReadMore.canGoForward()
============================ */

(function () {
  const state = {
    lastScrollTop: 0,
    renderList: null,
    onAfterListRender: null,

    stack: [],     // { type:'list' } | { type:'detail', id }
    idx: -1
  };

  // ====== DATA ======
  const PROJECTS = {
    verde_credit_cards_dashboard: {
      title: "VERDE Financial Group — Dashboard Cartes de Crédit",
      tags: ["Services Financiers", "Analyse Carte & Risque", "Power BI"],
      summary:
        "Dashboard stratégique permettant de piloter l’activité cartes de crédit, les revenus associés, le niveau d’encours, les impayés et la performance transactionnelle à l’échelle multi-pays.",
      pages: [
        {
          title: "Landing — Credit Cards Dashboard",
          image: "images/Projet1/1.gif",
          description:
            "Page d’introduction positionnant la solution comme un outil de pilotage data-driven dédié à la performance cartes et à la maîtrise du risque."
        },
        {
          title: "Vue Globale — Performance Clients & Revenus",
          image: "images/Projet1/2.png",
          description:
            "Vision consolidée du portefeuille : total clients, cartes et revenus, avec répartition par filiale et tendances mensuelles pour identifier la dynamique régionale."
        },
        {
          title: "Cartes de Crédit — Activité & Utilisation",
          image: "images/Projet1/3.png",
          description:
            "Suivi opérationnel des cartes émises, utilisées et actives, avec analyse par ligne de produit et évolution mensuelle pour mesurer l’adoption et l’engagement."
        },
        {
          title: "Revenus — Rentabilité & Risque",
          image: "images/Projet1/4.png",
          description:
            "Analyse détaillée des sources de revenus (intérêts, transactions, pénalités), encours, taux d’impayés et taux de recouvrement pour piloter la rentabilité et le risque crédit."
        }
      ]
    },

    education_kpi_dashboard: {
      title: "Tableau de bord Éducation — KPI & Pilotage (Maternelle & Primaire)",
      tags: ["Secteur public", "Éducation", "Pilotage national", "Power BI"],
      summary:
        "Plateforme de pilotage du sous-secteur maternel/primaire : suivre les effectifs, les écoles, les enseignants, les infrastructures et identifier rapidement les écarts pour orienter les décisions.",
      pages: [
        {
          title: "Landing — Accueil",
          image: "images/Projet2/1.gif",
          description:
            "Point d’entrée : la promesse est claire — transformer les données scolaires en décisions rapides."
        },
        {
          title: "Tableau de bord — Vue d’ensemble",
          image: "images/Projet2/2.png",
          description:
            "Le « pouls » national : écoles, enseignants, élèves + vues par type/statut et zones pour repérer où agir en priorité."
        },
        {
          title: "Écoles — Infrastructures & dispositifs",
          image: "images/Projet2/3.png",
          description:
            "Zoom terrain : accessibilité, inondations, électricité, eau, cantine, latrines… pour cibler les écoles à risque et les besoins urgents."
        },
        {
          title: "Élèves — Effectifs & vulnérabilités",
          image: "images/Projet2/4.png",
          description:
            "Lecture sociale : répartition par classe/genre, redoublement, handicap et disparités territoriales pour prioriser les actions."
        }
      ]
    },

    crypto_trading_dashboard: {
      title: "Dashboard Trading Crypto & Intelligence Portefeuille",
      tags: ["FinTech", "Analytics Risque & Portefeuille", "Power BI"],
      summary:
        "Tableau de bord crypto avancé conçu pour suivre l’allocation d’actifs, la performance de trading, l’exposition au risque et les signaux de marché en temps réel.",
      pages: [
        { title: "Accueil — Introduction Plateforme Crypto", image: "images/Projet3/1.png", description: "Positionnement stratégique trading orienté performance." },
        { title: "Accueil — Instantané Marché", image: "images/Projet3/2.png", description: "Vue temps réel des paires principales et tendances." },
        { title: "Marchés — Vue Portefeuille & Risque", image: "images/Projet3/3.png", description: "Solde, P&L, exposition risque, ordres ouverts." },
        { title: "Portefeuille — Structure & Signaux Marché", image: "images/Projet3/4.png", description: "Dominance, volatilité, heatmap, watchlist." },
        { title: "Transferts — Exécution & Sécurité", image: "images/Projet3/5.png", description: "Transferts, frais, limites, statuts, 2FA." }
      ]
    },

    dabang_markets_dashboard: {
      title: "Dabang — Tableau de Bord Marchés (Opérations Retail)",
      tags: ["Retail", "Analytics Opérationnelle", "Power BI"],
      summary:
        "Tableau de bord opérationnel retail permettant aux managers de piloter en temps réel les ventes, la santé des stocks, l’efficacité logistique et les risques opérationnels.",
      pages: [
        { title: "Couverture — Markets Dashboard", image: "images/Projet4/1.gif", description: "Page d’entrée orientée performance." },
        { title: "Vue d’Ensemble — Performance Commerciale", image: "images/Projet4/2.png", description: "Ventes, commandes, croissance, satisfaction." },
        { title: "Commandes & Logistique — Suivi SLA", image: "images/Projet4/3.png", description: "Livraisons à l’heure, délais, retours, exceptions." },
        { title: "Produits — Stratégie Stock & Réassort", image: "images/Projet4/4.png", description: "Stocks faibles/ruptures et réassort priorisé." },
        { title: "Activités — Alertes & Monitoring Système", image: "images/Projet4/5.png", description: "Alertes, utilisateurs actifs, criticité incidents." }
      ]
    },

    acme_learning_dashboard: {
      title: "ACME — Tableau de Bord Performance & Engagement Formation",
      tags: ["Formation en Entreprise", "Analytics RH", "Power BI"],
      summary:
        "Suivre l’engagement, mesurer l’impact sur les connaissances et identifier les écarts de performance entre régions et équipes.",
      pages: [
        { title: "Vue Exécutive", image: "images/Projet5/1.png", description: "Positionnement stratégique du dashboard." },
        { title: "Engagement & Performance", image: "images/Projet5/2.png", description: "KPI d’engagement + dynamiques temporelles." },
        { title: "Benchmark Individuel & Équipes", image: "images/Projet5/3.png", description: "Classement, tendances, identification des écarts." },
        { title: "Impact & Progression", image: "images/Projet5/4.png", description: "Knowledge gain, durée session, écarts régionaux." }
      ]
    },

    snowui_business_dashboard: {
      title: "SnowUI — Tableau de Bord Business & eCommerce",
      tags: ["Analytics Digitale", "Suivi Performance", "Power BI"],
      summary:
        "Suivre la croissance utilisateurs, la performance projets et les revenus eCommerce pour soutenir la décision.",
      pages: [
        { title: "Accueil — Introduction SnowUI", image: "images/Projet6/1.png", description: "Entry page orientée pilotage." },
        { title: "Vue d’Ensemble — Croissance", image: "images/Projet6/2.png", description: "Users, visits, devices, géographie." },
        { title: "Projets — Performance", image: "images/Projet6/3.png", description: "Suivi statuts, montants, avancement." },
        { title: "eCommerce — Revenus", image: "images/Projet6/4.png", description: "Online/offline, top produits, satisfaction." }
      ]
    }
  };

  // ===== helpers =====
  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderTags(tags) {
    return (tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  }

  function getListArea() {
    // when list is rendered by createContent(), it must contain .content-area
    return document.querySelector("#content .content-area") || document.querySelector(".content-area");
  }

  function pushHistory(entry) {
    if (state.idx < state.stack.length - 1) {
      state.stack = state.stack.slice(0, state.idx + 1);
    }
    state.stack.push(entry);
    state.idx = state.stack.length - 1;
  }

  function current() {
    if (state.idx < 0) return null;
    return state.stack[state.idx];
  }

  function isDetail() {
    const c = current();
    return !!(c && c.type === "detail");
  }

  function canGoBack() {
    return state.idx > 0;
  }

  function canGoForward() {
    return state.idx >= 0 && state.idx < state.stack.length - 1;
  }

  // ===== rendering (NO nesting) =====
  function renderList(push = false) {
    const content = document.getElementById("content");
    if (!content || !state.renderList) return;

    content.innerHTML = state.renderList();

    // rebind stuff after list render
    if (typeof state.onAfterListRender === "function") state.onAfterListRender();
    bindReadMoreLinks(content);

    // restore list scroll
    const area = getListArea();
    if (area) area.scrollTop = state.lastScrollTop || 0;

    if (push) pushHistory({ type: "list" });
  }

  function renderDetail(projectId, push = false) {
    const content = document.getElementById("content");
    if (!content) return;

    const p = PROJECTS[projectId];
    const html = p ? `
      <section class="project-detail">
        <div class="project-detail-top">
          <div class="project-detail-head">
            <h2 class="project-detail-title">${escapeHtml(p.title)}</h2>
            <div class="project-tags">${renderTags(p.tags)}</div>
          </div>
        </div>

        <p class="project-detail-summary">${escapeHtml(p.summary)}</p>

        <div class="project-detail-pages">
          <h3 class="project-detail-subtitle">Pages du projet</h3>

          ${(p.pages || []).map((pg, idx) => `
            <article class="project-page">
              <div class="project-page-media">
                <img
                  src="${escapeHtml(pg.image)}"
                  alt="${escapeHtml(p.title)} — ${escapeHtml(pg.title || `Page ${idx + 1}`)}"
                  loading="lazy"
                >
              </div>
              <div class="project-page-text">
                <h4 class="project-page-title">${escapeHtml(pg.title || `Page ${idx + 1}`)}</h4>
                <p class="project-page-desc">${escapeHtml(pg.description || "")}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    ` : `
      <section class="project-detail">
        <p class="project-detail-summary">Projet introuvable.</p>
      </section>
    `;

    // IMPORTANT: detail always wrapped once in .content-area
    content.innerHTML = `<div class="content-area">${html}</div>`;

    const area = getListArea();
    if (area) area.scrollTop = 0;

    if (push) pushHistory({ type: "detail", id: projectId });
  }

  // ===== public actions =====
  function open(projectId) {
    // save list scroll before leaving list
    const area = getListArea();
    if (area) state.lastScrollTop = area.scrollTop || 0;

    renderDetail(projectId, true);
  }

  function navBack() {
    // If no history: if currently detail -> list
    if (state.idx <= 0) {
      if (isDetail()) renderList(true);
      return;
    }

    state.idx -= 1;
    applyHistoryState();
  }

  function navForward() {
    if (!canGoForward()) return;
    state.idx += 1;
    applyHistoryState();
  }

  function applyHistoryState() {
    const entry = current();
    if (!entry) return;

    if (entry.type === "list") {
      renderList(false);
    } else {
      renderDetail(entry.id, false);
    }
  }

  function bindReadMoreLinks(root = document) {
    root.querySelectorAll("[data-readmore]").forEach((el) => {
      if (el.dataset.rmBound === "1") return;
      el.dataset.rmBound = "1";

      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("data-readmore");
        if (id) open(id);
      });
    });
  }

  // ===== API =====
  window.ReadMore = {
    init({ renderList, onAfterListRender } = {}) {
      state.renderList = renderList;
      state.onAfterListRender = onAfterListRender;

      // initial history = list
      if (state.idx === -1) pushHistory({ type: "list" });

      // initial bind
      bindReadMoreLinks(document);
    },

    bind: bindReadMoreLinks,
    open,
    navBack,
    navForward,

    isDetail,
    canGoBack,
    canGoForward
  };
})();