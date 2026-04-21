/* Variables & Base */
:root {
    --primary-gradient: linear-gradient(135deg, #667eea, #764ba2);
    --dark-bg: #0f172a;
    --dark-card: #1e293b;
    --accent: #ff7a18;
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    text-align: center;
    transition: background 0.5s ease, color 0.5s ease;
    min-height: 100vh;
}

/* Light Mode (Your Original Style) */
body.light-mode {
    background: var(--primary-gradient);
    color: white;
}

/* Dark Mode (New Premium SaaS Style) */
body.dark-mode {
    background: var(--dark-bg);
    color: #f8fafc;
}

.container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 30px;
}

/* Pricing Layout */
.pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 40px;
    flex-wrap: wrap;
}

/* Card Styling */
.card {
    padding: 40px 30px;
    border-radius: 20px;
    width: 320px;
    transition: var(--transition);
    position: relative;
    display: flex;
    flex-direction: column;
}

/* Light Mode Card */
body.light-mode .card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Dark Mode Card */
body.dark-mode .card {
    background: var(--dark-card);
    border: 1px solid #334155;
}

.card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Pro Card Highlight */
.card.pro {
    background: white !important;
    color: #1e293b !important;
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

body.dark-mode .card.pro {
    box-shadow: 0 0 25px rgba(102, 126, 234, 0.3);
}

.card.pro:hover {
    transform: scale(1.05) translateY(-12px);
}

.badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: orange;
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}

/* Price & Features */
.price {
    font-size: 36px;
    font-weight: 700;
    margin: 20px 0;
}

ul {
    list-style: none;
    margin: 20px 0 30px;
    text-align: left;
}

ul li {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
}

ul li i {
    color: #10b981;
}

.btn {
    margin-top: auto;
    padding: 14px;
    border: none;
    background: var(--accent);
    color: white;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.btn:hover {
    filter: brightness(1.1);
    transform: scale(1.03);
}

/* Toggle Switches */
.toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.save-badge {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    margin-left: 5px;
}

.switch {
    width: 54px;
    height: 28px;
    position: relative;
}

.switch input { display: none; }

.slider {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #cbd5e1;
    border-radius: 34px;
    cursor: pointer;
}

.slider:before {
    content: "";
    position: absolute;
    height: 20px; width: 20px;
    left: 4px; bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
}

input:checked + .slider { background: var(--accent); }
input:checked + .slider:before { transform: translateX(26px); }

/* Theme Toggle (Top Right) */
.theme-switch-wrapper {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
}

.theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
}

.theme-switch input { display:none; }

.mode-slider {
    background-color: rgba(255,255,255,0.2);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;
}

.mode-slider i { font-size: 14px; }
.fa-sun { color: #f1c40f; }
.fa-moon { color: #f39c12; }

.mode-slider:before {
    background-color: white;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
    z-index: 2;
}

.mode-slider.round { border-radius: 34px; }
.mode-slider.round:before { border-radius: 50%; }

input:checked + .mode-slider:before { transform: translateX(26px); }

/* Animations */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@media(max-width: 768px) {
    .pricing { flex-direction: column; }
    .card.pro { transform: scale(1); }
    .card.pro:hover { transform: translateY(-10px); }
}
