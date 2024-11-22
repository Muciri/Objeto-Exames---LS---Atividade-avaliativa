//classe
class Exam {
    constructor(resposta, peso) {
        this.resposta = resposta;
        this.peso = peso;
        this.exams = [];
    }

    add(exam) {
        this.exams.push(exam);
    }
}
//respostas e peso
const resposta = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}; 
const peso = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};

//alunos
const aluno1 = {
    student: 'Alice',
    values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
}

const aluno2 = {
    student: 'Bob',
    values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
}

//teste
prova = new Exam(resposta, peso)
prova.add(aluno1)
prova.add(aluno2)

console.log(prova.exams)

//teste notas (a melhorar)
function nota(resposta, aluno){
    let nota = 0;

    for (const questao in resposta) {
        if (resposta[questao] === aluno[questao]) {
            nota += 2; 
        }
    }

    return nota
}
console.log( nota(resposta, aluno1.values) )