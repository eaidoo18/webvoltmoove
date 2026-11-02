// Sample data for the preview. Replace with your real charger API later.
const chargers = [
  { name: "Accra Mall Hub",     x: 62, y: 24, plug: "CCS2",    kw: 50, price: "GH₵ 6.50", dist: "0.8 km", status: "Free" },
  { name: "Airport City Plaza", x: 26, y: 30, plug: "Type 2",  kw: 22, price: "GH₵ 4.80", dist: "2.1 km", status: "Busy" },
  { name: "Osu Oxford Street",  x: 50, y: 42, plug: "CHAdeMO", kw: 50, price: "GH₵ 6.90", dist: "1.2 km", status: "Free" },
  { name: "Labone Fuel Stop",   x: 78, y: 40, plug: "CCS2",    kw: 120,price: "GH₵ 8.20", dist: "3.4 km", status: "Offline" },
  { name: "Cantonments Garage", x: 30, y: 52, plug: "Type 2",  kw: 11, price: "GH₵ 3.90", dist: "1.9 km", status: "Free" }
];
const bolt = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>';
const pinsEl = document.getElementById("pins"), sheet = document.getElementById("sheet");
const $ = id => document.getElementById(id);

chargers.forEach((c, i) => {
  const b = document.createElement("button");
  b.className = "pin"; b.dataset.s = c.status; b.dataset.plug = c.plug;
  b.style.left = c.x + "%"; b.style.top = c.y + "%";
  b.setAttribute("aria-label", `${c.name}, ${c.plug}, ${c.status}`);
  b.setAttribute("aria-pressed", "false");
  b.innerHTML = bolt;
  b.addEventListener("click", () => select(i));
  pinsEl.appendChild(b);
});

function select(i) {
  const c = chargers[i];
  document.querySelectorAll(".pin").forEach((p, n) => p.setAttribute("aria-pressed", n === i));
  $("s-name").textContent = c.name;
  $("s-status").textContent = c.status;
  $("s-status").className = "status " + c.status;
  $("s-meta").textContent = `${c.plug} · ${c.kw} kW · ${c.price}/kWh · ${c.dist} away`.replace(/ · /g, ", ");
  sheet.classList.remove("swap"); void sheet.offsetWidth; sheet.classList.add("swap");
}

document.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
  const f = ch.dataset.f;
  document.querySelectorAll(".chip").forEach(x => { const on = x === ch; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
  const pins = [...document.querySelectorAll(".pin")];
  pins.forEach(p => p.classList.toggle("dim", f !== "all" && p.dataset.plug !== f));
  const first = pins.findIndex(p => !p.classList.contains("dim"));
  if (first > -1) select(first);
}));

select(0);

// Waitlist form: front-end only. Connect to Formspree, Netlify Forms, or your API.
const form = $("signup"), msg = $("msg");
form.addEventListener("submit", e => {
  e.preventDefault();
  const v = $("email").value.trim();
  if (!/^\S+@\S+\.\S+$/.test(v)) { msg.className = "err"; msg.textContent = "Enter a valid email address, like name@example.com."; return; }
  msg.className = ""; msg.textContent = "You’re on the list. We’ll email you when Voltmoove launches.";
  form.reset();
});
$("yr").textContent = new Date().getFullYear();
