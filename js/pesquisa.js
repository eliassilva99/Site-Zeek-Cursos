
function showSearchBox() {
  var searchBox = document.getElementById("searchBox");
  searchBox.style.display = "block";
  // Evita que o clique no ícone de pesquisa propague para o corpo da página
  event.stopPropagation();
}

function hideSearchBox() {
  var searchBox = document.getElementById("searchBox");
  // Verifica se o clique ocorreu dentro da caixa de pesquisa
  if (!searchBox.contains(event.target)) {
    searchBox.style.display = "none";
  }
}

// Função para remover acentos de uma string
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchPage() {
  // Obtém o termo de pesquisa e o converte para minúsculas sem acentos
  var searchTerm = removeAccents(document.getElementById("searchInput").value.toLowerCase());

  // Mapeia os termos de pesquisa para as páginas correspondentes
  var searchTermsMap = {
    "informatica": "informaticaAplicada.html",
    "informatica aplicada": "informaticaAplicada.html",

    "informatica com rotinas administrativas": "informaticaComRotinas.html",
    "informatica com rotinas": "informaticaComRotinas.html",
    "rotinas": "informaticaComRotinas.html",

    "microsoft office": "microsoftOffice.html",
    "office": "microsoftOffice.html",
    "pacote office": "microsoftOffice.html",


    "ferramentas de produtividade google": "ferramentasProdutividadeGoogle.html",
    "google": "ferramentasProdutividadeGoogle.html",

    "melhor idade conectada": "melhorIdadeConectada.html",
    "melhor idade": "melhorIdadeConectada.html",
    "idade conectada": "melhorIdadeConectada.html",

    "excel avancado": "excelAvancado.html",
    "excel": "excelAvancado.html",

    "design digital": "designDigital.html",
    "design": "designDigital.html",

    "desenhista personal cad": "desenhistaPersonalCad.html",
    "desenhista": "desenhistaPersonalCad.html",
    "cad": "desenhistaPersonalCad.html",
    "autocad": "desenhistaPersonalCad.html",
    "auto cad": "desenhistaPersonalCad.html",
    "sketchup": "desenhistaPersonalCad.html",

    "assistencia tecnica de computadores": "montagemManutencaoComputadores.html",
    "manutencao de computadores": "montagemManutencaoComputadores.html",
    "manutencao": "montagemManutencaoComputadores.html",
    "computadores": "montagemManutencaoComputadores.html",

    "desenvolvedor de sistemas": "desenvolvedorSistemas.html",
    "sistemas": "desenvolvedorSistemas.html",

    "desenvolvedor web": "desenvolvedorWeb.html",
    "web": "desenvolvedorWeb.html",

    "edicao de videos": "edicaoVideos.html",
    "videos": "edicaoVideos.html",

    "power bi": "powerBi.html",
    "bi": "powerBi.html",

    "marketing digital": "marketingDigital.html",
    "marketing": "marketingDigital.html",

    "atendente de farmacia e drogaria": "atendenteFarmacia.html",
    "farmacia e drogaria": "atendenteFarmacia.html",
    "farmacia": "atendenteFarmacia.html",

    "auxiliar administrativo": "auxiliarAdministrativo.html",
    "administracao": "auxiliarAdministrativo.html",
    "adm": "auxiliarAdministrativo.html",

    "auxiliar de escritorio": "auxiliarEscritorio.html",
    "escritorio": "auxiliarEscritorio.html",

    "assistente de producao de acucar e alcool": "assistenteDeProducaoAcucarAlcool.html",
    "acucar e alcool": "assistenteDeProducaoAcucarAlcool.html",

    "empreendedorismo": "empreendedorismo.html",

    "gestor administrativo": "gestorAdministrativo.html",

    "gestor financeiro": "gestorFinanceiro.html",
    "financeiro": "gestorFinanceiro.html",

    "operador de caixa": "operadorDeCaixa.html",
    "operador": "operadorDeCaixa.html",
    "caixa": "operadorDeCaixa.html",

    "agente de hotelaria e turismo": "agentedehotelariaeturismo.html",
    "hotelaria e turismo": "agentedehotelariaeturismo.html",
    "hotelaria": "agentedehotelariaeturismo.html",
    "turismo": "agentedehotelariaeturismo.html",

    "supervisor em vendas e liderança": "supervisorVendasLideranca.html",
    "supervisor em vendas": "supervisorVendasLideranca.html",
    "vendas e lideranca": "supervisorVendasLideranca.html",
    "supervisor": "supervisorVendasLideranca.html",
    "vendas": "supervisorVendasLideranca.html",
    "lideranca": "supervisorVendasLideranca.html",

    "evolucao pessoal e profissional": "evolucaoProfissional.html",
    "evolucao pessoal": "evolucaoProfissional.html",
    "evolucao profissional": "evolucaoProfissional.html",
    "evolucao": "evolucaoProfissional.html",
    "pessoal e profissional": "evolucaoProfissional.html",

    "recursos humanos e departamento pessoal": "recursosHumanosDepartamentoPessoal.html",
    "recursos humanos": "recursosHumanosDepartamentoPessoal.html",
    "rh": "recursosHumanosDepartamentoPessoal.html",

    "departamento pessoal": "recursosHumanosDepartamentoPessoal.html",
    "dp": "recursosHumanosDepartamentoPessoal.html",
  
    "robotica educacional": "roboticaEducacional.html",
    "robotica": "roboticaEducacional.html",
    "educacional": "roboticaEducacional.html",

    "robotica arduino": "roboticaArduino.html",
    "arduino": "roboticaArduino.html",

    "desenvolvimento de jogos - gamer starter": "desenvolvimentoGamesStarter.html",
    "gamer starter": "desenvolvimentoGamesStarter.html",
    "games": "desenvolvimentoGamesStarter.html",
    "starter": "desenvolvimentoGamesStarter.html",

    "desenvolvimento de jogos - profissional": "desenvolvimentoGamesProfissional.html",
    "desenvolvimento de jogos": "desenvolvimentoGamesProfissional.html",
    "jogos": "desenvolvimentoGamesProfissional.html",
    "profissional": "desenvolvimentoGamesProfissional.html",
    
    "ingles kids": "inglesKids.html",
    "kids": "inglesKids.html",

    "ingles jovens": "inglesJovens.html",
    "ingles": "inglesJovens.html",
    "jovens": "inglesJovens.html",
    
    "ingles adultos": "inglesAdultos.html",
    "adultos": "inglesAdultos.html",
  };

  // Verifica se o termo de pesquisa está no mapeamento
  if (searchTerm in searchTermsMap) {
    // Redireciona para a página correspondente ao termo de pesquisa
    window.location.href = searchTermsMap[searchTerm];
  } else {
    // Se o termo de pesquisa não estiver no mapeamento, exibe um alerta
    alert("Curso não encontrado!");
  }

  // Oculta a caixa de pesquisa após a pesquisa
  hideSearchBox();
}