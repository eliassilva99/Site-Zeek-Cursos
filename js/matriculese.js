document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('nameInput');
  const citySelect = document.getElementById('citySelect');
  const courseTypeSelect = document.getElementById('courseTypeSelect');
  const startButton = document.getElementById('startButton');

  // Mapeamento dos nomes dos cursos na URL para os nomes personalizados
  const nomesCursosPersonalizados = {
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
      "supervisorVendasLideranca": "Supervisor em Vendas e Liderança"
  };

  function checkFormValidity() {
      if (nameInput.value && citySelect.value && courseTypeSelect.value) {
          startButton.style.display = 'block';
      } else {
          startButton.style.display = 'none';
      }
  }

  nameInput.addEventListener('input', checkFormValidity);
  citySelect.addEventListener('change', checkFormValidity);
  courseTypeSelect.addEventListener('change', checkFormValidity);

  startButton.addEventListener('click', function() {
      const name = nameInput.value;
      const city = citySelect.options[citySelect.selectedIndex].text;
      const courseType = courseTypeSelect.value;
      const courseNameKey = window.location.pathname.split('/').pop().replace('.html', '');
      const courseName = nomesCursosPersonalizados[courseNameKey] || courseNameKey;
      let whatsappNumber = '';

      switch (citySelect.value) {
          case 'descalvado':
              whatsappNumber = '5519992671617'; // Número de telefone do WhatsApp de Descalvado
              break;
          case 'ibate':
              whatsappNumber = '5516996294928'; // Número de telefone do WhatsApp de Ibaté
              break;
          case 'ribeirao_bonito':
              whatsappNumber = '5516999940880'; // Número de telefone do WhatsApp de Ribeirão Bonito
              break;
      }

      if (whatsappNumber) {
          const message = `Olá, me chamo ${name}, e gostaria de me matricular em ${city} no curso de ${courseName} no método ${courseType}.`;
          const encodedMessage = encodeURIComponent(message);
          window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`);
      }
  });
});
