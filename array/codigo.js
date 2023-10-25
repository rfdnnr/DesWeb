const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (entrada) => {
    const container_atleta = document.createElement ('div');
    container_atleta.style.width = '20 rem';
    container_atleta.style.backgroundColor = '#020202';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    container_atleta.style.color = 'white'
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo)
    container_atleta.appendChild(imagem)
    container_atleta.appendChild(descricao)

    div_container.appendChild(container_atleta)
}

//atletas.forEach((atleta) => {cria_cartao(atleta)})

/*
let indice = 0;

while (indice < atletas.length){
    cria_cartao(atletas[indice]);
    console.log(indice)
    indice++;
}

*/

for (let indice of atletas){
    cria_cartao(indice);
    console.log(indice)
}


/*for(let indice = 25; indice < atletas.length; indice--){
    cria_cartao(atletas[indice]);
    console.log(indice)
}
*/