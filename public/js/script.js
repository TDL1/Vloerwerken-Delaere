function openVideo() {
    document.getElementById('video-lightbox').classList.remove('hidden');
  }

  function closeVideo() {
    document.getElementById('video-lightbox').classList.add('hidden');
  }


function sendEmail() {
  var params = {
    to_name: "Recipient Name",
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }
  const serviceID = "service_vdw2ylp";
  const templateID = "template_by9n8xi";
  
  emailjs.send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('message').value = "";
          console.log(res);
          alert("your message was sent successfully");
        })
        .catch((err) => {
            console.error("Error sending email:", err);
            alert("Failed to send your message. Please try again later.");
        });
}
