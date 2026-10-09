document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const loginScreen = document.getElementById("loginScreen");
  const appScreen = document.getElementById("app");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const logoutBtn = document.getElementById("logoutBtn");
  const syncTime = document.getElementById("syncTime");
  const navItems = document.querySelectorAll(".nav-item");
  const pages = document.querySelectorAll(".page");
  const pageTitle = document.getElementById("pageTitle");
  const pageEyebrow = document.getElementById("pageEyebrow");
  const toast = document.getElementById("toast");

  // Mobile drawer elements
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  // 1. Password Visibility Toggle
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
    });
  }

  // 2. Login Handler
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = passwordInput.value;

      if (user === "admin" && pass === "admin123") {
        loginScreen.classList.add("hidden");
        appScreen.classList.remove("hidden");
        showToast("Welcome back, Administrator!");
      } else {
        loginMessage.style.color = "#ef4444";
        loginMessage.textContent = "Invalid credentials. Use admin / admin123";
      }
    });
  }

  // 3. Logout Handler
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      appScreen.classList.add("hidden");
      loginScreen.classList.remove("hidden");
      document.getElementById("username").value = "";
      passwordInput.value = "";
      loginMessage.textContent = "";
    });
  }

  // 4. Live Clock Sync
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    if (syncTime) {
      syncTime.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 5. Sidebar Navigation Switcher
  navItems.forEach((button) => {
    button.addEventListener("click", () => {
      const pageKey = button.getAttribute("data-page");

      // Update active nav button
      navItems.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Update displayed page section
      pages.forEach((page) => {
        if (page.id === `page-${pageKey}`) {
          page.classList.add("active-page");
          page.classList.remove("hidden");
        } else {
          page.classList.remove("active-page");
          page.classList.add("hidden");
        }
      });

      // Dynamic header text update
      const pageNames = {
        dashboard: "Campus Dashboard",
        presence: "Campus Presence",
        scans: "Scan Records",
        hours: "Campus Hours",
        schedules: "Class Schedules",
        requirements: "Student Requirements",
        sms: "SMS Notifications",
        search: "Search Students"
      };

      if (pageTitle) pageTitle.textContent = pageNames[pageKey] || "Console Page";
      if (pageEyebrow) pageEyebrow.textContent = pageKey === "dashboard" ? "LIVE MONITORING" : "ADMINISTRATION";

      // Auto close sidebar on mobile menu selection
      if (window.innerWidth <= 1024 && sidebar && sidebarOverlay) {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");
      }
    });
  });

  // 6. Mobile Sidebar Drawer Toggle & Overlay Listeners
  if (menuToggle && sidebar && sidebarOverlay) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.add("open");
      sidebarOverlay.classList.add("show");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
    });
  }

  // Helper Toast Function
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }
});