const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  window.alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}`);
});
