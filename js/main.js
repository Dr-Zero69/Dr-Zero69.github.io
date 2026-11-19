/* Renders window.SITE (js/data.js) into index.html.
   Sections are declared in SECTIONS below; add, remove or reorder there. */
(function () {
  "use strict";
  var S = window.SITE;
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var el = function (id) { return document.getElementById(id); };
  var todo = function (o) { return o.todo ? " todo" : ""; };

  /* ------------------------------------------------------------ theme */
  var root = document.documentElement;
  var order = ["auto", "light", "dark"];
  function theme() { return root.getAttribute("data-theme") || "auto"; }
  function effective() {
    var t = theme();
    if (t !== "auto") return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function setTheme(t) {
    if (t === "auto") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", t);
    try { if (t === "auto") localStorage.removeItem("theme"); else localStorage.setItem("theme", t); } catch (e) {}
    el("theme-label").textContent = t.toUpperCase();
    renderTelemetry();
  }
  el("theme-btn").addEventListener("click", function () {
    setTheme(order[(order.indexOf(theme()) + 1) % order.length]);
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (theme() === "auto") renderTelemetry();
  });

  /* ------------------------------------------------------------ hero */
  var m = S.meta;
  el("hero-index").textContent = m.index;
  el("hero-place").textContent = m.place;
  el("hero-name").textContent = m.name;
  el("hero-tag").textContent = m.tagline;
  el("hero-aff").textContent = m.affiliation;
  el("hero-now").textContent = m.currently;
  el("badges").innerHTML = m.links.map(function (l) {
    var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="badge' + todo(l) + '" href="' + esc(l.href) + '"' + ext + '>' + esc(l.label) + "</a>";
  }).join("");

  var rot = el("rotator");
  rot.innerHTML = m.rotating.map(function (s, i) {
    return '<span class="' + (i === 0 ? "on" : "") + '">' + esc(s) + "</span>";
  }).join("");
  var ri = 0, spans = rot.querySelectorAll("span");
  if (spans.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      spans[ri].classList.remove("on");
      ri = (ri + 1) % spans.length;
      spans[ri].classList.add("on");
    }, 4000);
  }

  /* ------------------------------------------------------------ sections */
  var SECTIONS = [
    { id: "whoami", title: "who am i", render: renderWho },
    { id: "education", title: "education", render: renderEducation },
    { id: "experience", title: "experience", render: renderExperience },
    { id: "areas", title: "research areas", render: renderAreas },
    { id: "publications", title: "publications", render: renderPublications },
    { id: "projects", title: "side projects", render: renderProjects },
    { id: "stack", title: "stack", render: renderStack },
    { id: "route", title: "the route", render: renderTimeline },
    { id: "telemetry", title: "telemetry", render: function () { return '<div class="tele" id="tele"></div>'; } },
    { id: "hobbies", title: "hobbies", render: renderHobbies }
  ];
  var N = SECTIONS.length;
  var pad = function (i) { return (i < 10 ? "0" : "") + i; };

  el("sections").innerHTML = SECTIONS.map(function (s, i) {
    var n = pad(i + 1);
    return '<section class="sec" id="' + s.id + '">' +
      '<header class="sec-head"><span class="num">' + n + "</span><h2>" + esc(s.title.toUpperCase()) + "</h2>" +
      '<span class="idx">SECTION ' + n + " / " + pad(N) + "</span></header>" +
      '<div class="sec-body">' + s.render() + "</div></section>";
  }).join("");

  el("nav-links").innerHTML = SECTIONS.map(function (s, i) {
    return '<a href="#' + s.id + '" data-for="' + s.id + '"><span class="n">' + pad(i + 1) + "</span>" + esc(s.title) + "</a>";
  }).join("");

  function renderWho() {
    var w = S.whoami;
    return '<div class="who">' + w.lines.map(function (l) { return '<p class="reveal">' + esc(l) + "</p>"; }).join("") +
      '<div class="facts">' + w.facts.map(function (f) {
        return '<div class="fact reveal"><span class="k">' + esc(f.k) + " ▸</span><span" + (f.accent ? ' class="accent"' : "") + ">" + esc(f.v) + "</span></div>";
      }).join("") + "</div></div>";
  }
  function renderEducation() {
    return S.education.map(function (e) {
      return '<div class="row reveal' + todo(e) + '"><div class="when">' + esc(e.years) + '</div><div>' +
        '<div class="what">' + esc(e.degree) + '</div><div class="where">' + esc(e.place) + "</div>" +
        (e.note ? '<p class="note">' + esc(e.note) + "</p>" : "") + "</div></div>";
    }).join("");
  }
  function renderExperience() {
    return S.experience.map(function (e) {
      return '<div class="row reveal' + todo(e) + '"><div class="when">' + esc(e.years) + '</div><div>' +
        '<div class="what">' + esc(e.role) + '</div><div class="where">' + esc(e.place) + "</div>" +
        (e.bullets ? "<ul>" + e.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "") +
        "</div></div>";
    }).join("");
  }
  function renderAreas() {
    return '<div class="grid reveal">' + S.areas.map(function (a) {
      return '<div class="card' + todo(a) + '"><h3>' + esc(a.title) + "</h3><p>" + esc(a.text) + "</p></div>";
    }).join("") + "</div>";
  }
  function renderPublications() {
    return S.publications.map(function (p) {
      var venue = p.venue ? '<span class="venue">' + esc(p.venue) + "</span>" : "";
      return '<article class="entry reveal' + todo(p) + '"><div class="t"><span class="n">' + esc(p.n) + " /</span>" + esc(p.title.toUpperCase()) + "</div>" +
        '<p class="l1">' + esc(p.q) + '</p><p class="l2">' + esc(p.how) + "</p>" +
        '<div class="meta"><span>' + esc(p.tags) + "</span>" + venue + '<span class="status">' + esc(p.status) + "</span></div></article>";
    }).join("");
  }
  function renderProjects() {
    return S.projects.map(function (p) {
      return '<article class="entry reveal' + todo(p) + '"><div class="t"><span class="n">' + esc(p.n) + " /</span>" + esc(p.title.toUpperCase()) + "</div>" +
        '<p class="l1">' + esc(p.l1) + '</p><p class="l2">' + esc(p.l2) + "</p>" +
        '<div class="meta"><span>' + esc(p.tags) + "</span>" +
        (p.repo ? '<a href="https://github.com/' + esc(p.repo) + '" target="_blank" rel="noopener">github.com/' + esc(p.repo) + "</a>" : "") +
        "</div></article>";
    }).join("");
  }
  function renderStack() {
    return '<div class="stack">' + S.stack.map(function (s) {
      return '<span class="k reveal">' + esc(s.k) + '</span><span class="reveal">' + esc(s.v) + "</span>";
    }).join("") + "</div>";
  }
  function renderTimeline() {
    return '<div class="tl">' + S.timeline.map(function (t) {
      return '<div class="tl-item reveal' + (t.now ? " now" : "") + '"><span class="yr">' + esc(t.year) + '</span><span class="pt"></span><span class="tx">' + esc(t.text) + "</span></div>";
    }).join("") + "</div>";
  }
  function renderHobbies() {
    return '<div class="grid reveal">' + S.hobbies.map(function (h) {
      return '<div class="card' + todo(h) + '"><h3>' + esc(h.title) + "</h3><p>" + esc(h.text) + "</p></div>";
    }).join("") + "</div>";
  }

  /* GitHub stats cards follow the active theme */
  function renderTelemetry() {
    var box = el("tele"); if (!box) return;
    var dark = effective() === "dark";
    var u = encodeURIComponent(m.github);
    var title = dark ? "6FCFB5" : "1F6F5F", text = dark ? "E6E6E6" : "2B2B2B";
    var stats = "https://github-readme-stats.vercel.app/api?username=" + u + "&show_icons=true&hide_border=true&bg_color=00000000&title_color=" + title + "&icon_color=" + title + "&text_color=" + text;
    var langs = "https://github-readme-stats.vercel.app/api/top-langs/?username=" + u + "&layout=compact&hide_border=true&bg_color=00000000&title_color=" + title + "&text_color=" + text;
    var graph = "https://github-readme-activity-graph.vercel.app/graph?username=" + u + "&bg_color=00000000&color=" + text + "&line=" + title + "&point=" + title + "&area=true&area_color=" + title + "&hide_border=true";
    box.innerHTML = '<img src="' + stats + '" alt="GitHub statistics" loading="lazy"/>' +
      '<img src="' + langs + '" alt="Repository languages" loading="lazy"/>' +
      '<img class="wide" src="' + graph + '" alt="Contribution activity" loading="lazy"/>';
  }
  renderTelemetry();
  el("theme-label").textContent = theme().toUpperCase();

  /* ------------------------------------------------------------ footer */
  el("footer-status").textContent = S.footer.status;
  el("footer-quote").textContent = S.footer.quote;
  el("footer-right").textContent = S.footer.right;

  /* ------------------------------------------------------------ reveal + active nav */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal, .sec").forEach(function (n) { io.observe(n); });
  /* stagger items within a section like the README's .a1..a12 delays */
  document.querySelectorAll(".sec-body").forEach(function (b) {
    b.querySelectorAll(".reveal").forEach(function (n, i) { n.style.transitionDelay = Math.min(i, 12) * 0.08 + "s"; });
  });

  var links = el("nav-links").querySelectorAll("a");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-for") === e.target.id); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll(".sec").forEach(function (s) { spy.observe(s); });
})();
