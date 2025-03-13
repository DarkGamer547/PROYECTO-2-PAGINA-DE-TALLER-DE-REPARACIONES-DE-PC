/* script.js */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!validateEmail(email)) {
        alert("❌ Ingresa un correo electrónico válido");
        return;
    }

    alert(`✅ ¡Gracias, ${name}! Hemos recibido tu mensaje y te contactaremos pronto.`);
    this.reset();
});

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth scroll
document.querySelectorAll(".nav-link").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
