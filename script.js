const form = document.getElementById('celebForm');
const vacationList = document.getElementById('vacationList');
let vacations = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newVacation = {
    name: document.getElementById('name').value,
    image: document.getElementById('image').value,
    location: document.getElementById('location').value,
    dates: document.getElementById('dates').value,
    price: document.getElementById('price').value,
    terms: document.getElementById('terms').value
  };

  vacations.push(newVacation);
  renderVacations();
  form.reset();
});

function renderVacations() {
  vacationList.innerHTML = "";
  vacations.forEach(vac => {
    const card = document.createElement('div');
    card.classList.add('vacation-card');
    card.innerHTML = `
      <img src="${vac.image}" alt="${vac.name}" />
      <h3>${vac.name}</h3>
      <p><strong>Location:</strong> ${vac.location}</p>
      <p><strong>Dates:</strong> ${vac.dates}</p>
      <p><strong>Price:</strong> $ ${vac.price}</p>
      <p><strong>Meeting Terms:</strong> ${vac.terms}</p>
      <button onclick="alert('Booking Confirmed for ${vac.name}!')">Book Now</button>
    `;
    vacationList.appendChild(card);
  });
}