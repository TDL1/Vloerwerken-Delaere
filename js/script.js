function openVideo() {
    document.getElementById('video-lightbox').classList.remove('hidden');
}

function closeVideo() {
  document.getElementById('video-lightbox').classList.add('hidden');
}


function sendContactEmail() {
  try {
    var templateParams = {
      to_name: "Vloerwerken Delaere",
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    }
    const serviceID = "service_vdw2ylp";
    const templateID = "template_by9n8xi";

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message was sent successfully");
      },
      (error) => {
        console.log('FAILED...', error);
        alert("Failed to send your message. Please try again later.");
      }
    );

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('message').value = "";
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred. Please try again later.");
  }
}

function sendOfferEmail() {
  try {
    var services = Array.from(document.querySelectorAll('input[name="services"]:checked'))
    .map(checkbox => checkbox.value)
    .join(', ');

    var templateParams = {
      to_name: "Vloerwerken Delaere",
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      location: document.getElementById('location').value,
      services: services,
      description: document.getElementById('description').value
    }

    const serviceID = "service_vdw2ylp";
    const templateID = "template_2wsidgk";

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message was sent successfully");
      },
      (error) => {
        console.log('FAILED...', error);
        alert("Failed to send your message. Please try again later.");
      }
    );

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('location').value = "";
    document.getElementById('description').value = "";
    document.querySelectorAll('input[name="services"]').forEach(checkbox => checkbox.checked = false);
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred. Please try again later.");
  }
}
