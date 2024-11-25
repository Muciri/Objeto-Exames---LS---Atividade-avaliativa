import { Exam } from "./Exam.js";

//exemplo de prova
const resposta = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}; 
const peso = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};
const prova_t = new Exam(resposta, peso);

//alunos
const aluno1 = {
    student: 'Alice',
    values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
};

const aluno2 = {
    student: 'Bob',
    values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

//teste add
prova_t.add(aluno1);
prova_t.add(aluno2);
console.log(prova_t.exams);
console.log(prova_t.avg())

console.log('menor nota: ', prova_t.min())
console.log('maior nota: ', prova_t.max())


console.log('notas menores que 7:', prova_t.lt(7) )
console.log('notas maiores que 7:', prova_t.gt(7) )