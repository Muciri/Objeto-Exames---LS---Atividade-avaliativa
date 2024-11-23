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

//teste notas
console.log(`a nota de ${aluno1.student} é: ${prova_t.nota(aluno1.values)} `);
console.log(`a nota de ${aluno2.student} é: ${prova_t.nota(aluno2.values)} `);

//teste add
prova_t.add(aluno1);
prova_t.add(aluno2);
console.log(prova_t.exams);