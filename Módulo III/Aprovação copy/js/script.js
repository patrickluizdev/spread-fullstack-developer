console.log("Hello, World");


const alunos = [{
    nome: 'João',
    nota: 5,
    turma: '1B',
}, {
    nome: 'Paulo',
    nota: 6,
    turma: '2C',
}, {
    nome: 'Sofia',
    nota: 9,
    turma: '1B',
}, {
    nome: 'Ricardo',
    nota: 3,
    turma: '1B',
}, ];

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