/**
 * ==========================================================================
 * ORQUESTRADOR CENTRAL - main.js (Módulo Entrada)
 * Importa todas as subfunções lógicas e resolve o problema de escopo global.
 * ==========================================================================
 */

// Importação das funções e lógicas modulares
import { iniciarLinhaDoTempo } from './modules/timeline.js';
import { toggleModal, sendSongToDJ, switchLetter, copyPixKey } from './modules/modal.js';
import { openLightbox, closeLightbox } from './utils/lightbox.js';
import { inicializarMuralRealTime, handleLiveSubmit, previewImage, removePreview } from './modules/mural.js';
import { gerenciarExibicaoBotoes } from './modules/timer.js';

// CONFIGURAÇÃO DO SEU EVENTO REAL
const DATA_HORA_FESTA = new Date("2026-10-17T20:30:00"); 
const LIMITE_DURACAO_BOTOES = 8; // Botões somem após 8 horas da hora de início [1]

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializa o card deslizante da linha do tempo
    iniciarLinhaDoTempo();

    // 2. Conecta ao Firebase e sincroniza o Mural ao Vivo em tempo real
    inicializarMuralRealTime();

    // 3. Executa a verificação dinâmica de tempo para os botões do DJ e da Gravata [1]
    gerenciarExibicaoBotoes(DATA_HORA_FESTA, LIMITE_DURACAO_BOTOES);
});

// RESOLUÇÃO DE ESCOPO: Vincula os módulos à janela global "window" para os cliques do HTML funcionarem [1]
window.toggleModal = toggleModal;
window.sendSongToDJ = sendSongToDJ;
window.switchLetter = switchLetter;
window.copyPixKey = copyPixKey;
window.handleLiveSubmit = handleLiveSubmit;
window.previewImage = previewImage;
window.removePreview = removePreview;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;