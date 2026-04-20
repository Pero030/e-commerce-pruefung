// Global Header and Footer Loader for Analyse Tools
(function() {
  'use strict';

  // CSS Styles
  const styles = `
    <style>
      /* Global Header Styles */
      .global-header {
        background: #ffffff;
        border-bottom: 1px solid #d8e1ec;
        padding: 12px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
      }
      
      .header-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
      
      .header-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: #172033;
        font-weight: 700;
        font-size: 20px;
        white-space: nowrap;
        flex-shrink: 0;
      }
      
      .header-logo .logo-icon {
        font-size: 24px;
      }
      
      .header-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        justify-content: center;
      }
      
      .header-search {
        position: relative;
        display: flex;
        align-items: center;
      }
      
      .search-icon {
        position: absolute;
        left: 12px;
        color: #8e99ae;
        font-size: 14px;
        pointer-events: none;
      }
      
      .search-input {
        background: #f8fafc;
        border: 1px solid #d8e1ec;
        border-radius: 10px;
        padding: 10px 14px 10px 36px;
        font-size: 14px;
        color: #172033;
        width: 220px;
        transition: all 0.2s ease;
      }
      
      .search-input:focus {
        outline: none;
        border-color: #8e99ae;
        background: #ffffff;
      }
      
      .search-input::placeholder {
        color: #8e99ae;
      }
      
      .search-toggle {
        display: none;
        background: transparent;
        border: none;
        padding: 8px;
        cursor: pointer;
        border-radius: 8px;
        font-size: 18px;
      }
      
      .nav-dropdown {
        position: relative;
      }
      
      .nav-btn {
        background: transparent;
        border: none;
        padding: 10px 16px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #5b6678;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .nav-btn:hover {
        background: #f1f5f9;
        color: #172033;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #ffffff;
        border: 1px solid #d8e1ec;
        border-radius: 12px;
        padding: 8px;
        min-width: 200px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
        margin-top: 8px;
        z-index: 1001;
      }
      
      .dropdown-content a {
        display: block;
        padding: 10px 14px;
        text-decoration: none;
        color: #5b6678;
        font-size: 14px;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      
      .dropdown-content a:hover {
        background: #f1f5f9;
        color: #172033;
      }
      
      .nav-dropdown:hover .dropdown-content {
        display: block;
      }
      
      .hamburger-menu {
        display: none;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 8px;
        padding: 10px 12px;
        color: #172033;
        cursor: pointer;
        font-size: 18px;
        z-index: 1002;
      }
      
      .hamburger-menu:hover {
        background: rgba(255,255,255,0.2);
      }
      
      /* Mobile Navigation Overlay */
      .mobile-nav-overlay {
        display: none;
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #172033;
        z-index: 999;
        padding: 20px;
        overflow-y: auto;
      }
      
      .mobile-nav-overlay.active {
        display: block;
      }
      
      .mobile-nav-section {
        margin-bottom: 24px;
      }
      
      .mobile-nav-title {
        color: rgba(255,255,255,0.6);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 12px;
        font-weight: 600;
      }
      
      .mobile-nav-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .mobile-nav-links a {
        color: #fff;
        text-decoration: none;
        padding: 10px 0;
        font-size: 16px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      
      .mobile-nav-links a:hover {
        color: rgba(255,255,255,0.8);
      }
      
      @media (max-width: 1100px) {
        .header-nav { display: none; }
        .hamburger-menu { display: block; }
        .search-toggle {
          left: auto;
          right: 70px;
        }
      }
      
      /* Standard: Nur Icon, kein Input-Feld */
      .header-search .search-input {
        display: none;
      }
      
      .search-toggle {
        display: block;
      }
      
      .header-search {
        width: auto;
      }
      
      .search-icon {
        display: none;
      }
      
      /* Ab 1400px: Input-Feld sichtbar */
      @media (min-width: 1400px) {
        .header-search .search-input {
          display: block;
        }
        
        .search-toggle {
          display: none;
        }
        
        .search-icon {
          display: block;
        }
      }
      
      /* Footer Styles */
      .global-footer {
        background: #172033;
        color: rgba(255,255,255,0.7);
        padding: 20px;
      }
      
      .footer-container {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      
      .footer-left {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
      }
      
      .footer-left a {
        color: rgba(255,255,255,0.7);
        text-decoration: none;
      }
      
      .footer-left a:hover {
        color: #fff;
      }
      
      .footer-separator {
        opacity: 0.3;
      }
      
      .footer-right {
        font-size: 13px;
        opacity: 0.8;
      }
      
      @media (max-width: 960px) {
        .footer-container {
          flex-direction: column;
          text-align: center;
        }
      }
    </style>
  `;

  // Header HTML
  const headerHTML = `
    <header class="global-header">
      <div class="header-container">
        <a href="../../index.html" class="header-logo">
          <span class="logo-icon">📊</span>
          <span class="logo-text">Analyse Tools</span>
        </a>
        
        <button class="search-toggle" id="searchToggle" title="Suche öffnen">🔍</button>
        <button class="hamburger-menu" id="hamburgerMenu" title="Menü öffnen">☰</button>

        <nav class="header-nav">
          <div class="header-search">
            <span class="search-icon">🔍</span>
            <input id="searchInput" class="search-input" type="text" placeholder="Tool suchen..." />
          </div>
          <div class="nav-dropdown">
            <button class="nav-btn">Strategie ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/swot-analyse/">SWOT Analyse</a>
              <a href="../../tools/pestel-analyse/">PESTEL Analyse</a>
              <a href="../../tools/five-forces/">Five Forces</a>
              <a href="../../tools/bcg-matrix/">BCG Matrix</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Marketing ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/customer-journey/">Customer Journey</a>
              <a href="../../tools/buyer-persona/">Buyer Persona</a>
              <a href="../../tools/marketing-roi/">Marketing-ROI</a>
              <a href="../../tools/ab-test/">A/B-Test</a>
              <a href="../../tools/marketing-mix/">4P Marketing-Mix</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">E-Commerce ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/clv-rechner/">CLV Rechner</a>
              <a href="../../tools/cac-analyse/">CAC Analyse</a>
              <a href="../../tools/retourenanalyse/">Retourenanalyse</a>
              <a href="../../tools/preisgestaltung/">Preisgestaltung</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Entscheidung ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/cost-benefit/">Cost-Benefit</a>
              <a href="../../tools/nutzwertanalyse/">Nutzwertanalyse</a>
              <a href="../../tools/feature-scoring/">Feature Scoring</a>
              <a href="../../tools/projektbewertung/">Projektbewertung</a>
              <a href="../../tools/massnahmenbewertung/">Maßnahmenbewertung</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Performance ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/kpi-analyse/">KPI Analyse</a>
              <a href="../../tools/funnel-analyse/">Funnel Analyse</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Risiko ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/risikoanalyse/">Risikoanalyse</a>
              <a href="../../tools/priorisierung/">Priorisierung</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Intern ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/stakeholder-analyse/">Stakeholder</a>
              <a href="../../tools/prozessanalyse/">Prozessanalyse</a>
              <a href="../../tools/ressourcen-planung/">Ressourcen</a>
            </div>
          </div>
          
          <div class="nav-dropdown">
            <button class="nav-btn">Extern ▼</button>
            <div class="dropdown-content">
              <a href="../../tools/wettbewerbsanalyse/">Wettbewerb</a>
              <a href="../../tools/marktsegmentierung/">Marktsegmentierung</a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" id="mobileNavOverlay">
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Strategie</div>
        <div class="mobile-nav-links">
          <a href="../../tools/swot-analyse/">SWOT Analyse</a>
          <a href="../../tools/pestel-analyse/">PESTEL Analyse</a>
          <a href="../../tools/five-forces/">Five Forces</a>
          <a href="../../tools/bcg-matrix/">BCG Matrix</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Marketing</div>
        <div class="mobile-nav-links">
          <a href="../../tools/customer-journey/">Customer Journey</a>
          <a href="../../tools/buyer-persona/">Buyer Persona</a>
          <a href="../../tools/marketing-roi/">Marketing-ROI</a>
          <a href="../../tools/ab-test/">A/B-Test</a>
          <a href="../../tools/marketing-mix/">4P Marketing-Mix</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">E-Commerce</div>
        <div class="mobile-nav-links">
          <a href="../../tools/clv-rechner/">CLV Rechner</a>
          <a href="../../tools/cac-analyse/">CAC Analyse</a>
          <a href="../../tools/retourenanalyse/">Retourenanalyse</a>
          <a href="../../tools/preisgestaltung/">Preisgestaltung</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Entscheidung</div>
        <div class="mobile-nav-links">
          <a href="../../tools/cost-benefit/">Cost-Benefit</a>
          <a href="../../tools/nutzwertanalyse/">Nutzwertanalyse</a>
          <a href="../../tools/feature-scoring/">Feature Scoring</a>
          <a href="../../tools/projektbewertung/">Projektbewertung</a>
          <a href="../../tools/massnahmenbewertung/">Maßnahmenbewertung</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Performance</div>
        <div class="mobile-nav-links">
          <a href="../../tools/kpi-analyse/">KPI Analyse</a>
          <a href="../../tools/funnel-analyse/">Funnel Analyse</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Risiko</div>
        <div class="mobile-nav-links">
          <a href="../../tools/risikoanalyse/">Risikoanalyse</a>
          <a href="../../tools/priorisierung/">Priorisierung</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Intern</div>
        <div class="mobile-nav-links">
          <a href="../../tools/stakeholder-analyse/">Stakeholder</a>
          <a href="../../tools/prozessanalyse/">Prozessanalyse</a>
          <a href="../../tools/ressourcen-planung/">Ressourcen</a>
        </div>
      </div>
      <div class="mobile-nav-section">
        <div class="mobile-nav-title">Extern</div>
        <div class="mobile-nav-links">
          <a href="../../tools/wettbewerbsanalyse/">Wettbewerb</a>
          <a href="../../tools/marktsegmentierung/">Marktsegmentierung</a>
        </div>
      </div>
    </div>
  `;

  // Footer HTML
  const footerHTML = `
    <footer class="global-footer">
      <div class="footer-container">
        <div class="footer-left">
          <span>© 2026 SK Analyse Tools</span>
          <span class="footer-separator">|</span>
          <a href="../../impressum.html">Impressum</a>
          <span class="footer-separator">|</span>
          <a href="../../datenschutz.html">Datenschutz</a>
        </div>
        <div class="footer-right">
          <span>🔒 Daten nur lokal im Browser gespeichert – Keine Server-Speicherung</span>
        </div>
      </div>
    </footer>
  `;

  // JavaScript for functionality
  const script = `
    <script>
      (function() {
        // Hamburger Menu Toggle
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        
        if (hamburgerMenu && mobileNavOverlay) {
          hamburgerMenu.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('active');
          });
        }
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(d => {
              d.style.display = 'none';
            });
            // Re-enable hover after a short delay
            setTimeout(() => {
              document.querySelectorAll('.dropdown-content').forEach(d => {
                d.style.display = '';
              });
            }, 100);
          }
        });
        
        // Search toggle for mobile
        const searchToggle = document.getElementById('searchToggle');
        const searchInput = document.getElementById('searchInput');
        
        if (searchToggle && searchInput) {
          searchToggle.addEventListener('click', () => {
            if (searchInput.style.display === 'block') {
              searchInput.style.display = 'none';
            } else {
              searchInput.style.display = 'block';
              searchInput.focus();
            }
          });
        }
      })();
    </script>
  `;

  // Insert everything
  document.head.insertAdjacentHTML('beforeend', styles);
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML + script);
  
  // Body padding for fixed header
  document.body.style.paddingTop = '60px';
})();
