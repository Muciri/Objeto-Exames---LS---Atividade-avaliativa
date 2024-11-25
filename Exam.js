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

    add(aluno) {
        let nota_aluno = this.nota(aluno.values);
        aluno.nota = nota_aluno;
        this.exams.push(aluno);
    }
    
    avg() {
        let avg = 0;
        for (let exam of this.exams) {
            avg += exam.nota;
        }
        return (avg / this.exams.length).toFixed(1);  
    }
    
    min() {
        let menor = 999999999999;
        for(let exam of this.exams){
            if(exam.nota < menor){
                menor = exam.nota
            }
        }
        return menor
    }
    
    max() {
        let maior = -999999999999;
        for(let exam of this.exams){
            if(exam.nota > maior){
                maior = exam.nota;
            }
        }
        return maior
    }

    lt(num){
        let cont_gt = 0;
        for(let exam of this.exams){
            if(exam.nota < num){
                cont_gt += 1;
            }
        }
        return cont_gt
    }

    gt(num){
        let cont_lt = 0;
        for(let exam of this.exams){
            if(exam.nota > num){
                cont_lt += 1;
            }
        }
        return cont_lt
    }
    
}

export {Exam}