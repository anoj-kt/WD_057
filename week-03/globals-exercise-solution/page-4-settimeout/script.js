setTimeout(() => {
  const promotionMessage = document.createElement('div');
  promotionMessage.textContent =
    'Special Offer: Get 20% off your next purchase!';
  promotionMessage.className =
    'bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto';

  const messageContainer = document.getElementById('message-container');

  messageContainer.appendChild(promotionMessage);
}, 3000);
