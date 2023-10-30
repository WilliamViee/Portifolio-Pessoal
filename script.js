const modalButton = document.getElementById("botao-tela-contato");
const modal = document.getElementById("tela-contato");
const modalContent = document.getElementById("tela-contato-content");
const closeModalButton = document.getElementById("fechar-tela-contato");
const linkContato = document.getElementById("link-contato");

function openModal() {
    modal.style.display = "block";
    clearForm(); // Limpa o formulário ao abrir
    setTimeout(() => {
        modalContent.style.opacity = 1; // Define a opacidade para 1 com um pequeno atraso
    }, 0);
}

function closeModal() {
    modalContent.style.opacity = 0; // Primeiro, define a opacidade como 0
    setTimeout(() => {
        modal.style.display = "none";
        clearForm(); // Limpa o formulário ao fechar
    }, 300); // Define a visibilidade para "none" após a transição
}

modalButton.addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

linkContato.addEventListener("click", openModal);

const contactForm = document.querySelector("form"); // Seleciona o formulário
const feedbackMessage = document.getElementById("feedback-message");

function clearForm() {
    contactForm.reset(); // Reseta o formulário
    feedbackMessage.textContent = ""; // Limpa a mensagem de feedback
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Adiciona a lógica de validação aqui
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        // Envia o formulário ou adiciona a lógica para processar os dados
        feedbackMessage.textContent = "Mensagem enviada com sucesso!";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = "Por favor, preencha todos os campos.";
        feedbackMessage.style.color = "red";
    }
});
