/* ===========================================================
   LearnHub — Core JS
   Handles: plan state (localStorage), toasts, upgrade modal,
   nav plan pill, FAQ/curriculum accordions
=========================================================== */

const PLAN_LABELS = { free: "Free plan", student: "Student", pro: "Pro", lifetime: "Lifetime" };
const PLAN_RANK = { free: 0, student: 1, pro: 2, lifetime: 3 };

function getPlan(){
  return localStorage.getItem("lh_plan") || "free";
}
function setPlan(plan){
  localStorage.setItem("lh_plan", plan);
  refreshPlanUI();
}
function hasPremiumAccess(){
  return getPlan() !== "free";
}

/* ---------- Nav plan pill ---------- */
function refreshPlanUI(){
  const plan = getPlan();
  document.querySelectorAll("[data-plan-pill]").forEach(el=>{
    el.textContent = PLAN_LABELS[plan];
    el.classList.toggle("is-free", plan === "free");
  });
  document.querySelectorAll("[data-avatar]").forEach(el=>{
    el.textContent = plan === "free" ? "A" : "A";
  });
}

/* ---------- Toasts ---------- */
function ensureToastStack(){
  let stack = document.querySelector(".toast-stack");
  if(!stack){
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  return stack;
}
function showToast(message){
  const stack = ensureToastStack();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(()=>{
    toast.classList.add("leave");
    setTimeout(()=> toast.remove(), 250);
  }, 2800);
}

/* ---------- Generic modal ---------- */
function openModal(id){
  document.getElementById(id).classList.add("open");
}
function closeModal(id){
  document.getElementById(id).classList.remove("open");
}
document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal-overlay")) e.target.classList.remove("open");
});

/* ---------- Upgrade modal (shared across pages) ---------- */
function injectUpgradeModal(){
  if(document.getElementById("upgradeModal")) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
  <div class="modal-overlay" id="upgradeModal">
    <div class="modal" id="upgradeModalBody">
      <button class="modal-close" onclick="closeModal('upgradeModal')">✕</button>
      <div class="modal-icon">🔒</div>
      <h3>This is Premium content</h3>
      <p>Unlock every course, resource, and interview guide on LearnHub by upgrading your plan.</p>
      <div class="modal-actions">
        <a href="pricing.html" class="btn btn-primary btn-block">View plans</a>
      </div>
    </div>
  </div>`;
  document.body.appendChild(wrap.firstElementChild);
}
function requirePremium(label){
  if(hasPremiumAccess()){
    showToast(`✓ Opening "${label}"`);
    return true;
  }
  openModal("upgradeModal");
  return false;
}

/* ---------- FAQ accordion ---------- */
function renderFaqs(containerId, items){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = items.map((f,i)=>`
    <div class="module" id="faq-${i}">
      <div class="module-head" onclick="toggleModule('faq-${i}')">
        <h4>${f.q}</h4>
        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="module-body">
        <div class="lesson-row" style="border-top:1px solid var(--line);">
          <span style="color:var(--ink-soft);">${f.a}</span>
        </div>
      </div>
    </div>`).join("");
}
function toggleModule(id){
  document.getElementById(id).classList.toggle("open");
}

/* ---------- Newsletter signup (Contacts capture) ---------- */
function handleNewsletterSubmit(e){
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)){
    showToast("⚠ Enter a valid email address");
    return false;
  }
  showToast("✓ Subscribed! Check your inbox");
  form.reset();
  return false;
}

/* ---------- Nav active link + init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  injectUpgradeModal();
  refreshPlanUI();

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.getAttribute("href") === path) a.classList.add("active");
  });

  const searchInputs = document.querySelectorAll(".nav-search input");
  searchInputs.forEach(inp=>{
    inp.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" && inp.value.trim()){
        window.location.href = `courses.html?q=${encodeURIComponent(inp.value.trim())}`;
      }
    });
  });
});
