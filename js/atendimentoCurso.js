document.addEventListener('DOMContentLoaded', function() {
  // Mapeamento dos nomes das cidades
  const nomesCidades = {
    "descalvado": "Descalvado",
    "ibate": "Ibaté",
    "ribeirao_bonito": "Ribeirão Bonito"
  };

  // Mapeamento dos nomes dos cursos na URL para os nomes personalizados
  const nomesCursosPersonalizados = {
    "agentedehotelariaeturismo": "Agente de Hotelaria e Turismo",
    "assistenteDeProducaoAcucarAlcool": "Assistente de Produção de Açúcar e Álcool",
    "atendenteFarmacia": "Atendente de Farmácia",
    "assistenteAdministrativo": "Auxiliar Administrativo",
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
    "evolucaoProfissionalteste": "Evolução Pessoal e Profissional",
    "excelAvancado": "Excel Avançado",
    "excelAvancadoPowerBi": "Excel Avançado + Power Bi",
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
    "supervisorVendasLideranca": "Supervisor em Vendas e Liderança"
  };

  // Função para obter o curso da URL
  function getCursoFromURL() {
    const url = window.location.href;
    const ultimoBarraIndex = url.lastIndexOf("/");
    let nomeArquivo = url.substr(ultimoBarraIndex + 1);
    
    // Remove a extensão .html, se presente
    if (nomeArquivo.endsWith(".html")) {
      nomeArquivo = nomeArquivo.slice(0, -5);
    }

    // Substitui os traços por nada e retorna
    return nomeArquivo.replace(/-/g, "");
  }

  // Função para iniciar atendimento
  function iniciarAtendimento(event) {
    event.preventDefault(); // Previene o envio padrão do formulário

    const nome = document.getElementById("campoNome").value.trim();
    const cidadeKey = document.getElementById("campoCidade").value.trim().toLowerCase();
    const cursoKey = getCursoFromURL();

    // Verifica se o nome do curso está mapeado nos nomes personalizados
    const cursoPersonalizado = nomesCursosPersonalizados[cursoKey];
    if (!cursoPersonalizado) {
      alert("Nome do curso não encontrado.");
      return;
    }

    // Verifica se a cidade está mapeada nos nomes de cidades
    const cidade = nomesCidades[cidadeKey];
    if (!cidade) {
      alert("Selecione uma cidade válida.");
      return;
    }

    let whatsappNumber = '';
    switch (cidadeKey) {
      case 'descalvado':
        whatsappNumber = '5516999921250'; // Número de telefone do WhatsApp de Descalvado
        break;
      case 'ibate':
        whatsappNumber = '5516999921250'; // Número de telefone do WhatsApp de Ibaté
        break;
      case 'ribeirao_bonito':
        whatsappNumber = '5516999921250'; // Número de telefone do WhatsApp de Ribeirão Bonito
        break;
    }

    if (whatsappNumber) {
      const message = `Olá, me chamo ${nome}. Vim pelo site e gostaria de agendar uma aula experimental em ${cidade} para o curso de ${cursoPersonalizado}!`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`);
    }
  }

  document.getElementById("formularioContato").addEventListener("submit", iniciarAtendimento);
});
