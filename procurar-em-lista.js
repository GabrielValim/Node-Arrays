const alunos = ['joao', 'juliana', 'caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

function exibeNomeNota(aluno) {
    if(lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    } else {
        console.log(`${aluno} não existe na lista`);
    }
}

exibeNomeNota('juliana');
exibeNomeNota('valim')