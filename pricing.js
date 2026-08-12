/* ===========================================================
   LearnHub — Pricing page logic
=========================================================== */

let billingCycle = "monthly";
let checkoutPlanId = null;

function checkIconSVG(){
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6L9 17l-5-5"/></svg>`;
}

function priceCardHTML(plan){
  const currentPlan = getPlan();
  const isCurrent = currentPlan === plan.id;
  let amountHTML, cycleLabel;

  if(plan.oneTime){
    amountHTML = `₹${plan.monthly.toLocaleString("en-IN")}`;
    cycleLabel = "one-time payment";
  } else if(plan.monthly === 0){
    amountHTML = `₹0`;
    cycleLabel = "forever";
  } else if(billingCycle === "monthly"){
    amountHTML = `₹${plan.monthly.toLocaleString("en-IN")}<sup>/mo</sup>`;
    cycleLabel = "billed monthly";
  } else {
    amountHTML = `₹${plan.yearly.toLocaleString("en-IN")}<sup>/yr</sup>`;
    cycleLabel = "billed yearly · save 30%";
  }

  return `
  <div class="price-card ${plan.highlight ? 'is-highlight':''}">
    ${plan.highlight ? `<span class="pc-badge">Most Popular</span>` : ""}
    <h3>${plan.name}</h3>
    <div class="pc-tag">${plan.tagline}</div>
    <div class="pc-amount">${amountHTML}</div>
    <div class="pc-cycle">${cycleLabel}</div>
    <ul class="pc-features">
      ${plan.features.map(f=>`<li>${checkIconSVG()}<span>${f}</span></li>`).join("")}
    </ul>
    <button class="btn btn-block ${plan.highlight ? 'btn-amber':'btn-primary'}" ${isCurrent ? 'disabled':''}
      onclick="startCheckout('${plan.id}')"
      data-drip-event="upgrade" data-drip-event-name="${plan.cta}">
      ${isCurrent ? 'Current Plan' : plan.cta}
    </button>
    ${isCurrent ? `<div class="plan-current">✓ Active on your account</div>` : ""}
  </div>`;
}

function renderPricingGrid(){
  const grid = document.getElementById("pricingGrid");
  if(!grid) return;
  grid.innerHTML = PRICING_PLANS.map(priceCardHTML).join("");
}

function setBillingCycle(cycle){
  billingCycle = cycle;
  document.getElementById("billingToggleBtn").classList.toggle("is-yearly", cycle === "yearly");
  document.getElementById("labelMonthly").style.color = cycle === "monthly" ? "var(--navy)" : "var(--ink-soft)";
  document.getElementById("labelYearly").style.color = cycle === "yearly" ? "var(--navy)" : "var(--ink-soft)";
  renderPricingGrid();
}

function toggleBilling(){
  setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
}

function startCheckout(planId){
  const plan = PRICING_PLANS.find(p=>p.id===planId);
  if(!plan) return;

  if(plan.id === "free"){
    setPlan("free");
    showToast("✓ You're on the Free plan");
    renderPricingGrid();
    return;
  }

  checkoutPlanId = planId;
  const priceText = plan.oneTime
    ? `₹${plan.monthly.toLocaleString("en-IN")} one-time`
    : billingCycle === "monthly"
      ? `₹${plan.monthly.toLocaleString("en-IN")}/month`
      : `₹${plan.yearly.toLocaleString("en-IN")}/year`;

  document.getElementById("checkoutBody").innerHTML = `
    <div class="modal-icon">💳</div>
    <h3>You're upgrading to ${plan.name}</h3>
    <p>Review your plan before confirming. No real payment is processed in this demo.</p>
    <div class="modal-plan-row">
      <span>Plan</span><strong>${plan.name}</strong>
    </div>
    <div class="modal-plan-row">
      <span>Price</span><strong>${priceText}</strong>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal('checkoutModal')">Cancel</button>
      <button class="btn btn-primary btn-block" onclick="confirmCheckout()">Continue to Checkout</button>
    </div>`;
  openModal("checkoutModal");
}

function confirmCheckout(){
  const plan = PRICING_PLANS.find(p=>p.id===checkoutPlanId);
  document.getElementById("checkoutBody").innerHTML = `
    <div class="modal-icon">🎉</div>
    <h3>Welcome to LearnHub ${plan.name}!</h3>
    <p>Your premium access has been activated instantly — no page refresh needed.</p>
    <div class="modal-actions">
      <button class="btn btn-primary btn-block" onclick="finishCheckout()">Start Learning</button>
    </div>`;
  setPlan(plan.id);
}

function finishCheckout(){
  const plan = getPlan();
  closeModal("checkoutModal");
  window.location.href = `checkout-complete.html?plan=${encodeURIComponent(PLAN_LABELS[plan])}`;
}

document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("pricingGrid")){
    renderPricingGrid();
    setBillingCycle("monthly");
  }
});
