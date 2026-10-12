"use strict";

/* ---------- Project data (edit here; "url" is where each View button goes) ---------- */
const PROJECTS = [
  { cat: "uiux", img: "immersive", title: "Immersive Experiences", sub: "", color: "#ffd100", alpha: 15, url: "#",
    desc: "Exploring a virtual shopping experience for IKEA, making product discovery more interactive and engaging.",
    tags: ["Virtual Experience", "UX Design", "UI Design", "Interaction Design"] },
  { cat: "uiux", img: "work-life", title: "Women’s Work-Life Balance", sub: "", color: "#804d9f", alpha: 15, url: "#",
    desc: "Exploring how working women manage and balance their personal and professional lives.",
    tags: ["Information Visualization", "Data Analysis", "UX Research", "Data Visualization"] },
  { cat: "uiux", img: "food-junction", title: "Food Junction", sub: "(Redesign)", color: "#f70936", alpha: 15, url: "#",
    desc: "Redesigning the food-ordering experience with simpler navigation and a seamless user journey.",
    tags: ["UX Research", "App Redesign", "Wireframing", "UI Design"] },
  { cat: "uiux", img: "kia-seltos", title: "KIA Seltos", sub: "(Usability Testing)", color: "#a6c3c5", alpha: 100, url: "#",
    desc: "Improving the in-car dashboard experience through usability testing to make controls more intuitive, accessible, and easy to use.",
    tags: ["Usability Testing", "UX Research", "UX Analysis", "Interaction Design"] },
  { cat: "uiux", img: "pune-metro", title: "Pune Metro", sub: "(Service Design)", color: "#a6c3c5", alpha: 100, url: "#",
    desc: "Improving the metro journey through a more intuitive & user-focused service experience.",
    tags: ["Service Design", "UX Research", "User Journey", "UI/UX"] },
  { cat: "uiux", img: "burgergo", title: "BurgerGo", sub: "(App Design)", color: "#ff7622", alpha: 15, url: "#",
    desc: "Designing a convenient food-ordering experience with intuitive navigation and a smooth, user-friendly interface.",
    tags: ["UX Research", "App Redesign", "Wireframing", "UI Design"] },
  { cat: "uiux", img: "accessibility", title: "Accessibility Design", sub: "", color: "#a551f8", alpha: 15, url: "#",
    desc: "Designing a clear, inclusive, and user-friendly interface for everyone.",
    tags: ["UI Design", "Accessibility", "Inclusive Design", "Visual Design"] },
  { cat: "uiux", img: "burud-ali", title: "Burud Ali", sub: "( Case Study)", color: "#b78759", alpha: 15, url: "#",
    desc: "An ethnographic study exploring the community, culture, and everyday experiences of Burud Ali.",
    tags: ["Ethnographic Research", "User Research", "Field Study", "Case Study"] },
  { cat: "web", img: "unique-flowers", title: "Unique Flowers", sub: "(Web Design)", color: "#fad0c6", alpha: 20, url: "#",
    desc: "Making flower discovery and online ordering simple, elegant, and enjoyable.",
    tags: ["UX Design", "UI Design", "Wireframing", "Prototyping"] },
  { cat: "graphic", img: "maheshwar", title: "Maheshwar — Case Study", sub: "", color: "#fad0c6", alpha: 20, url: "#",
    desc: "An exploration of Maheshwar’s rich cultural heritage, historical architecture, and traditions shaped by the Holkar dynasty and Rajmata Ahilya Devi Holkar.",
    tags: ["Cultural Research", "Ethnographic Study", "Historical Research", "Visual Documentation"] },
];

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderProjects(grid) {
  grid.innerHTML = PROJECTS.map((p) => `
    <article class="card" data-cat="${p.cat}" data-color="${p.color}" data-alpha="${p.alpha}">
      <img src="assets/img/${p.img}.jpg" alt="${esc(p.title)} project cover" loading="lazy">
      <h3>${esc(p.title)} ${p.sub ? `<small>${esc(p.sub)}</small>` : ""}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <a class="btn btn-solid" href="${p.url}">View <i class="ic ic-arrow"></i></a>
    </article>`).join("");
  grid.querySelectorAll(".card").forEach((c) => {
    c.style.setProperty("--tc", c.dataset.color);
    c.style.setProperty("--ta", c.dataset.alpha + "%");
  });
}

