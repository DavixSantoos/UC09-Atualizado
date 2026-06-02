const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function buscarDetalhes() {
    try {
        const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
        const produto = await response.json();

        console.log(produto);

        document.getElementById("dados-produto").innerHTML = `
            <p><strong>ID</strong>: ${produto.id}</p>
            <p><strong>Nome</strong>: ${produto.nome}</p>
            <p><strong>Preço</strong>: ${produto.preco}</p>
            <p><strong>Quantidade</strong>: ${produto.quantidadeEstoque}</p>
            <p><strong>Fornecedor</strong>: ${produto.fornecedorId || 'Não Cadastrado'}</p>
            <p><strong>Data de Vencimento</strong>: ${produto.dataVencimento || '--/--/--'}</p>
        `
    } catch (error) {
        document.getElementById("dados-produto").innerHTML = '<p style="color: red;">Erro ao carregar detalhes</p>'
    }
}

buscarDetalhes();