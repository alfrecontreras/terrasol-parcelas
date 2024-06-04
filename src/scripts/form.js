
import createContactForm from '../components/ContactForm';

export function initializeContactForm() {
  const container = document.getElementById('contact-form-container');
  const form = createContactForm();
  container.appendChild(form);
}