function createSidebar() {
  return `
    <div class="sidebar">
      <div class="profile-pic">
        <div class="avatar-coin">
          <div class="avatar-face front">DA</div>
          <div class="avatar-face back"></div>
        </div>
      </div>

      <h1 class="name">Déodat AGANON</h1>
      <p class="title">Consultant BI & Data Analyst</p>
      <p class="location">Basé à Casablanca, Maroc</p>

<!-- ✅ KPIs -->
<div class="sidebar-kpis" aria-label="Key metrics">
  <span class="kpi-text kpi-sweep">
    <span id="yearsExpValue">2</span>+ years exp
  </span>

  <span class="kpi-separator" aria-hidden="true">•</span>

  <span class="kpi-text kpi-sweep delay-1">
    5+ certifications
  </span>

  <span class="kpi-separator" aria-hidden="true">•</span>

  <span class="kpi-text kpi-sweep delay-2">
    10+ projects
  </span>
</div>

<div class="social-icons">

  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/deodataganon"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  <!-- Medium (logo officiel "M") -->
  <a href="https://medium.com/@deodataganon"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Medium">
    <svg viewBox="0 0 1043.63 592.71" fill="currentColor" aria-hidden="true">
      <path d="M588.67 296.35c0 163.59-131.86 296.36-294.33 296.36C131.86 592.71 0 459.94 0 296.35 0 132.77 131.86 0 294.34 0c162.47 0 294.33 132.77 294.33 296.35z"/>
      <path d="M911.54 296.35c0 154.02-65.93 278.9-147.16 278.9-81.23 0-147.16-124.88-147.16-278.9C617.22 142.33 683.15 17.45 764.38 17.45c81.23 0 147.16 124.88 147.16 278.9z"/>
      <path d="M1043.63 296.35c0 138.02-23.62 249.89-52.75 249.89-29.13 0-52.75-111.87-52.75-249.89s23.62-249.89 52.75-249.89c29.13 0 52.75 111.87 52.75 249.89z"/>
    </svg>
  </a>

  <!-- Location (Casablanca on Google Maps) -->
  <a href="https://www.google.com/maps?q=Casablanca"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Location: Casablanca">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  </a>

  <!-- Email -->
  <a href="mailto:aganondeodat@gmail.com" class="email-btn">email me</a>

</div>

      <div>
        <h3 class="section-title">A PROPOS</h3>
        <p class="about-text">
           Orienté résolution de problèmes, j’aide les entreprises à trouver des <span>insights</span> exploitables à partir de leurs <span>données</span> afin de produire des décisions fiables.        
        </p>
      </div>

    <div>
      <h3 class="section-title">Certifications</h3>

      <div class="certifs">

        <div class="certif-item">
          <div class="certif-logo fabric"></div>
          <div class="certif-text">DP-600 Fabric Analytics Engineer Associate</div>
        </div>

        <div class="certif-item">
          <div class="certif-logo powerbi"></div>
          <div class="certif-text">PL-300 Power BI Data Analyst Associate</div>
        </div>

        <div class="certif-item">
          <div class="certif-logo azure"></div>
          <div class="certif-text">AZ-700  Microsoft Azure Networking Solutions</div>
        </div>

        <div class="certif-item">
          <div class="certif-logo ga"></div>
          <div class="certif-text">Expert Google Analytics</div>
        </div>

      </div>
    </div>

      <div class="skills-section">
        <h3 class="section-title">Skills</h3>

        <div class="skills-group">
          <div class="skills-label">Visualisations</div>
          <div class="skills">
            <span class="skill-badge">Power BI (Cloud & On-Prem)</span>
            <span class="skill-badge">Qlik Sense</span>
          </div>
        </div>

        <div class="skills-group">
          <div class="skills-label">Databases</div>
          <div class="skills">
            <span class="skill-badge">MySQL</span>
            <span class="skill-badge">SQL Server</span>
            <span class="skill-badge">Oracle</span>
          </div>
        </div>

        <div class="skills-group">
          <div class="skills-label">Langages de programmation</div>
          <div class="skills">
            <span class="skill-badge">SQL</span>
            <span class="skill-badge">PL/SQL</span>
            <span class="skill-badge">Python</span>
            <span class="skill-badge">Java</span>
            <span class="skill-badge">JavaScript</span>
            <span class="skill-badge">PHP</span>
            <span class="skill-badge">C</span>
          </div>
        </div>

        <div class="skills-group">
          <div class="skills-label">Outils & langages</div>
          <div class="skills">
            <span class="skill-badge">DAX</span>
            <span class="skill-badge">M</span>
            <span class="skill-badge">Git</span>
            <span class="skill-badge">HTML</span>
            <span class="skill-badge">CSS</span>
          </div>
        </div>
      </div>
    </div>
  `;
}