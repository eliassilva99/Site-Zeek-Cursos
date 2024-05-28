// Mapeamento dos nomes dos cursos na URL para os nomes personalizados
var nomesCursosPersonalizados = {
  "agentedehotelariaeturismo": "Agente de Hotelaria e Turismo",
  "assistenteDeProducaoAcucarAlcool": "Assistente de Produção de Açúcar e Álcool",
  "atendenteFarmacia": "Atendente de Farmácia",
  "auxiliarAdministrativo": "Auxiliar Administrativo",
  "auxiliarEscritorio": "Auxiliar de Escritório",
  "desenhistaPersonalCad": "Desenhista Personal CAD",
  "desenvolvedorSistemas": "Desenvolvedor de Sistemas",
  "desenvolvedorWeb": "Desenvolvedor WEB",
  "desenvolvimentoGamesProfissional": "Desenvolvimento de Games - Profissional",
  "desenvolvimentoGamesStarter": "Desenvolvimento de Games - Starter",
  "designDigital": "Design Digital",
  "edicaoVideos": "Edição de Vídeos",
  "empreendedorismo": "Empreendedorismo",
  "evolucaoProfissional": "Evolução Pessoal e Profissional",
  "excelAvancado": "Excel Avançado",
  "ferramentasProdutividadeGoogle": "Ferramentas de Produtividade Google",
  "gestorAdministrativo": "Gestor Administrativo",
  "gestorFinanceiro": "Gestor Financeiro",
  "informaticaAplicada": "Informática Aplicada",
  "informaticaComRotinas": "Informática com Rotinas Administrativas",
  "inglesAdultos": "Inglês - Adultos",
  "inglesJovens": "Inglês - Jovens",
  "inglesKids": "Inglês - Kids",
  "marketingDigital": "Marketing Digital",
  "melhorIdadeConectada": "Melhor Idade Conectada",
  "microsoftOffice": "Microsoft Office",
  "montagemManutencaoComputadores": "Montagem e Manutenção de Computadores",
  "operadorDeCaixa": "Operador de Caixa",
  "powerBi": "Power Bi",
  "recursosHumanosDepartamentoPessoal": "Recursos Humanos e Departamento Pessoal",
  "roboticaArduino": "Robótica Arduino",
  "roboticaEducacional": "Robótica Educacional",
  "supervisorVendasLideranca": "Supervisor em Vendas e Liderança",
};

document.getElementById("atendimentoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio padrão do formulário

  var nome = document.getElementById("nome").value;
  var cidade = document.getElementById("cidade").value;
  var curso = getCursoFromURL(); // obtém o nome do curso da URL

  // Verifica se o nome do curso está mapeado nos nomes personalizados
  var cursoPersonalizado = nomesCursosPersonalizados[curso];
  if (!cursoPersonalizado) {
    alert("Nome do curso não encontrado.");
    return;
  }

  // Abre o link do WhatsApp baseado na cidade selecionada
  switch (cidade) {
    case "Ibaté":
      window.open("https://wa.me/5516996294928?text=Olá, me chamo " + encodeURIComponent(nome) + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + encodeURIComponent(cursoPersonalizado) + " em " + encodeURIComponent(cidade) + "!");
      break;
    case "Descalvado":
      window.open("https://wa.me/5519992671617?text=Olá, me chamo " + encodeURIComponent(nome) + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + encodeURIComponent(cursoPersonalizado) + " em " + encodeURIComponent(cidade) + "!");
      break;
    case "Ribeirão Bonito":
      window.open("https://wa.me/5516999940880?text=Olá, me chamo " + encodeURIComponent(nome) + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + encodeURIComponent(cursoPersonalizado) + " em " + encodeURIComponent(cidade) + "!");
      break;
    default:
      alert("Selecione uma cidade válida.");
  }
});

function getCursoFromURL() {
  // Obtém o nome do arquivo HTML atual
  var url = window.location.href;
  var ultimoBarraIndex = url.lastIndexOf("/");
  var nomeArquivo = url.substr(ultimoBarraIndex + 1);

  // Remove a extensão .html, se presente
  if (nomeArquivo.endsWith(".html")) {
    nomeArquivo = nomeArquivo.slice(0, -5);
  }

  // Substitui os traços por espaços e retorna
  return nomeArquivo.replace(/-/g, " ");
}
