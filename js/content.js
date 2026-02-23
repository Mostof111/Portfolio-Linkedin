function createContent() {
  return `
    <div class="content-area">
      <section>
        <h2 class="section-title">Projets</h2>

        <div class="projects-grid">

          <!-- VERDE -->
          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet5">
              <div class="carousel-track">
                  <video class="carousel-video" autoplay muted loop playsinline preload="metadata">
                    <source src="images/Projet1/1.webm" type="video/webm">
                  </video>                
                <img src="images/Projet1/2.webp" alt="Projet 1 - 2">
                <img src="images/Projet1/3.webp" alt="Projet 1 - 3">
                <img src="images/Projet1/4.webp" alt="Projet 1 - 4">
              </div>
            </div>

            <h3 class="project-title">VERDE — Dashboard Cartes de Crédit</h3>

            <div class="project-tags">
              <span class="tag">Services Financiers</span>
              <span class="tag">Analyse Carte &amp; Risque</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Dashboard stratégique de pilotage cartes de crédit permettant de suivre la croissance du portefeuille, la performance transactionnelle, les encours, les impayés et la rentabilité multi-pays.
            </p>

            <a href="#" class="read-more" data-readmore="verde_credit_cards_dashboard">
              En savoir plus →
            </a>
          </div>

          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet2">
              <div class="carousel-track">
                  <video class="carousel-video" autoplay muted loop playsinline preload="metadata">
                    <source src="images/Projet2/1.webm" type="video/webm">
                  </video>
                  <img src="images/Projet2/2.webp" alt="Éducation - 2">
                <img src="images/Projet2/3.webp" alt="Éducation - 3">
                <img src="images/Projet2/4.webp" alt="Éducation - 4">
              </div>
            </div>

            <h3 class="project-title">Éducation — Tableau de bord KPI (Maternelle & Primaire)</h3>

            <div class="project-tags">
              <span class="tag">Secteur public</span>
              <span class="tag">Pilotage Éducation</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Plateforme de pilotage permettant de suivre écoles, enseignants et élèves, et de mettre en évidence les écarts d’infrastructures et de performance pour orienter rapidement les priorités.
            </p>

            <a href="#" class="read-more" data-readmore="education_kpi_dashboard">
              En savoir plus →
            </a>
          </div>


          <!-- CRYPTO -->
          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet3">
              <div class="carousel-track">
                <img src="images/Projet3/1.webp" alt="Projet 3 - 1">
                <img src="images/Projet3/2.webp" alt="Projet 3 - 2">
                <img src="images/Projet3/3.webp" alt="Projet 3 - 3">
                <img src="images/Projet3/4.webp" alt="Projet 3 - 4">
                <img src="images/Projet3/5.webp" alt="Projet 3 - 5">
              </div>
            </div>

            <h3 class="project-title">Dashboard Trading Crypto &amp; Intelligence Portefeuille</h3>

            <div class="project-tags">
              <span class="tag">FinTech</span>
              <span class="tag">Analyse Risque &amp; Portefeuille</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Dashboard crypto en temps réel permettant de suivre la performance du portefeuille, la volatilité du marché, l’allocation d’actifs et les risques transactionnels afin d’appuyer les décisions de trading.
            </p>

            <a href="#" class="read-more" data-readmore="crypto_trading_dashboard">
              En savoir plus →
            </a>
          </div>

          <!-- DABANG -->
          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet4">
              <div class="carousel-track">
                  <video class="carousel-video" autoplay muted loop playsinline preload="metadata">
                    <source src="images/Projet4/1.webm" type="video/webm">
                  </video>
                <img src="images/Projet4/2.webp" alt="Projet 2 - 2">
                <img src="images/Projet4/3.webp" alt="Projet 4 - 3">
                <img src="images/Projet4/4.webp" alt="Projet 4 - 4">
                <img src="images/Projet4/5.webp" alt="Projet 4 - 5">
              </div>
            </div>

            <h3 class="project-title">Dabang — Tableau de Bord Opérations Retail</h3>

            <div class="project-tags">
              <span class="tag">Retail</span>
              <span class="tag">Analyse Opérationnelle</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Tableau de bord retail permettant de piloter les ventes quotidiennes, la santé des stocks, la performance logistique et les alertes opérationnelles. Il met en évidence les risques de rupture, l’efficacité des livraisons et les indicateurs de service.
            </p>

            <a href="#" class="read-more" data-readmore="dabang_markets_dashboard">
              En savoir plus →
            </a>
          </div>

          <!-- ACME -->
          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet1">
              <div class="carousel-track">
                <img src="images/Projet5/1.webp" alt="Projet 5 - 1">
                <img src="images/Projet5/2.webp" alt="Projet 5 - 2">
                <img src="images/Projet5/3.webp" alt="Projet 5 - 3">
                <img src="images/Projet5/4.webp" alt="Projet 5 - 4">
              </div>
            </div>

            <h3 class="project-title">ACME — Tableau de Bord Performance &amp; Engagement Formation</h3>

            <div class="project-tags">
              <span class="tag">Formation en Entreprise</span>
              <span class="tag">Analyse de Performance</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Tableau de bord piloté par la donnée permettant de suivre l’engagement des collaborateurs et l’impact des formations. Il analyse les activités totales, les sessions actives, le taux de complétion, la progression des connaissances et les forces/faiblesses par thématique afin d’optimiser la performance.
            </p>

            <a href="#" class="read-more" data-readmore="acme_learning_dashboard">
              En savoir plus →
            </a>
          </div>

          
          <!-- SNOWUI -->
          <!--
          <div class="project-card">
            <div class="project-image project-carousel" data-carousel="projet4">
              <div class="carousel-track">
                <img src="images/Projet6/1.webp" alt="Projet 6 - 1">
                <img src="images/Projet6/2.webp" alt="Projet 6 - 2">
                <img src="images/Projet6/3.webp" alt="Projet 6 - 3">
                <img src="images/Projet6/4.webp" alt="Projet 6 - 4">
              </div>
            </div>

            <h3 class="project-title">SnowUI — Tableau de Bord Business &amp; eCommerce</h3>

            <div class="project-tags">
              <span class="tag">Analyse Digitale</span>
              <span class="tag">Suivi de Performance</span>
              <span class="tag">Power BI</span>
            </div>

            <p class="project-description">
              Dashboard business complet permettant de suivre la croissance des utilisateurs, la performance des projets et les revenus eCommerce afin de soutenir des décisions stratégiques basées sur la donnée.
            </p>

            <a href="#" class="read-more" data-readmore="snowui_business_dashboard">
              En savoir plus →
            </a>
          </div>
          -->

        </div>
      </section>

      <section class="xp-section">
        <div class="xp-section-wrap">
          <div class="xp-header">
            <h2 class="section-title">CE QUE JE FAIS</h2>
            <div class="xp-subtitle">BI / Data / Gouvernance</div>
          </div>

          <div class="xp-grid">
            <!-- 1 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path d="M7 20h10"></path>
                      <path d="M12 16v4"></path>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Pilotage &amp; Plateforme BI</h3>
                </div>
                <span class="xp-pill">Run • Monitoring</span>
              </div>

              <p class="xp-text">
  Structuration et fiabilisation de l’écosystème BI (conception → déploiement → run) afin d’assurer la continuité de service, la traçabilité et une plateforme facile à maintenir.
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>Standards de dev &amp; déploiement (workspaces, dataflows, datasets)</li>
                  <li>Process d’exploitation &amp; support (incidents / changements)</li>
                  <li>Documentation &amp; gouvernance (naming, lineage, accès)</li>
                </ul>
              </div>
            </article>

            <!-- 2 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 3a9 9 0 1 0 9 9"></path>
                      <path d="M12 12l5-3"></path>
                      <path d="M20 12h1"></path>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Performance Power BI</h3>
                </div>
                <span class="xp-pill">Modèle • DAX</span>
              </div>

              <p class="xp-text">
  Accélération de l’expérience utilisateur et réduction des coûts d’exploitation en optimisant les modèles et le DAX (refresh plus rapide, visuels plus réactifs, meilleure scalabilité).
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>Réduction cardinalité + schémas étoile</li>
                  <li>Refacto DAX (variables, context, itérations)</li>
                  <li>Bonnes pratiques (partitions, incremental refresh)</li>
                </ul>
              </div>
            </article>

            <!-- 3 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z"></path>
                      <path d="M9 12l2 2 4-5"></path>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Sécurité &amp; Governance</h3>
                </div>
                <span class="xp-pill">RLS • AD Groups</span>
              </div>

              <p class="xp-text">
  Sécurisation d’accès aux données à grande échelle en standardisant la gouvernance (RLS, rôles, groupes AD) pour garantir conformité, contrôle et autonomie des équipes.
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>RLS scalable (bridge tables, mapping rôles)</li>
                  <li>Modèle d’accès (workspaces, apps, audiences)</li>
                  <li>Conformité &amp; revue des permissions</li>
                </ul>
              </div>
            </article>

            <!-- 4 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Monitoring de la plateforme</h3>
                </div>
                <span class="xp-pill">Admin • Observabilité</span>
              </div>

              <p class="xp-text">
  Création de plateforme observable et pilotable via des dashboards d’admin (usage, refresh, erreurs, SLA) pour détecter tôt les dérives et améliorer la qualité de service.
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>Suivi refresh, erreurs, SLA, volumétrie</li>
                  <li>Usage &amp; adoption (audiences, views, churn)</li>
                  <li>Alerting &amp; diagnostics des lenteurs</li>
                </ul>
              </div>
            </article>

            <!-- 5 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M2 12h20"></path>
                      <path d="M12 2c3 3 3 17 0 20"></path>
                      <path d="M12 2c-3 3-3 17 0 20"></path>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Multilingue</h3>
                </div>
                <span class="xp-pill">Accessibilité</span>
              </div>

              <p class="xp-text">
  Industrialisation de la traduction des rapports en plusieurs langues pour un déploiement international, garantissant cohérence des KPI et maintenance simple à mesure que les contenus évoluent.
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>Tables de traductions (titres, libellés)</li>
                  <li>Paramétrage mesures traduites + filtres langue</li>
                  <li>Convention &amp; maintenance (scale)</li>
                </ul>
              </div>
            </article>

            <!-- 6 -->
            <article class="xp-card" tabindex="0">
              <div class="xp-top">
                <div class="xp-left">
                  <div class="xp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
                    </svg>
                  </div>
                  <h3 class="xp-card-title">Automatisation &amp; Migration</h3>
                </div>
                <span class="xp-pill">ADF • Qlik → Power BI</span>
              </div>

             <p class="xp-text">
  Automatisation et fiabilisation des chaînes de refresh, tout en accompagnant la migration Qlik → Power BI, afin de standardiser les usages et accélérer l’adoption côté métiers.
</p>

              <div class="xp-details">
                <ul class="xp-list">
                  <li>Chaînes refresh (dépendances, orchestration)</li>
                  <li>Standardisation datasets / dataflows</li>
                  <li>Migration &amp; conduite du changement</li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </section>

<section class="contact-section" id="contact">
  <div class="contact-card">
    <div class="contact-head">
      <div>
        <h2 class="contact-title">Let’s talk</h2>
        <p class="contact-subtitle">A short message is enough. I’ll reply quickly.</p>
      </div>
      <span class="contact-mark" aria-hidden="true">✦</span>
    </div>

    <form class="contact-form" id="contactForm">
      <div class="contact-row">
        <label class="field">
          <span class="label">Full name</span>
          <input class="input" type="text" name="name" placeholder="Your name" autocomplete="name" required>
        </label>

        <label class="field">
          <span class="label">Email</span>
          <input class="input" type="email" name="email" placeholder="you@email.com" autocomplete="email" required>
        </label>
      </div>

      <label class="field">
        <span class="label">Message</span>
        <textarea class="textarea" name="message" rows="5"
          placeholder="Tell me about your need (dashboard, audit, optimization…)" required></textarea>
      </label>

      <div class="contact-actions">
        <button class="btn primary" type="submit">Send email</button>
      </div>

      <div class="contact-foot">
        <span class="contact-note">Email • Usually replies within 24–48h</span>
      </div>
    </form>
  </div>
</section>      

    </div>
  `;
}
