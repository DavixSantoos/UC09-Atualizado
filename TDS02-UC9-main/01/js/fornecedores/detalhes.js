const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function buscarDetalhes() {
    try {
        const response = await fetch(`${API_BASE_URL}/fornecedores/${id}`);
        
        const fornecedor = await response.json();

        console.log(fornecedor);

        document.getElementById("dados-fornecedor").innerHTML = `
            <p><strong>ID</strong>: ${fornecedor.id}</p>
            <p><strong>Nome</strong>: ${fornecedor.nomeFantasia}</p>            
            <p><strong>CPNJ</strong>: ${fornecedor.cnpj}</p>            
        `
    } catch (error) {
        document.getElementById("dados-fornecedor").innerHTML = '<p style="color: red;">Erro ao carregar detalhes</p>'
    }
}

buscarDetalhes();