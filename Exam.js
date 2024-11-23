//classe Exam
class Exam {
    constructor(resposta, peso) {
        this.resposta = resposta;
        this.peso = peso;
        this.exams = [];
    }

    nota(aluno){
        let nota = 0;
        for (let questao in this.resposta) {
            if (this.resposta[questao] === aluno[questao]) {
                nota += this.peso[questao]; 
            }
        }
        return nota
    }

    add(exam) {
        this.exams.push(exam);
    }
};

export {Exam}