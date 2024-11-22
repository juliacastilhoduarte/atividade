// Função para exibir o conteúdo completo de um post
function mostrarPost(postId) {
    const post = document.getElementById(postId);
    
    if (post.style.display === "none" || post.style.display === "") {
        post.style.display = "block";  // Exibe o conteúdo do post
    } else {
        post.style.display = "none";  // Oculta o conteúdo do post
    }
}

// Exibir a mensagem de boas-vindas após o carregamento da página
window.onload = function() {
    const messageBox = document.getElementById("welcome-message");
    messageBox.style.display = "block";  // Torna a mensagem visível
};
