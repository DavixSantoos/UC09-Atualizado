const form = document.getElementById('form-fornecedor');
 
async function salvarFornecedor() {
 
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
 
        const nome = document.getElementById('nomeFantasia').value
        const cnpj = document.getElementById('cnpj').value
 
        if (!nome || !cnpj) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
       
        const fornecedorDados = {
            nomeFantasia: nome,
            cnpj: cnpj,
        }
 
        const url = `${API_BASE_URL}/fornecedores`;
 
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(fornecedorDados)
            });
 
            if (!response.ok) throw new Error("Erro ao salvar fornecedor")
 
            window.location.href = 'index.html';
        } catch (error) {
            console.error("Erro ao salvar: ", error);
            alert('Erro ao salvar o fornecedor. Tente novamente!')
        }
 
    })
}
 
salvarFornecedor();