function showOptionsMenuCruzeiro(optionNumber) {
    // Esconde todas as sub-opções
    var subOptions = document.querySelectorAll('.sub-options-menucruzeiro');
    subOptions.forEach(function(option) {
        option.classList.remove('active-menucruzeiro');
    });

    // Mostra as sub-opções da opção clicada
    var selectedOption = document.getElementById('options-menucruzeiro-' + optionNumber);
    selectedOption.classList.add('active-menucruzeiro');
}