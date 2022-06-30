console.log("Hello, World");

const alunos = [{
    nome: 'João',
    nota: 5,
    turma: '1B'
}, {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
}, {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
}, {
    nome: 'Ricardo',
    nota: 3,
    turma: '1B'
}, ];

spanTwo.outerHTML = alunos[0].nome + ' Nota: ' +
    alunos[0].nota + ' <BR> ' +
    alunos[1].nome + ' Nota: ' + alunos[1].nota + '<BR> ' +
    alunos[2].nome + ' Nota: ' + alunos[2].nota + '<BR> ' +
    alunos[3].nome + ' Nota: ' + alunos[3].nota;

function alunoAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    spanOne.innerHTML = aprovados;
    return aprovados;

}
console.log(alunoAprovados(alunos, 5));


function imprimirAlunos(arr) {
    let imprimir = [];
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome, turma } = arr[i];

        imprimir.push('Nome: ' + nome, ' Nota: ' + nota, ' Turma: ' + turma + '<BR>');
    }
    spanThree.innerHTML = imprimir;
    return imprimir;
}

console.log(imprimirAlunos(alunos));