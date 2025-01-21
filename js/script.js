function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlert');
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');
}

function closeCustomAlert() {
  const alertBox = document.getElementById('customAlert');
  alertBox.classList.add('hidden');

  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  
  if  (document.getElementById('message'))
  {
    document.getElementById('message').value = "";
  }
  if (document.getElementById('location')) {
    document.getElementById('location').value = "";
    document.getElementById('description').value = "";
    document.querySelectorAll('input[name="services"]').forEach(checkbox => checkbox.checked = false);
  }

  document.querySelector('#submitButton').disabled = false;
}


function sendContactEmail() {
  try {
    document.querySelector('#submitButton').disabled = true;

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
        showCustomAlert("We hebben uw bericht ontvangen. Bedankt!");
      },
      (error) => {
        console.log('FAILED...', error);
        showCustomAlert("Het versturen van uw bericht is mislukt. Probeer het later opnieuw.");
        document.querySelector('#submitButton').disabled = false;
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    showCustomAlert("Er is een onverwachte fout opgetreden. Probeer het later opnieuw.");
    document.querySelector('#submitButton').disabled = false;
  }
}

function sendOfferEmail() {
  try {
    document.querySelector('#submitButton').disabled = true;

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
        showCustomAlert("We hebben uw offerteaanvraag ontvangen. Bedankt!");
      },
      (error) => {
        console.log('FAILED...', error);
        showCustomAlert("Het versturen van uw offerteaanvraag is mislukt. Probeer het later opnieuw.");
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    showCustomAlert("Er is een onverwachte fout opgetreden. Probeer het later opnieuw.");
  }
}