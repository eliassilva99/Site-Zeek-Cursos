// router.js
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // Mapeie os URLs desejados para os arquivos HTML correspondentes
    const routeMappings = {
        '/sobreNos': 'sobreNos.html',
        '/supervisorVendasLideranca': 'supervisorVendasLideranca.html'
        // Adicione mais URLs e mapeamentos conforme necessário
    };

    // Verifique se há um mapeamento para o URL atual
    const targetPage = routeMappings[path];

    if (targetPage) {
        // Se houver um mapeamento, redirecione para o arquivo HTML correspondente
        window.location.href = targetPage;
    }
});
