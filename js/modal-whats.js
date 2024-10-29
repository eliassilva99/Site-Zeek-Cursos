function openWhatsModal() {
  document.getElementById('modal-whats-cidade').style.display = 'block';
}

function closeWhatsModal() {
  document.getElementById('modal-whats-cidade').style.display = 'none';
}

function openWhatsApp(city) {
  let phoneNumber = '';
  let message = '';

  switch (city) {
      case 'Descalvado':
          phoneNumber = '5519992671617';
          message = 'Olá, vim pelo site e gostaria de melhores informações das qualificações!';
          break;
      case 'Ibaté':
          phoneNumber = '5516996294928';
          message = 'Olá, vim pelo site e gostaria de melhores informações das qualificações!';
          break;
      case 'Ribeirão Bonito':
          phoneNumber = '5516999940880';
          message = 'Olá, vim pelo site e gostaria de melhores informações das qualificações!';
          break;
  }

  // Fecha o modal antes de abrir o WhatsApp
  closeWhatsModal();

  // Abre o WhatsApp com a mensagem apropriada
  const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  window.open(whatsappURL, '_blank');
}