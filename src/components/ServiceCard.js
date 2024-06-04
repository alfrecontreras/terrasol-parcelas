// src/components/ServiceCard.js

function createServiceCard({ image, title, description }) {
    const card = document.createElement('div');
    card.classList.add('service-card');
  
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
  
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
  
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
  
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contáctanos';
    contactButton.onclick = () => {
      window.location.href = '/contact.html?service=' + title;
    };
  
    card.append(img, cardTitle, cardDescription, contactButton);
    return card;
  }
  
  export default createServiceCard;