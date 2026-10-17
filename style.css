@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;700;800&display=swap');

/* --- 1. Design Tokens & Color Variables --- */
:root {
  --bg-primary: #090d16;
  --bg-secondary: #0f172a;
  --bg-card: rgba(18, 26, 44, 0.7);
  --bg-card-hover: rgba(28, 38, 64, 0.8);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(99, 102, 241, 0.5);
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --accent: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.25);
  --accent-cyan: #06b6d4;
  --accent-emerald: #10b981;
  --accent-rose: #f43f5e;
  --accent-amber: #f59e0b;
  
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --shadow-lg: 0 20px 35px -10px rgba(0, 0, 0, 0.5);
}

/* Light Mode Overrides */
[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-card: rgba(255, 255, 255, 0.9);
  --bg-card-hover: #ffffff;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-focus: rgba(99, 102, 241, 0.6);
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-dim: #94a3b8;
  --accent-glow: rgba(99, 102, 241, 0.15);
  --shadow-lg: 0 15px 30px -8px rgba(0, 0, 0, 0.1);
}

/* --- 2. Base & Layout Reset --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Atmospheric Background Glow */
.bg-mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: 
    radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 45%);
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* --- 3. Header & Navigation --- */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(9, 13, 22, 0.75);
  border-bottom: 1px solid var(--border-subtle);
  padding: 16px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-emerald);
  box-shadow: 0 0 12px var(--accent-emerald);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.25); }
}

/* --- 4. Interactive Status Pill (Live / Reconnecting / Offline) --- */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-pill.online {
  color: var(--accent-emerald);
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
}
.status-pill.online .status-dot {
  background: var(--accent-emerald);
  box-shadow: 0 0 8px var(--accent-emerald);
}

.status-pill.reconnecting,
.status-pill.connecting {
  color: var(--accent-amber);
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.08);
}
.status-pill.reconnecting .status-dot,
.status-pill.connecting .status-dot {
  background: var(--accent-amber);
  animation: pulse-dot 1s infinite;
}

.status-pill.offline {
  color: var(--accent-rose);
  border-color: rgba(244, 63, 94, 0.3);
  background: rgba(244, 63, 94, 0.08);
}
.status-pill.offline .status-dot {
  background: var(--accent-rose);
}

/* --- 5. Buttons (Primary, Secondary, Chaos) --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}

.btn-primary {
  background: var(--accent);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--accent-glow);
}
.btn-primary:hover {
  background: #4f46e5;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px var(--accent-glow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  border-color: var(--border-subtle);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-chaos {
  background: rgba(244, 63, 94, 0.15);
  color: var(--accent-rose);
  border-color: rgba(244, 63, 94, 0.3);
}
.btn-chaos:hover {
  background: rgba(244, 63, 94, 0.25);
  transform: translateY(-1px);
}

.btn-sm {
  padding: 6px 12px;
  font-size: 0.82rem;
}

/* --- 6. Glassmorphism Card Containers --- */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 24px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--shadow-lg);
  transition: border-color 0.2s;
}
.card:hover {
  border-color: var(--border-focus);
}

/* --- 7. Presence Avatar Stack --- */
.presence-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.avatar-stack {
  display: flex;
  align-items: center;
}

.avatar-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.82rem;
  border: 2px solid var(--bg-primary);
  margin-left: -8px;
  cursor: default;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.avatar-circle:first-child {
  margin-left: 0;
}

.avatar-circle:hover {
  transform: translateY(-3px) scale(1.15);
  z-index: 10;
}

/* --- 8. Emoji Reactions Toolbar --- */
.reactions-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  box-shadow: var(--shadow-lg);
}

.react-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 50%;
  transition: transform 0.15s ease;
}

.react-btn:hover {
  transform: scale(1.35);
}

/* --- 9. Toast Notification Popups --- */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.toast {
  pointer-events: auto;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-width: 260px;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- 10. Floating Collapsible DevTools Panel --- */
.devtools-toggle {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 8px 14px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: border-color 0.2s;
}
.devtools-toggle:hover {
  border-color: var(--accent);
}

.devtools-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 380px;
  background: rgba(11, 15, 25, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-subtle);
  z-index: 9998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.6);
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.devtools-drawer.open {
  transform: translateY(0);
}

.devtools-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid var(--border-subtle);
}

.devtools-body {
  flex: 1;
  padding: 16px 20px;
  overflow: auto;
  font-family: var(--font-mono);
  font-size: 0.82rem;
}

/* --- 11. Responsive Grid --- */
@media (max-width: 860px) {
  .grid-layout {
    grid-template-columns: 1fr !important;
  }
  .devtools-drawer {
    height: 75vh;
  }
}
