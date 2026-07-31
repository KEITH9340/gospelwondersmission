// Initialize EmailJS
emailjs.init({
    publicKey: "GDspwxlwdunoY-mOv"
});

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    if (!form) {
        console.error("Contact form not found!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_q17hrbt",
            "template_hhi8x0o",
            form
        )
        .then(function () {
            if (status) {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "green";
            }

            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);

            if (status) {
                status.textContent = "❌ Failed to send message.";
                status.style.color = "red";
            }
        });
    });

});
