
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

:root {
  --bg: #090909;
  --panel: #11110f;
  --panel-light: #171713;
  --gold: #d6b477;
  --gold-light: #f0d7a5;
  --text: #f4f0e8;
  --muted: #96938b;
  --line: rgba(214,180,119,.17);
  --green: #91c7a0;
  --red: #d99585;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
button, input, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
a { color: inherit; text-decoration: none; }
button { color: inherit; cursor: pointer; }
main { min-height: 100vh; overflow: hidden; }
.topbar {
  height: 82px; padding: 0 7.5%; display: flex; align-items: center;
  justify-content: space-between; border-bottom: 1px solid var(--line);
  position: relative; z-index: 10; background: rgba(9,9,9,.94);
}
.brand, .side-brand {
  display: flex; align-items: center; gap: 10px; font-size: 16px;
  font-weight: 700; letter-spacing: 2.7px;
}
.brand-mark {
  width: 31px; height: 31px; display: grid; place-items: center;
  border: 1px solid var(--gold); color: var(--gold);
  font-family: 'Playfair Display', serif; font-size: 21px;
}
.brand-dot { color: var(--gold); margin-left: -10px; }
.nav-links { display: flex; align-items: center; gap: 35px; }
.nav-links a, .nav-links button {
  background: none; border: 0; color: #c1bdb4; font-size: 12px;
}
.nav-links a:hover, .nav-links button:hover { color: var(--gold); }
.header-cta, .mobile-cta {
  border: 1px solid var(--gold); padding: 12px 17px;
  background: transparent; color: var(--gold); display: flex;
  align-items: center; gap: 12px; font-size: 11px;
}
.mobile-cta, .menu-button { display: none; }
.hero {
  min-height: 625px; padding: 95px 10% 85px; display: grid;
  grid-template-columns: 1fr 1fr; align-items: center; gap: 50px;
  position: relative;
}
.hero-copy { max-width: 520px; z-index: 2; }
.eyebrow {
  color: var(--gold); font-size: 9px; letter-spacing: 2.5px;
  font-weight: 700; display: inline-flex; align-items: center; gap: 10px;
}
.hero .eyebrow span { width: 22px; height: 1px; background: var(--gold); }
.hero h1 {
  font-family: 'Playfair Display', serif; font-size: clamp(49px, 6vw, 76px);
  font-weight: 500; line-height: 1.07; letter-spacing: -2.5px;
  margin: 25px 0;
}
h1 em, h2 em { color: var(--gold); font-weight: 500; }
.hero-copy > p {
  color: var(--muted); line-height: 1.9; font-size: 13px;
  max-width: 430px;
}
.hero-actions { display: flex; align-items: center; gap: 25px; margin-top: 32px; flex-wrap: wrap; }
.gold-button {
  border: 1px solid var(--gold); background: var(--gold); color: #17130d;
  padding: 15px 20px; font-size: 11px; font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center; gap: 16px;
  transition: .2s;
}
.gold-button:hover { background: var(--gold-light); border-color: var(--gold-light); transform: translateY(-2px); }
.text-link { color: #d5d0c5; display: inline-flex; gap: 6px; align-items: center; font-size: 11px; }
.hero-note { display: flex; gap: 10px; align-items: center; color: var(--muted); font-size: 10px; margin-top: 43px; }
.note-icon { color: var(--gold); }
.shield-symbol { display: inline-grid; place-items: center; width: 17px; height: 17px; border: 1px solid var(--gold); border-radius: 50%; font-size: 10px; }
.hero-visual { min-height: 420px; display: grid; place-items: center; position: relative; }
.visual-glow {
  position: absolute; width: 360px; height: 360px; border-radius: 50%;
  background: radial-gradient(circle, rgba(174,130,65,.18), transparent 70%);
  filter: blur(12px);
}
.orbit { position: absolute; border: 1px solid rgba(214,180,119,.12); border-radius: 50%; transform: rotate(-25deg); }
.orbit-one { width: 480px; height: 260px; }
.orbit-two { width: 400px; height: 330px; transform: rotate(48deg); }
.dashboard-preview {
  width: min(100%, 410px); padding: 27px; border: 1px solid rgba(214,180,119,.28);
  background: linear-gradient(145deg, #1b1a16, #10100e 75%);
  border-radius: 5px; position: relative; z-index: 1;
  box-shadow: 0 30px 90px #000;
}
.preview-top { display: flex; justify-content: space-between; align-items: center; }
.muted-label, .preview-stats small { color: var(--muted); font-size: 8px; letter-spacing: 1.7px; }
.preview-top h2 { font-size: 30px; margin: 12px 0 0; letter-spacing: -1px; }
.preview-top h2 span { color: var(--muted); font-size: 17px; }
.preview-icon { width: 40px; height: 40px; display: grid; place-items: center; color: var(--gold); border: 1px solid var(--line); }
.preview-growth { display: flex; gap: 6px; align-items: center; color: var(--green); font-size: 10px; margin-top: 10px; }
.preview-growth span { color: var(--muted); }
.preview-chart { height: 125px; display: flex; align-items: end; gap: 9px; margin: 25px 0; border-bottom: 1px solid var(--line); }
.chart-column { flex: 1; height: 100%; display: flex; align-items: end; }
.chart-column span { width: 100%; background: linear-gradient(to top, #8b6936, #d9b879); opacity: .82; border-radius: 2px 2px 0 0; }
.preview-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.preview-stats > div { display: grid; grid-template-columns: 9px 1fr; gap: 5px 8px; align-items: center; }
.preview-stats strong { grid-column: 2; font-size: 13px; }
.stat-dot { width: 7px; height: 7px; border-radius: 50%; }
.income-dot { background: var(--green); }
.expense-dot { background: var(--gold); }
.floating-card {
  position: absolute; z-index: 2; display: flex; gap: 11px; align-items: center;
  background: #1a1915; border: 1px solid var(--line); padding: 13px 15px;
  box-shadow: 0 15px 40px #000;
}
.floating-top { top: 34px; right: -3px; }
.floating-bottom { bottom: 25px; left: -5px; }
.float-icon { color: var(--gold); }
.floating-card div { display: grid; gap: 5px; }
.floating-card small { color: var(--muted); font-size: 7px; letter-spacing: 1.4px; }
.floating-card strong { font-size: 11px; }
.ticker {
  min-height: 66px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  display: flex; justify-content: space-evenly; align-items: center; gap: 20px;
  padding: 15px 5%; color: #b7b0a2; font-size: 8px; letter-spacing: 2px; flex-wrap: wrap;
}
.ticker i { color: var(--gold); font-style: normal; }
.section-wrap { padding: 105px 10%; }
.section-heading { max-width: 580px; }
.section-heading h2, .privacy-section h2, .approach h2 {
  font-family: 'Playfair Display', serif; font-size: clamp(36px, 4vw, 51px);
  font-weight: 500; line-height: 1.15; margin: 20px 0;
}
.section-heading p, .privacy-section > p { color: var(--muted); font-size: 12px; line-height: 1.9; max-width: 430px; }
.feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 17px; margin-top: 55px; }
.feature-card {
  background: var(--panel); border: 1px solid var(--line); padding: 30px 25px;
  min-height: 275px; transition: .2s;
}
.feature-card:hover { border-color: rgba(214,180,119,.55); transform: translateY(-4px); }
.feature-icon { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid var(--line); color: var(--gold); }
.card-number { display: block; color: var(--gold); font-size: 8px; letter-spacing: 1.7px; margin-top: 26px; }
.feature-card h3 { font-family: 'Playfair Display', serif; font-size: 23px; font-weight: 500; margin: 12px 0; }
.feature-card p { color: var(--muted); font-size: 11px; line-height: 1.9; min-height: 65px; }
.feature-card a { color: var(--gold); display: inline-flex; align-items: center; gap: 8px; font-size: 10px; margin-top: 12px; }
.approach { background: #12110e; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 90px 10%; }
.approach-inner { max-width: 1050px; margin: auto; display: grid; grid-template-columns: .6fr 1.4fr; gap: 65px; align-items: center; }
.approach-symbol { width: 150px; height: 150px; border: 1px solid var(--gold); display: grid; place-items: center; font: 100px 'Playfair Display', serif; color: var(--gold); }
.approach-symbol span { color: var(--text); }
.approach h2 { font-size: clamp(34px, 4vw, 48px); }
.approach p { color: var(--muted); font-size: 12px; line-height: 2; max-width: 590px; }
.outline-button { margin-top: 20px; padding: 13px 17px; display: inline-flex; align-items: center; gap: 14px; border: 1px solid var(--gold); color: var(--gold); background: transparent; font-size: 10px; }
.privacy-section { text-align: center; }
.privacy-section > p { margin: 0 auto; }
.privacy-points { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 35px; }
.privacy-points span { display: flex; align-items: center; gap: 9px; color: #c3bdae; font-size: 10px; }
.privacy-points svg, .privacy-points .shield-symbol { color: var(--gold); }
.footer {
  padding: 28px 7.5%; display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid var(--line); color: var(--muted); font-size: 10px; gap: 20px; flex-wrap: wrap;
}
.footer small { font-size: 9px; }
.app-shell { display: grid; grid-template-columns: 225px 1fr; min-height: 900px; }
.sidebar { border-right: 1px solid var(--line); padding: 30px 20px; display: flex; flex-direction: column; }
.side-brand { font-size: 13px; margin-bottom: 55px; }
.side-label { color: #77736a; font-size: 8px; letter-spacing: 1.8px; margin: 0 0 15px 10px; }
.side-link {
  display: flex; align-items: center; gap: 12px; border: 0; background: transparent;
  color: #aaa69d; padding: 13px 10px; width: 100%; text-align: left; font-size: 11px;
}
.side-link.active { background: rgba(214,180,119,.1); color: var(--gold); }
.side-link:hover { color: var(--gold); }
.sidebar-bottom { margin-top: auto; }
.side-free { margin-top: 30px; border: 1px solid var(--line); padding: 14px 10px; display: flex; gap: 10px; color: var(--gold); }
.side-free span { display: grid; gap: 5px; }
.side-free strong { font-size: 10px; }
.side-free small { color: var(--muted); font-size: 8px; }
.dashboard-content { padding: 45px 5%; max-width: 1300px; width: 100%; margin: auto; }
.dash-header { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 30px; }
.dash-header h1 { font: 40px 'Playfair Display', serif; margin: 12px 0 5px; }
.dash-header p { color: var(--muted); font-size: 11px; margin: 0; }
.add-button { white-space: nowrap; }
.balance-card { padding: 27px 30px; background: linear-gradient(115deg, #292116, #15130f 75%); border: 1px solid rgba(214,180,119,.3); }
.balance-top, .balance-bottom { display: flex; justify-content: space-between; align-items: center; }
.balance-top > span { font-size: 9px; letter-spacing: 2px; color: #c9b58e; }
.visibility-button { background: transparent; border: 0; color: var(--gold); }
.balance-card h2 { font: 42px 'Playfair Display', serif; margin: 15px 0 25px; }
.balance-bottom { color: #c3bdae; font-size: 9px; }
.balance-bottom span:first-child { display: flex; align-items: center; gap: 7px; }
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 18px 0; }
.summary-card { padding: 20px; border: 1px solid var(--line); background: var(--panel); display: flex; flex-direction: column; align-items: flex-start; }
.summary-icon { width: 33px; height: 33px; display: grid; place-items: center; margin-bottom: 15px; }
.summary-icon svg { width: 17px; }
.summary-icon.green { color: var(--green); background: rgba(145,199,160,.1); }
.summary-icon.red { color: var(--red); background: rgba(217,149,133,.1); }
.summary-icon.gold { color: var(--gold); background: rgba(214,180,119,.1); }
.summary-card small { color: var(--muted); font-size: 8px; letter-spacing: 1.4px; }
.summary-card strong { font-size: 19px; margin: 9px 0 5px; }
.summary-caption { color: #77736
