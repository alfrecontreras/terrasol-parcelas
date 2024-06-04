
import createServiceCard from '../components/ServiceCard';

export function initializeServiceCards() {
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