
import React from 'react';
import createServiceCard from './components/ServiceCard';
import createTestimonialCarousel from './components/TestimonialCarousel';
import createContactForm from './components/ContactForm';

const App = () => {
  React.useEffect(() => {
    initializeServiceCards();
    initializeCarousel();
    initializeContactForm();
  }, []);

  return (
    <div>
      <div id="services-container"></div>
      <div id="carousel-container"></div>
      <div id="contact-form-container"></div>
    </div>
  );
};

export default App;

function initializeServiceCards() {
  const services = [
    { image: 'service1.jpg', title: 'Parcela 1', description: 'Descripción de la Parcela 1' },
    { image: 'service2.jpg', title: 'Parcela 2', description: 'Descripción de la Parcela 2' },
    // Añadir más servicios según sea necesario
  ];

  const container = document.getElementById('services-container');
  services.forEach((service) => {
    const card = createServiceCard(service);
    container.appendChild(card);
  });
}

function initializeCarousel() {
  const testimonials = [
    { quote: '¡Increíble experiencia!', author: 'Cliente 1' },
    { quote: 'Muy satisfecho con la compra.', author: 'Cliente 2' },
    // Añadir más testimonios según sea necesario
  ];

  const container = document.getElementById('carousel-container');
  const carousel = createTestimonialCarousel(testimonials);
  container.appendChild(carousel);
}

function initializeContactForm() {
  const container = document.getElementById('contact-form-container');
  const form = createContactForm();
  container.appendChild(form);
}