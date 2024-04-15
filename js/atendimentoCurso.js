document.getElementById("atendimentoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio padrão do formulário

  var nome = document.getElementById("nome").value;
  var curso = document.getElementById("curso").value;
  var cidade = document.getElementById("cidade").value;

  // Abre o link do WhatsApp baseado na cidade selecionada
  switch (cidade) {
    case "Ibaté":
      window.open("https://wa.me/5516996294928?text=Olá,%20me%20chamo%20" + encodeURIComponent(nome) + ".%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20para%20o%20curso%20de%20" + encodeURIComponent(curso) + "%20em%20" + encodeURIComponent(cidade) + "!");
      break;
    case "Descalvado":
      window.open("https://wa.me/5519992671617?text=Olá,%20me%20chamo%20" + encodeURIComponent(nome) + ".%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20para%20o%20curso%20de%20" + encodeURIComponent(curso) + "%20em%20" + encodeURIComponent(cidade) + "!");
      break;
    case "Ribeirão Bonito":
      window.open("https://wa.me/5516999940880?text=Olá,%20me%20chamo%20" + encodeURIComponent(nome) + ".%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20para%20o%20curso%20de%20" + encodeURIComponent(curso) + "%20em%20" + encodeURIComponent(cidade) + "!");
      break;
    default:
      alert("Selecione uma cidade válida.");
  }
});
