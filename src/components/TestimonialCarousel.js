// src/components/TestimonialCarousel.js

function createTestimonialCarousel(testimonials) {
  const carousel = document.createElement('div');
  carousel.classList.add('testimonial-carousel');

  testimonials.forEach((testimonial) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    const quote = document.createElement('p');
    quote.textContent = testimonial.quote;

    const author = document.createElement('h4');
    author.textContent = testimonial.author;

    item.append(quote, author);
    carousel.append(item);
  });

  return carousel;
}

export default createTestimonialCarousel;