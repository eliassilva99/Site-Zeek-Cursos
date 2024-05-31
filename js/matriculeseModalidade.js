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
    "evolucaoProfissionalteste": "Evolução Pessoal e Profissional",
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

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('matriculaModal');
    const closeButton = document.querySelector('#matriculaModal .close');
    const nameInput = document.getElementById('modalNameInput');
    const citySelect = document.getElementById('modalCitySelect');
    const sendButton = document.getElementById('modalSendButton');
    let modalidadeSelecionada = '';

    // Função para exibir as opções de cidade quando o seletor é clicado
    function showCityOptions() {
        citySelect.innerHTML = ''; // Limpa as opções existentes

        // Adiciona a opção "Escolha sua cidade" se nenhuma cidade estiver selecionada
        if (!citySelect.value) {
            const defaultOption = document.createElement('option');
            defaultOption.value = 'escolhasuacidade';
            defaultOption.textContent = 'Escolha sua cidade';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            citySelect.appendChild(defaultOption);
        }

        for (const cityKey in nomesCidades) {
            const cityName = nomesCidades[cityKey];
            const option = document.createElement('option');
            option.value = cityKey;
            option.textContent = cityName;
            citySelect.appendChild(option);
        }
    }

    // Adicionar evento de clique para abrir o modal quando clicar no botão "Matricule-se"
    const startButtons = document.querySelectorAll('.botao-iniciar-atendimento,.botao-iniciar-atendimento-presencial');
    startButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            modalidadeSelecionada = button.id; // Obtém a modalidade selecionada a partir do ID do botão
            showCityOptions(); // Mostra as opções de cidade ao abrir o modal
        });
    });

    // Fechar o modal quando o usuário clicar no botão de fechar (x)
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Adicionar evento de clique para enviar a mensagem do WhatsApp
    sendButton.addEventListener('click', function() {
        const name = nameInput.value.trim(); // Remove espaços em branco no início e no fim
        const cityKey = citySelect.value;
        const city = nomesCidades[cityKey] || cityKey;
        const courseNameKey = window.location.pathname.split('/').pop().replace('.html', '');
        const courseName = nomesCursosPersonalizados[courseNameKey] || courseNameKey;
        let whatsappNumber = '';

        // Verifica se o campo de nome está vazio
        if (name === '') {
            alert('Digite seu nome!'); // Exibe alerta se o campo de nome estiver vazio
            return; // Retorna para evitar o fechamento do modal
        }

        // Verifica se nenhuma cidade foi selecionada
        if (cityKey === 'escolhasuacidade') {
            alert('Escolha sua cidade!'); // Exibe alerta se nenhuma cidade for selecionada
            return; // Retorna para evitar o fechamento do modal
        }

        switch (cityKey) {
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
            const message = `Olá, me chamo ${name}. Vim pelo site e gostaria de me matricular em ${city} no curso de ${courseName} na modalidade ${modalidadeSelecionada}!`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`);
        }

        modal.style.display = 'none'; // Fechar o modal após enviar a mensagem
    });
});
