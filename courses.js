/* ===========================================================
   LearnHub — Courses rendering + filtering
=========================================================== */

function initials(title){
  return title.split(" ").filter(w=>/^[A-Za-z]/.test(w)).slice(0,2).map(w=>w[0]).join("").toUpperCase();
}

function courseCardHTML(c){
  const priceLabel = c.price === 0 ? "Free" : `₹${c.price.toLocaleString("en-IN")}`;
  return `
  <div class="course-card">
    <div class="course-thumb">
      <span class="initials">${initials(c.title)}</span>
      ${c.premium ? `<span class="badge badge-premium">🔒 Premium</span>` : `<span class="badge badge-free">Free</span>`}
      ${c.bestseller ? `<span class="badge badge-bestseller">Bestseller</span>` : ""}
    </div>
    <div class="course-body">
      <div class="course-cat">${c.category}</div>
      <h4>${c.title}</h4>
      <div class="course-instructor">By ${c.instructor}</div>
      <div class="course-meta">
        <span class="rating">★ ${c.rating}</span>
        <span>${c.students.toLocaleString("en-IN")} students</span>
      </div>
      <div class="course-stats">
        <span>${c.level}</span><span>${c.duration}</span><span>${c.lessons} lessons</span>
      </div>
      <div class="course-footer">
        <span class="course-price ${c.price===0 ? 'is-free':''}">${priceLabel}</span>
        <button class="btn btn-sm ${c.premium ? 'btn-outline':'btn-primary'}" onclick="viewCourse(${c.id})">View Course</button>
      </div>
    </div>
  </div>`;
}

function viewCourse(id){
  const c = COURSES.find(x=>x.id===id);
  if(!c) return;
  if(id === 4){ window.location.href = "course-details.html"; return; }
  if(c.premium && !hasPremiumAccess()){
    openModal("upgradeModal");
  } else {
    showToast(`✓ Opening "${c.title}"`);
  }
}

function renderCourseGrid(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.length
    ? list.map(courseCardHTML).join("")
    : `<div class="empty-state">No courses match your filters. Try broadening your search.</div>`;
}

/* ---------- Courses page: filters + sort ---------- */
function initCoursesPage(){
  const grid = document.getElementById("courseGrid");
  if(!grid) return;

  const state = { q:"", category:"all", level:"all", price:"all", sort:"popular" };

  const params = new URLSearchParams(window.location.search);
  if(params.get("q")) state.q = params.get("q");
  if(params.get("category")) state.category = params.get("category");

  const searchInput = document.getElementById("courseSearch");
  const categorySelect = document.getElementById("filterCategory");
  const levelSelect = document.getElementById("filterLevel");
  const priceSelect = document.getElementById("filterPrice");
  const sortSelect = document.getElementById("sortBy");

  searchInput.value = state.q;
  categorySelect.value = state.category;

  function apply(){
    let list = COURSES.filter(c=>{
      const matchesQ = state.q === "" || c.title.toLowerCase().includes(state.q.toLowerCase()) || c.category.toLowerCase().includes(state.q.toLowerCase());
      const matchesCat = state.category === "all" || c.category === state.category;
      const matchesLevel = state.level === "all" || c.level === state.level;
      const matchesPrice = state.price === "all"
        || (state.price === "free" && c.price === 0)
        || (state.price === "premium" && c.price > 0);
      return matchesQ && matchesCat && matchesLevel && matchesPrice;
    });

    if(state.sort === "rating") list = list.slice().sort((a,b)=> b.rating - a.rating);
    else if(state.sort === "price-low") list = list.slice().sort((a,b)=> a.price - b.price);
    else if(state.sort === "price-high") list = list.slice().sort((a,b)=> b.price - a.price);
    else if(state.sort === "newest") list = list.slice().sort((a,b)=> b.id - a.id);
    else list = list.slice().sort((a,b)=> b.students - a.students);

    renderCourseGrid("courseGrid", list);
    document.getElementById("resultCount").innerHTML = `Showing <strong>${list.length}</strong> of ${COURSES.length} courses`;
  }

  searchInput.addEventListener("input", e=>{ state.q = e.target.value; apply(); });
  categorySelect.addEventListener("change", e=>{ state.category = e.target.value; apply(); });
  levelSelect.addEventListener("change", e=>{ state.level = e.target.value; apply(); });
  priceSelect.addEventListener("change", e=>{ state.price = e.target.value; apply(); });
  sortSelect.addEventListener("change", e=>{ state.sort = e.target.value; apply(); });

  apply();
}

document.addEventListener("DOMContentLoaded", ()=>{
  initCoursesPage();

  const featuredGrid = document.getElementById("featuredGrid");
  if(featuredGrid){
    const featured = COURSES.filter(c=>c.bestseller).slice(0,4);
    renderCourseGrid("featuredGrid", featured);
  }
});
