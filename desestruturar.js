const alunos = ['joao', 'juliana', 'caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

function exibeNomeNota(aluno) {
    if(lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    } else {
        console.log(`${aluno} não existe na lista`);
    }
}

exibeNomeNota('juliana');
exibeNomeNota('valim')