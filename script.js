

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple form validation
  if (name === '' || phone === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  alert("ThankYou!! Form Submitted.")

  // Here, you can add code to send form data to your server using AJAX or fetch API
});

// form data sheet
const scriptURl = 'https://script.google.com/macros/s/AKfycbxI6uIG-hCOg3yDwL4b0_ZyRz3FyDGrZBkYTPdEk2lgtLKtu9J6Gc51PeG7nGeLRNSg-g/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
  e.preventDefault()
  fetch(scriptURl, {method: 'POST', body: new FormData(form)})
  // .then(response => alert("Thank You!! Form Submitted."))
  .then(() => {window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


// via mail

// function sendEmail(){

// Email.send({
// Host : "smtp.elasticemail.com",
// Username : "saxenaansh387@gmail.com",
// Password : "@ansh1234",
// To : "saxenaansh387@gmail.com",
// From :  document.getElementById("email").value,
// Subject : "Mail from Form-Data",
// Body : "Name" + document.getElementById("name").value
// + "<br> Phone" + document.getElementById("phone").value
// + "<br> Email" + document.getElementById("name").value
// + "<br> Message" + document.getElementById("message").value
// }).then(
// message => alert("Message sent Successfully.")
// );
// }


// lazy loading

document.addEventListener('DOMContentLoaded', function () {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      let lazyElement = entry.target;
      if (entry.isIntersecting) {
        if (lazyElement.tagName === 'IMG') {
          lazyElement.src = lazyElement.dataset.src;
        }
        lazyElement.classList.add('lazy-loaded');
        lazyElement.classList.remove('opacity-0');
      } else {
        lazyElement.classList.remove('lazy-loaded');
        lazyElement.classList.add('opacity-0');
      }
    });
  }, { threshold: 0.1 });

  let lazyElements = document.querySelectorAll('.lazy-load');
  lazyElements.forEach(element => observer.observe(element));
});




