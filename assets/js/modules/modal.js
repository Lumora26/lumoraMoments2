/**
 * ==========================================================================
 * MÓDULO: Controle de Modais, WhatsApp do DJ, Abas de Votos e Cópia Pix [1]
 * ==========================================================================
 */

export function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

export function sendSongToDJ(event) {
    event.preventDefault();
    
    const nome = document.getElementById('dj_guest').value;
    const musica = document.getElementById('dj_song').value;
    const djs_whatsapp_number = "5511999999999"; // Substitua pelo número real do DJ
    
    const textTemplate = `Olá, DJ! Meu nome é ${nome}. Estou no casamento de Pedro & Mariana e gostaria muito de pedir a música: "${musica}" para tocar na pista de dança! 💍✨`;
    const encodedText = encodeURIComponent(textTemplate);
    
    window.open(`https://wa.me/${djs_whatsapp_number}?text=${encodedText}`, '_blank');
    
    document.getElementById('dj_guest').value = "";
    document.getElementById('dj_song').value = "";
    toggleModal('djModal', false);
}

export function switchLetter(idLetter) {
    document.querySelectorAll('.letter-text').forEach(el => el.classList.add('hidden'));
    
    for (let i = 1; i <= 2; i++) {
        const tab = document.getElementById(`tab-c${i}`);
        if (!tab) continue;
        
        if (i === idLetter) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    }

    document.getElementById(`letter-content-${idLetter}`).classList.remove('hidden');
}

/**
 * Copia a chave Pix do casamento para a área de transferência do usuário [1].
 */
export function copyPixKey() {
    const pixKeyText = document.getElementById("pixKeyValue").innerText;
    const btnCopy = document.getElementById("btnCopyPix");

    navigator.clipboard.writeText(pixKeyText).then(() => {
        // Altera o visual do botão temporariamente para sucesso
        btnCopy.innerText = "Copiado! ✓";
        btnCopy.style.backgroundColor = "#22c55e"; // Cor verde de sucesso

        setTimeout(() => {
            btnCopy.innerText = "Copiar Chave Pix";
            btnCopy.style.backgroundColor = ""; // Restaura a cor original do CSS
        }, 2500);
    }).catch(err => {
        console.error("Erro ao copiar Pix: ", err);
        alert("Chave Pix: " + pixKeyText);
    });
}