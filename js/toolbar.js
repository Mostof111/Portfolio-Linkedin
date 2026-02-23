function createToolbar() {
    return `
        <div class="safari-toolbar">
            <div class="window-controls">
                <div class="red"></div>
                <div class="yellow"></div>
                <div class="green"></div>
            </div>
            
                <div class="nav-arrows" aria-label="Navigation">
                
                <button class="nav-btn" id="navBack" aria-label="Back">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button class="nav-btn" id="navForward" aria-label="Forward">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                </div>
            

            <div class="address-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <span>deodataganon.da</span>
            </div>

            <div class="toolbar-icons">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>

            </div>
        </div>
    `;
}
