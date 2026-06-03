const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
 
async function buscarDetalhes() {
    try {
    const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
    if(!response) throw new Error("Erro ao carregar produto");
 
    const produto = await response.json();
    console.log(produto)

    document.getElementById("dados-produto").innerHTML = `
    <h3><strong>Nome:</strong> ${produto.nome}</h3>
        <h4><strong>Preço:</strong> R$${produto.preco}</h4>
    
    ` 
    } catch (error) {
        console.error("Erro ao carregar detalhes do produto: ", error);
        document.getElementById("dados-produto").innerHTML = `<p>Erro ao carregar detalhes do produto. Tente novamente mais tarde.</p>`;
    }
}
 
document.getElementById("btn-excluir").addEventListener('click', async () => {});
try {
     const response = await fetch(`${API_BASE_URL}/produtos/${id}`,{
        method: 'DELETE'
    })

    if(!response.ok) throw new Error("Erro ao excluir produto");


     window.location.href = 'index.html';
    }catch (error) {
    console.error("Erro ao Excluir: ", error);
    alert('Erro ao excluir o produto. Tente novamente!')
}
buscarDetalhes();