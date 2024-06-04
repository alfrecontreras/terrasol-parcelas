import createTestimonialCarousel from '../components/TestimonialCarousel';

export function initializeCarousel() {
  const testimonials = [
    { quote: '¡Increíble experiencia!', author: 'Cliente 1' },
    { quote: 'Muy satisfecho con la compra.', author: 'Cliente 2' },
    // Añadir más testimonios según sea necesario
  ];

  const container = document.getElementById('carousel-container');
  const carousel = createTestimonialCarousel(testimonials);
  container.appendChild(carousel);
}