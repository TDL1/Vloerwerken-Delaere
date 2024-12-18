
function openVideo() {
    document.getElementById('video-lightbox').classList.remove('hidden');
  }

  function closeVideo() {
    document.getElementById('video-lightbox').classList.add('hidden');
  }

  function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tristandelaere19@gmail.com",
        Password : "",
        To : 'tristandelaere19@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }