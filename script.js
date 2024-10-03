ocument.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLivro');
    const livrosContainer = document.getElementById('livrosContainer');
    
    function getLivros(){
        return JSON.parse(localStorage.getItem('livros')) || [];
    }
    function saveLivros(livros){
        localStorage.setItem('livros', JSON.stringify(livros));
    }
    function displayLivros(){
        const livros = getLivros();
        livrosContainer.innerHTML = '';
    
        livros.forEach((livro, index) => {
            const livroItem = document.createElement('div');
            livroItem.classList.add('livroItem');
            livroItem.innerHTML = `        
            <img src="${livro.capa}" alt="Capa do livro">
            <h3>${livrp.nome}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>Ano: ${livro.ano}</p>
            <p>Gênero: ${livro.genero}</p>
            <p>Preço: R$ ${livro.preco}</p>
            <p>Páginas: ${livro.paginas}</p>
            <p>Descrição: ${livro.descricao}</p>
            <p>ISBN: ${livro.isbn}</p>
            <p>Editora: ${livro.editora}</p>
            <button onclick="editarLivro(${index})">Editar</button>
            <button onclick="removerLivro(${index})">Remover</button>
            `;
            livrosContainer.appendChild(livroItem);

        });
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const livro = {
            nome: document.getElementById('nome').value,
            autor: document.getElementById('autor').value,
            ano: document.getElementById('ano').value,
            genero: document.getElementById('genero').value,
            preco: document.getElementById('preco').value,
            paginas: document.getElementById('paginas').value,
            descricao: document.getElementById('descricao').value,
            isbn: document.getElementById('isbn').value,
            editora: document.getElementById('editora').value,
            capa: document.getElementById('capa').files.length > 0 ? URL.createObjectURL(document.getElementById('capa').files[0]) : 'default.jpg'
        };
        const livros = getLivros();
        livros.push(livro);
        saveLivros(livros);

        form.reset();
        displayLivros();
    });

        function editarLivro(index){
            alert('Função de edição ainda não implementada');

        }
        function removerLivro(index){
            const livros = getLivros();
            livros.splice(index, 1);
            saveLivros(livros);
            displayLivros();
        }

        displayLivros();
    });