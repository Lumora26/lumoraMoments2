/**
 * ==========================================================================
 * MÓDULO: Temporizador de Eventos (timer.js)
 * Controla o tempo de exibição de recursos de festa (DJ e Gravata) [1].
 * ==========================================================================
 */

/**
 * Verifica se a festa começou há mais de 8 horas. Se sim, remove os botões 
 * temporários e reajusta o layout da grade para exibir apenas o botão de votos [1].
 * @param {Date} dataInicio - Data e hora de início do casamento
 * @param {number} limiteHoras - Limite máximo de duração dos botões (ex: 8 horas)
 */
export function gerenciarExibicaoBotoes(dataInicio, limiteHoras) {
    const agora = new Date();
    const limiteCalculado = new Date(dataInicio.getTime() + (limiteHoras * 60 * 60 * 1000));
    
    // Captura os elementos no DOM
    const btnDJ = document.getElementById("btnPedirMusica");
    const btnGravata = document.getElementById("btnPresente");
    const gridBotoes = document.getElementById("actionButtonsGrid");

    // Se o horário atual passou do limite da festa
    if (agora > limiteCalculado) {
        if (btnDJ) btnDJ.remove(); // Deleta o botão do DJ do HTML [1]
        if (btnGravata) btnGravata.remove(); // Deleta o botão da Gravata do HTML [1]
        
        // Reajusta dinamicamente a grade para ocupar 1 colunas (100% de largura)
        if (gridBotoes) {
            gridBotoes.style.gridTemplateColumns = "1fr";
        }
    }
}