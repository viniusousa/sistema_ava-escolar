const form = document.querySelector('form')

const nome = document.getElementById('nomeprof')
const periodo_prof = document.getElementById('periodo-prof')
const disciplina = document.getElementById('disciplina')

const periodo_turma = document.getElementById('periodo-turma')
const quest1_turma = document.getElementById('deacordo1-turma')
const quest2_turma = document.getElementById('deacordo2-turma')
const quest3_turma = document.getElementById('deacordo3-turma')
const quest4_turma = document.getElementById('deacordo4-turma')
const quest5_turma = document.getElementById('deacordo5-turma')
const quest6_turma = document.getElementById('deacordo6-turma')

const quest1 = document.getElementById('deacordo1')
const quest2 = document.getElementById('deacordo2')
const quest3 = document.getElementById('deacordo3')
const quest4 = document.getElementById('deacordo4')
const quest5 = document.getElementById('deacordo5')
const quest6 = document.getElementById('deacordo6')
const quest7 = document.getElementById('deacordo7')

const res = document.getElementById('results')


form.addEventListener('submit', e => {
    e.preventDefault()


    res.innerHTML += `
    <div style="border-bottom-style: solid;">
        <div>
            <label>Professor(a): ${nome.value}, ${periodo_prof.value}, ${disciplina.value} </label 
        </div>
        <div>
            <label>Turma: ${periodo_turma.value}</label>
        </div>
        <div>
            <h2>Avaliação da Turma</h2>
            <p><strong>CF</strong> (concordo fortemente) <strong>C</strong> (concordo) <strong>D</strong> (discordo) <strong>DF</strong> (discordo fortemente)</p>
        </div>
        <div>
        <label>1. Os alunos frequentam as aulas de forma regular: <strong>${quest1_turma.value}</strong></label>
            </div>
        <div>
            <label>2. Os alunos entregam as atividades propostas no prazo estabelecido: <strong>${quest2_turma.value}</strong></label>
        </div>
        <div>
            <label>3. A turma costuma fazer perguntas: <strong>${quest3_turma.value}</strong></label>
        </div>
        <div>
            <label>4.Os alunos usam estratégias criativas na resolução das atividades: <strong>${quest4_turma.value}</strong></label>
        </div>
        <div>
            <label>5.Estão atentos as explicações: <strong>${quest5_turma.value}</strong></label>
        </div>
        <div>
            <label>6. Demonstram alto interesse na disciplina: <strong>${quest6_turma.value}</strong></label>
        </div>
        <div>
            <h2>Autoavaliação Docente</h2>
            <p><strong>CF</strong> (concordo fortemente) <strong>C</strong> (concordo) <strong>D</strong> (discordo) <strong>DF</strong> (discordo fortemente)</p>
        </div>
        <div>
        <label>1. Sou pontual nos meus horários de trabalho: <strong>${quest1.value}</strong></label>
        </div>
        <div>
            <label>2. Sou assíduo: <strong>${quest2.value}</strong></label>
        </div>
        <div>
            <label>3. Os exercicíos avaliativos são entregues nas datas marcadas: <strong>${quest3.value}</strong></label>
        </div>
        <div>
            <label>4. Os planejamentos são entegues nas datas marcadas: <strong>${quest4.value}</strong></label>
        </div>
        <div>
            <label>5. Busco formação para ser um docente capacitado: <strong>${quest5.value}</strong></label>
        </div>
        <div>
            <label>6. Compartilho experiências profissionais com outros docentes: <strong>${quest6.value}</strong></label>
        </div>
        <div>
        <label for="deacordo7"><strong>Agora descreva o que você acha do seu desempenho profissional:</strong></label>
            </br>
        <p>${quest7.value}</p>
        </div>
    </div>
    `
    form.reset()    
})

