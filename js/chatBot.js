// script.js

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    const chatToggle = document.getElementById('chatToggle');

    if (chatbox.style.display === 'block') {
        chatbox.style.display = 'none';
        chatToggle.style.display = 'block'; // Mostra a imagem novamente
    } else {
        chatbox.style.display = 'block';
        chatToggle.style.display = 'none'; // Esconde a imagem
    }
}

// Adiciona o evento de clique na imagem para abrir/fechar o chat
document.getElementById('chatToggle').addEventListener('click', function (event) {
    event.stopPropagation(); // Impede que o clique na imagem feche o chat
    toggleChatbox();
});

document.addEventListener('click', function (event) {
    const chatbox = document.getElementById('chatbox');
    const chatToggle = document.getElementById('chatToggle');

    // Verifica se o clique foi fora do chatbox e da imagem do chat
    if (chatbox.style.display === 'block' && !chatbox.contains(event.target) && !chatToggle.contains(event.target)) {
        chatbox.style.display = 'none';
        chatToggle.style.display = 'block'; // Mostra a imagem novamente
    }
});

// Mapeia palavras-chave para respostas
const keywordResponses = {
    "oi": "Olá, como posso ajudar?",
    "oii": "Olá, como posso ajudar?",
    "bom dia": "Olá, como posso ajudar?",
    "boa tarde": "Olá, como posso ajudar?",
    "boa noite": "Olá, como posso ajudar?",

    "metodo": "A Zeek Cursos conta com o método de ensino interativo, projetado pensando em toda a Jornada de Aprendizado educacional.<br><br>Acreditamos que a educação transforma vidas, por isso, investimos em conectar nossa plataforma à realidade global e utilizar a tecnologia para promover praticidade e eficácia, além de tornar o ensino em algo mais interessante para os alunos.",
    "ensino": "A Zeek Cursos conta com o método de ensino interativo, projetado pensando em toda a Jornada de Aprendizado educacional.<br><br>Acreditamos que a educação transforma vidas, por isso, investimos em conectar nossa plataforma à realidade global e utilizar a tecnologia para promover praticidade e eficácia, além de tornar o ensino em algo mais interessante para os alunos.",
    "metodo de ensino": "A Zeek Cursos conta com o método de ensino interativo, projetado pensando em toda a Jornada de Aprendizado educacional. <br><br>Acreditamos que a educação transforma vidas, por isso, investimos em conectar nossa plataforma à realidade global e utilizar a tecnologia para promover praticidade e eficácia, além de tornar o ensino em algo mais interessante para os alunos.",
    "aulas": "A Zeek Cursos conta com o método de ensino interativo, projetado pensando em toda a Jornada de Aprendizado educacional.<br><br>Acreditamos que a educação transforma vidas, por isso, investimos em conectar nossa plataforma à realidade global e utilizar a tecnologia para promover praticidade e eficácia, além de tornar o ensino em algo mais interessante para os alunos.",

    "revisao": "Sim, é um momento especialmente dedicado para os alunos revisarem conteúdos já apresentados, esclarecerem dúvidas e consolidarem o conhecimento adquirido. Essas aulas oferecem uma oportunidade para reforçar os pontos importantes e garantir que todos os conceitos estejam claros.<br><br>Essas aulas são realizadas exclusivamente às segundas e terças-feiras, permitindo um foco específico nos tópicos que precisam de mais atenção por parte dos estudantes.",
    "revisar": "Sim, é um momento especialmente dedicado para os alunos revisarem conteúdos já apresentados, esclarecerem dúvidas e consolidarem o conhecimento adquirido. Essas aulas oferecem uma oportunidade para reforçar os pontos importantes e garantir que todos os conceitos estejam claros.<br><br>Essas aulas são realizadas exclusivamente às segundas e terças-feiras, permitindo um foco específico nos tópicos que precisam de mais atenção por parte dos estudantes.",
    
    "emprego": "Sim, contamos com um canal exclusivo de empregabilidade. Nosso objetivo é facilitar a inserção de nossos alunos no mercado de trabalho, conectando-os com empresas parceiras e oportunidades de emprego que se alinham com suas habilidades e formações.",
    "empregabilidade": "Sim, contamos com um canal exclusivo de empregabilidade. Nosso objetivo é facilitar a inserção de nossos alunos no mercado de trabalho, conectando-os com empresas parceiras e oportunidades de emprego que se alinham com suas habilidades e formações.",
    
    "plano de carreira": "Sim, contamos com 4 planos para trilhar sua formação. Sua carreira começa a partir dos 8 anos e temos certificações que vão do básico ao premium, valorizando ainda mais o seu estudo.<br><br>Nossos planos são projetados para acompanhar o desenvolvimento dos alunos em todas as etapas, garantindo uma formação contínua e de alta qualidade.",
    "carreira": "Sim, contamos com 4 planos para trilhar sua formação. Sua carreira começa a partir dos 8 anos e temos certificações que vão do básico ao premium, valorizando ainda mais o seu estudo.<br><br>Nossos planos são projetados para acompanhar o desenvolvimento dos alunos em todas as etapas, garantindo uma formação contínua e de alta qualidade.",

    "reconhecido pelo mec": "O MEC só autoriza cursos de graduação e pós-graduação. Assim como, as Secretarias Estaduais de Educação autorizam cursos técnicos profissionalizantes e do ensino médio. Portanto, os cursos livres não precisam de atos autorizativos por parte do Poder Público.<br><br>O MEC (Ministério da Educação), órgão da administração federal direta, tem como áreas de competência a política nacional de educação; a educação infantil; a educação em geral, compreendendo ensino fundamental, ensino médio, educação superior de jovens e adultos.<br><br>Portanto, os cursos da Zeek Cursos são livres usados para atualização / qualificação e podem contribuir para o currículo.<br><br>O Decreto Presidencial nº 5.154 de 23 de julho de 2004 e as normas da Resolução CNE nº 04/99 – MEC (art. 7º, § 3º e art.11) de 7 de outubro de 1999 também normatizam a legalidade do curso livre.",
    "mec": "O MEC só autoriza cursos de graduação e pós-graduação. Assim como, as Secretarias Estaduais de Educação autorizam cursos técnicos profissionalizantes e do ensino médio. Portanto, os cursos livres não precisam de atos autorizativos por parte do Poder Público.<br><br>O MEC (Ministério da Educação), órgão da administração federal direta, tem como áreas de competência a política nacional de educação; a educação infantil; a educação em geral, compreendendo ensino fundamental, ensino médio, educação superior de jovens e adultos.<br>Portanto, os cursos da Zeek Cursos são livres usados para atualização / qualificação e podem contribuir para o currículo.<br>O Decreto Presidencial nº 5.154 de 23 de julho de 2004 e as normas da Resolução CNE nº 04/99 – MEC (art. 7º, § 3º e art.11) de 7 de outubro de 1999 também normatizam a legalidade do curso livre.",
    
    "certificado": "Sim. O certificado é válido em todo o Brasil e pode ser usado para diferentes objetivos como horas complementares na faculdade, provas de título para destaque profissional, promoção no trabalho, entrevista de emprego e até prova para concurso público com base no edital.<br><br>O documento é aceito na grande maioria das instituições e empresas, no entanto, para utilizar o certificado para fins específicos, é válido consultar o regulamento com a própria instituição, edital do concurso ou entrevista.<br><br> Isso porque cada instituição possui suas próprias regras e exigências quanto ao certificado e a Zeek Cursos não pode ser responsabilizada por isso.",
    "valido": "Sim. O certificado é válido em todo o Brasil e pode ser usado para diferentes objetivos como horas complementares na faculdade, provas de título para destaque profissional, promoção no trabalho, entrevista de emprego e até prova para concurso público com base no edital.<br><br>O documento é aceito na grande maioria das instituições e empresas, no entanto, para utilizar o certificado para fins específicos, é válido consultar o regulamento com a própria instituição, edital do concurso ou entrevista.<br><br> Isso porque cada instituição possui suas próprias regras e exigências quanto ao certificado e a Zeek Cursos não pode ser responsabilizada por isso.",
    
    "pagamento": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",
    "dinheiro": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",
    "pagamento": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",
    "cartao": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",
    "boleto": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",
    "pix": "Pensando em nossos clientes, temos as opções de pagamento por cartão de crédito ou boleto bancário. <br><br>Essas opções visam proporcionar maior flexibilidade e conveniência para que você possa escolher a que melhor se adapta às suas necessidades",

    "horarios": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "horario": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "funcionamento": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "horarios": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "segunda": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "terca": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "quarta": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "quinta": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "sexta": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "sabado": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",
    "domingo": "Os horários das aulas são flexíveis, permitindo que cada aluno agende semanalmente conforme sua disponibilidade. <br><br>As aulas tem duração de até 02:00 horas e nossas unidades oferecem os seguintes horários: <br><br><b>Descalvado</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ibaté</b><br><br>Segunda à sexta 09:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.<br><br><b>Ribeirão Bonito</b><br><br>Segunda à sexta 13:00 às 21:00;<br><br>Sábado das 08:00 às 15:00.",

    "atrasar": "O tempo máximo de atraso permitido é de 15 minutos. Chegar dentro desse prazo é essencial para garantir que você aproveite ao máximo o conteúdo ministrado.",
    "atrasado": "O tempo máximo de atraso permitido é de 15 minutos. Chegar dentro desse prazo é essencial para garantir que você aproveite ao máximo o conteúdo ministrado.",

    "descalvado": "<b>Descalvado</b><br><br>Rua Coronel Rafael Tobias, nº 284 - Centro<br><br>(19) 99267-1617",
    "ibate": "<b>Ibaté</b><br><br>Rua Floriano Peixoto, nº 628 - Centro<br><br>(16) 99629-4928",
    "ribeirao": "<b>Ribeirão Bonito</b><br><br>Rua São Paulo, nº 530 - Centro<br><br>(16) 99994-0880",
    "endereco": "<b>Descalvado</b><br><br>Rua Coronel Rafael Tobias, nº 284 - Centro<br><br>(19) 99267-1617<br><br><b>Ibaté</b><br><br>Rua Floriano Peixoto, nº 628 - Centro<br><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br><br>Rua São Paulo, nº 530 - Centro<br><br>(16) 99994-0880<br><br>",
    "bairro": "<b>Descalvado</b><br><br>Rua Coronel Rafael Tobias, nº 284 - Centro<br><br>(19) 99267-1617<br><br><b>Ibaté</b><br><br>Rua Floriano Peixoto, nº 628 - Centro<br><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br><br>Rua São Paulo, nº 530 - Centro<br><br>(16) 99994-0880<br><br>",
    "rua": "<b>Descalvado</b><br><br>Rua Coronel Rafael Tobias, nº 284 - Centro<br><br>(19) 99267-1617<br><br><b>Ibaté</b><br><br>Rua Floriano Peixoto, nº 628 - Centro<br><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br><br>Rua São Paulo, nº 530 - Centro<br><br>(16) 99994-0880<br><br>",
    "cidade": "<b>Descalvado</b><br><br>Rua Coronel Rafael Tobias, nº 284 - Centro<br><br>(19) 99267-1617<br><br><b>Ibaté</b><br><br>Rua Floriano Peixoto, nº 628 - Centro<br><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br><br>Rua São Paulo, nº 530 - Centro<br><br>(16) 99994-0880<br><br>",
    "telefone": "<b>Descalvado</b><br>(19) 99267-1617<br><br><b>Ibaté</b><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br>(16) 99994-0880",
    "whatsapp": "<b>Descalvado</b><br>(19) 99267-1617<br><br><b>Ibaté</b><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br>(16) 99994-0880",
    "what sapp": "<b>Descalvado</b><br>(19) 99267-1617<br><br><b>Ibaté</b><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br>(16) 99994-0880",
    "zap": "<b>Descalvado</b><br>(19) 99267-1617<br><br><b>Ibaté</b><br>(16) 99629-4928<br><br><b>Ribeirão Bonito</b><br>(16) 99994-0880",


    "plano de carreira": "",
    "plano de carreira": "",
    "plano de carreira": "",
    "plano de carreira": "",


};

