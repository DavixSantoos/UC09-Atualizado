const form = document.getElementById('form-fornecedor');
//fornecedor
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

async function salvarFornecedor() {

    if(id){
        document.getElementById('titulo-pagina').innerText = "Editar Fornecedor"

        try {
            const response = await fetch  (`${API_BASE_URL}/fornecedores/${id}`);
            if (!response.ok) throw new Error("Erro ao carregar fornecedor!");

            const fornecedor = await response.json();

            console.log(fornecedor);

           document.getElementById('nomeFantasia').value = fornecedor.nomeFantasia;
           document.getElementById('cnpj').value = fornecedor.cnpj;

        } catch(error){
            console.log("Erro ao carregar Fornecedor: ",error);
            alert('Erro ao carregar dados do fornecedor');
        }
    }
 
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
 
        const nome = document.getElementById('nomeFantasia').value
        const cnpj = document.getElementById('cnpj').value
 
        if (!nome || !cnpj) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
       
        const fornecedorDados = {
            id: id ? parseInt(id) : 0,
            nomeFantasia: nome,
            cnpj: cnpj,
        }
           


        const method = id? 'PUT' : 'POST';

        const url = id ? `${API_BASE_URL}/fornecedores/${id}` : `${API_BASE_URL}/fornecedores`;
 
        try {

            const response = await fetch(url, {
                method: method,
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