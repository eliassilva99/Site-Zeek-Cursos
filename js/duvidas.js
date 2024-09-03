document.addEventListener('DOMContentLoaded', function() {
  const citySelect = document.getElementById('citySelect');
  const startButton = document.getElementById('startButton');
  const defaultMessage = "Olá, vim pelo site e gostaria de tirar uma dúvida!";

  citySelect.addEventListener('change', function() {
      if (citySelect.value !== '') {
          startButton.style.display = 'block';
      } else {
          startButton.style.display = 'none';
      }
  });

  startButton.addEventListener('click', function() {
      let whatsappNumber = '';
      let message = encodeURIComponent(defaultMessage);

      switch (citySelect.value) {
          case 'descalvado':
              whatsappNumber = '5519992671617'; // Número de telefone do WhatsApp de Descalvado
              break;
          case 'ibate':
              whatsappNumber = '5516999921250'; // Número de telefone do WhatsApp de Ibaté
              break;
          case 'ribeirao_bonito':
              whatsappNumber = '5516999940880'; // Número de telefone do WhatsApp de Ribeirão Bonito
              break;
          default:
              whatsappNumber = ''; // Número de telefone padrão (caso nenhum selecionado)
      }

      if (whatsappNumber !== '') {
          let url = 'https://api.whatsapp.com/send?phone=' + whatsappNumber;
          if (message) {
              url += '&text=' + message;
          }
          window.open(url);
      }
  });
});