function initFilters(grid) {
  const tabs = document.querySelectorAll(".filter");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      const f = tab.dataset.filter;
      grid.querySelectorAll(".card").forEach((c) => { c.hidden = f !== "all" && c.dataset.cat !== f; });
    })
  );
}

/* ---------- Contact section (shared by both pages) ---------- */
const CONTACT_HTML = `
  <form class="contact-form" id="contact-form" novalidate>
    <img class="contact-girl" src="assets/img/contact-girl.png" alt="">
    <img class="paper-plane" src="assets/img/paper-plane.png" alt="">
    <h2>Have an idea?<br>Let’s turn it into an <span class="accent">experience.</span></h2>
    <p class="open-badge">Open To Full-Time Opportunities</p>
    <label class="field"><span>Your Full Name</span><input name="name" autocomplete="name" required><p class="err" aria-live="polite"></p></label>
    <label class="field"><span>Your Email</span><input name="email" type="email" autocomplete="email" required><p class="err" aria-live="polite"></p></label>
    <label class="field"><span>Subject</span><input name="subject" required><p class="err" aria-live="polite"></p></label>
    <label class="field"><span>Your Message</span><textarea name="message" required></textarea><p class="err" aria-live="polite"></p></label>
    <button class="btn btn-solid" type="submit">Submit <i class="ic ic-send"></i></button>
    <p class="form-status" role="status"></p>
  </form>
  <aside class="contact-info">
    <h2>Let’s Create<br><u>Impactful</u><br>Experiences together.</h2>
    <hr>
    <p>I’m always open to discussing new project,<br>Creative ideas, or opportunities<br>to be part of your vision.</p>
    <ul class="contact-list">
      <li><span class="dot dot-pin"><i class="ic ic-pin"></i></span>Pune, India</li>
      <li><span class="dot"><img src="assets/img/gmail.png" alt=""></span><a href="mailto:harshaliduse03@gmail.com">harshaliduse03@gmail.com</a></li>
      <li><span class="dot dot-phone"><i class="ic ic-phone"></i></span><a href="tel:+9011793885">9011793885</a></li>
    </ul>
    <h3>Let’s Connect</h3>
    <div class="socials"><a class="social li" href="https://www.linkedin.com/in/harshali-duse-27a33728b" aria-label="LinkedIn">in</a><a class="social be" href="https://www.behance.net/harshaliduse" aria-label="Behance">Bē</a></div>
    <div class="hero-cta">
      <a class="btn btn-ghost" href="assets/Harshali-Resume.pdf" download>Resume <i class="ic ic-download"></i></a>
      <a class="btn btn-light" href="projects.html">View Work <i class="ic ic-arrow"></i></a>
    </div>
  </aside>`;

function initContactForm(form) {
  const rules = {
    name: (v) => (v.trim() ? "" : "Please enter your name."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address."),
    subject: (v) => (v.trim() ? "" : "Please add a subject."),
    message: (v) => (v.trim().length >= 10 ? "" : "Please write at least 10 characters."),
  };
  const check = (el) => {
    const msg = rules[el.name](el.value);
    el.closest(".field").classList.toggle("invalid", !!msg);
    el.closest(".field").querySelector(".err").textContent = msg;
    return !msg;
  };
  form.querySelectorAll("input,textarea").forEach((el) => el.addEventListener("blur", () => check(el)));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    const ok = [...form.querySelectorAll("input,textarea")].map(check).every(Boolean);
    if (!ok) { status.textContent = ""; form.querySelector(".invalid input, .invalid textarea")?.focus(); return; }
    // No backend yet: connect this to Formspree, EmailJS, or your own endpoint.
    status.textContent = "Thanks! Your message is ready to send — connect a form service to deliver it.";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const contact = document.getElementById("contact");
  if (contact) { contact.innerHTML = CONTACT_HTML; initContactForm(contact.querySelector("form")); }
  const grid = document.getElementById("project-grid");
  if (grid) { renderProjects(grid); initFilters(grid); }
  // Placeholder links (href="#") shouldn't jump to the top of the page
  document.addEventListener("click", (e) => { if (e.target.closest('a[href="#"]')) e.preventDefault(); });
});
