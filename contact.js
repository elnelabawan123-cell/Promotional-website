function validateForm() {
  // Get form values
  const firstName = document.querySelector('input[name="firstName"]').value.trim();
  const lastName = document.querySelector('input[name="lastName"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const subject = document.querySelector('input[name="subject"]:checked');
  const message = document.querySelector('textarea[name="message"]').value.trim();

  // Check required fields
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    alert("⚠️ Please fill out all fields before submitting.");
    return false;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("📧 Please enter a valid email address.");
    return false;
  }

  // Validate phone number (Philippines format)
  const phonePattern = /^09\d{9}$/;
  if (!phonePattern.test(phone)) {
    alert("📱 Please enter a valid phone number (e.g., 09123456789).");
    return false;
  }

  // Validate message length
  if (message.length < 10) {
    alert("✍️ Your message should be at least 10 characters long.");
    return false;
  }

  // Success message
  alert("✅ Thank you for contacting us, " + firstName + "! We'll get back to you soon.");
  return true;
}
