const form = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");
const submitButton = form.querySelector('button[type="submit"]');

const WEBHOOK_URL = "http://localhost:5678/webhook-test/sales-lead";

form.addEventListener("submit", async (event) => {
    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Collect customer information
    const customer = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        service: document.getElementById("service").value,
        budget: Number(document.getElementById("budget").value),
        message: document.getElementById("message").value.trim()
    };

    // Prevent multiple submissions
    submitButton.disabled = true;
    formStatus.textContent = "Submitting your enquiry...";
    formStatus.className = "loading";

    try {
        // Send the enquiry to n8n
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // Display success message
        formStatus.textContent =
            "✓ Thank you! Your enquiry has been received successfully.";

        formStatus.className = "success";

        form.reset();

    } catch (error) {
        console.error("Submission failed:", error);

        formStatus.textContent =
            "✕ Something went wrong. Please try again.";

        formStatus.className = "error";

    } finally {
        submitButton.disabled = false;
    }
});