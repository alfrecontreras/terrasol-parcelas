
import { initializeServiceCards } from './service';
import { initializeCarousel } from './carousel';
import { initializeContactForm } from './form';

document.addEventListener('DOMContentLoaded', () => {
  initializeServiceCards();
  initializeCarousel();
  initializeContactForm();
});