// Sugestões de perguntas
const suggestions = [
    "Você pode perguntar sobre:<br> Horário; <br> Formas de Pagamento; <br> Certificado;"
];

// Função para remover acentos e converter para minúsculas
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Contador de perguntas não reconhecidas
let unknownQuestionCount = 0;
const MAX_UNKNOWN_QUESTIONS = 2;

function getResponse() {
    const userInput = normalizeString(document.getElementById('userInput').value.trim());
    const chatlogs = document.getElementById('chatlogs');
    const userMessage = `<p class="user-msg">${userInput}</p>`;
    chatlogs.innerHTML += userMessage;

    // Encontrar a resposta correspondente
    let response = "Desculpe, não entendi a sua pergunta.";
    let foundResponse = false;

    for (let keyword in keywordResponses) {
        if (userInput.includes(keyword)) {
            response = keywordResponses[keyword];
            foundResponse = true;
            break;
        }
    }

    // Se não encontrou uma resposta, incremente o contador e sugira perguntas
    if (!foundResponse) {
        unknownQuestionCount++;
        if (unknownQuestionCount >= MAX_UNKNOWN_QUESTIONS) {
            // Converte sugestões para uma lista de itens separados por <br>
            response = "Não consegui encontrar uma resposta para sua pergunta. Aqui estão algumas sugestões:<br>" +
                suggestions.map(suggestion => `<p class="text-black">${suggestion}</p>`).join('');
        }
    } else {
        // Se encontrou uma resposta, reseta o contador
        unknownQuestionCount = 0;
    }

    const botMessage = `<p class="bot-msg">${response}</p>`;
    chatlogs.innerHTML += botMessage;

    document.getElementById('userInput').value = '';
    chatlogs.scrollTop = chatlogs.scrollHeight; // Auto-scroll para a última mensagem
}
