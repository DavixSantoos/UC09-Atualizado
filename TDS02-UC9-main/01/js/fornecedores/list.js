async function carregarFornecedores() {
    try {
        const response = await fetch(`${API_BASE_URL}/fornecedores`,{
            method: 'GET',
            headers: getHeaders()
        });

        if(response.status == 401){
            alert("Sessão expirada! por favor, faça login novamente ");
            localStorage.removeItem('token');
            window.localStorage.href = '../../index.html';
            return;
        }else if (response.status ==403){
          alert("sem acesso ao recurso!");
            localStorage.removeItem('token');
            window.localStorage.href = '../../index.html';
            //alerta em tela, "Não AUTORIZADO", redirecionar para o index
        } 
        const fornecedores = await resposta.json()

        const tbody = document.getElementById("tabela-fornecedores")
        tbody.innerHTML = '';

        fornecedores.forEach(fornecedor => {
            const novaLinhaDaTabela = document.createElement('tr')
            novaLinhaDaTabela.innerHTML = `
                <td>${fornecedor.id}</td>
                <td>${fornecedor.nomeFantasia}</td>
                <td>${fornecedor.cnpj}</td>
                <td>
                    <a href="./detalhes.html?id=${fornecedor.id}">Detalhes</a>
                    <a href="./form.html?id=${fornecedor.id}">Editar</a>
                    <a href="./excluir.html?id=${fornecedor.id}">Excluir</a>
                </td>
            `;
            tbody.appendChild(novaLinhaDaTabela)
        });
        
    } catch (error) {
        console.error("Erro ao carregar fornecedores", error)
    }
}

carregarFornecedores()