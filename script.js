// ============================================================
// 📧 EMAILJS INTEGRATION + SITE INTERACTIVITY SCRIPT
// ============================================================

// ✅ Include EmailJS SDK in your HTML before this file:
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

// ✅ Initialize EmailJS with your public key
(function () {
  emailjs.init("2FLemHludUGRW0uf0"); // Replace with your actual EmailJS Public Key
})();

// ============================================================
// 📬 CONTACT FORM HANDLER
// ============================================================

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent reload

      // Send form data through EmailJS
      emailjs.sendForm("service_jbcgen8", "template_0ks8k3s", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          form.reset(); // Clear form
        })
        .catch(function (error) {
          alert("❌ Failed to send message. Please try again.");
          console.error("Error:", error);
        });
    });
  }
});

// ============================================================
// 📄 RESUME DOWNLOAD / VIEW FUNCTION
// ============================================================
function downloadResume() {
  window.open('/ASSETS/resume/Narasimha_Resume.pdf', '_blank');
}

// ============================================================
// 🌐 NAVIGATION SCROLL SMOOTHNESS
// ============================================================
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============================================================
// 💡 OPTIONAL: HIGHLIGHT ACTIVE NAV ITEM WHILE SCROLLING
// ============================================================
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let scrollY = window.pageYOffset;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`nav ul li a[href*=${id}]`)?.classList.add('active');
    }
  });
});
