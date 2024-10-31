document.addEventListener("DOMContentLoaded", function() {
    const professorBtn = document.getElementById("professor-btn");
    const alunoBtn = document.getElementById("aluno-btn");
    const loginForm = document.querySelector("form");

    // Variáveis para acompanhar o botão selecionado
    let selectedRole = "professor"; // Valor padrão como "professor"
    
    professorBtn.addEventListener("click", function() {
        selectedRole = "professor";
        professorBtn.classList.add("active");
        alunoBtn.classList.remove("active");
    });

    alunoBtn.addEventListener("click", function() {
        selectedRole = "aluno";
        alunoBtn.classList.add("active");
        professorBtn.classList.remove("active");
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        // Validação com base no papel selecionado
        if (selectedRole === "professor" && username === "123" && password === "123") {
            window.location.href = "profHome.html";
        } else if (selectedRole === "aluno" && username === "321" && password === "321") {
            window.location.href = "alunoHome.html";
        } else {
            alert("Nome de usuário ou senha incorretos!");
        }
    });
});
